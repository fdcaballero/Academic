$(function(){
    add();
    limpiar();
    Listar();
    LimpiarLista();
    CargarDatos();
    ListaResponsable();
    ListarCursos();
    CargarMenuRepresentante();
    CrearRepresentante();
    ActualizarRepresentante();
    cargarDatosResponsable();
    Elim();
    Guardar();
});



function cursoSeleccionado(id){ //ESTA FUNCION PERMITE RETORNAR UN CURSO SELECCIONADO NO ACTIVA EN LA APP
	
	if(id != 0){
		var curso;
		$.ajax("./api/v1/curso", {
			
			contentType : "application/json",
			dataType :"json",
			type : "GET",
			success: function(data){
				
				$.each(datos, function(i, curso) {
					if(curso.id == id ){
						 $("#curso").append("<option selected value=" + curso.id + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");
					}
						$("#curso").append("<option value=" + curso.id + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");
					                   
				 });
			},
			error : function (event){
				console.log ("Error", event);
				alert("Error al buscar curso intente nuevamente");
			}
		});
		return curso;
	}else{
		return 0;
	}
	
	
	
	
}

function ListarCursos(){ //ADICIONA A LA VISTA LA LISTA DE CURSOS AL APARTADO DE CREAR ESTUDIANTE
	//selectCurso  = document.getElementById('curso');
	
	$.ajax({
		url : "./api/v1/curso",
		contentType: "application/json",
		dataType:'json',
		type: "GET",
		success:function(datos){
			
			 $.each(datos, function(i, curso) {
				 $("#curso").append("<option value=" + curso.id + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");
				                   
			 });
			 		 
		},
		error : function(event){
   		 alert("error en el registro intente nuevamente");
   		 console.log("error" , event);
   	 	}
			
	});	


}

function ListaResponsable(){ //#RETORNA LOS RESPONSABLES A LA VISTA DESDE MODAL REGISTRAR ESTUDIANTE
	
	$.ajax("./api/v1/representante", {
		
		contentType:"application/json",
		dataType : "json",
		type :"GET",
		success :  function (datos){
			 $.each(datos, function(i, repre) {
				$("#ListaResponsable").append("<option value=" + repre.id + " id = "+repre.id+">" + repre.nombre + "   " + repre.apellido1 +" "+ repre.apellido2+ "</option>");
				
			 });
		},
		error: function(event){
			console.log("error en el listar representante");
			alert("ERROR");
		}
	});
	
}

function add(){  //CREA UN ESTUDIANTE EN LA BD 
 $('#crear').on("click",function(event){
    event.preventDefault();
    
    var nombre = $("#nombre").val();
    var apellido1 = $("#apellido1").val();
    var apellido2 = $("#apellido2").val();
    var nif  = $("#nif").val();
    var tel = $("#telefono").val();
    var correo  = $("#email").val();
    var idcurso = $("select[id = curso]").val();
    var repetidor = $("#repetidor").is("selected");
    var fechaAlta = $("#fecha_de_alta").val();
    var fechaBaja  = $("#fecha_de_baja").val();
    var observacion = $("#observaciones").val();
    var responsable = $("#ListaResponsable").val();
    
    console.log(" "+responsable +" "+  idcurso+ " " + repetidor +" " + fechaAlta +" "+fechaBaja+" "+ observacion );
    
  
    var estudiante;
    if(responsable && idcurso){
    	estudiante = {
	       	    "nombre" : nombre, "apellido1" : apellido1,
	       		"apellido2" : apellido2, "nif" : nif,
	            "telefono" : tel, "correo" : correo,
	            "repetidor" : repetidor, "fecha_alta" : fechaAlta,
	            "fecha_baja" : fechaBaja, "observacion" : observacion,
	       		"var1String" : responsable , "varString" :idcurso
	     };
   }else if(idcurso && !responsable){
    	estudiante = {
	       	    "nombre" : nombre, "apellido1" : apellido1,
	       		"apellido2" : apellido2, "nif" : nif,
	            "telefono" : tel, "correo" : correo,
	            "repetidor" : repetidor, "fecha_alta" : fechaAlta,
	            "fecha_baja" : fechaBaja, "observacion" : observacion,
	            "varString" :idcurso
	     };
    }else if(responsable && !idcurso){
    	estudiante = {
	       	    "nombre" : nombre, "apellido1" : apellido1,
	       		"apellido2" : apellido2, "nif" : nif,
	            "telefono" : tel, "correo" : correo,
	            "repetidor" : repetidor, "fecha_alta" : fechaAlta,
	            "fecha_baja" : fechaBaja, "observacion" : observacion,
	       		"var1String" : responsable
	     };
    }else{
    	estudiante = {
	       	    "nombre" : nombre, "apellido1" : apellido1,
	       		"apellido2" : apellido2, "nif" : nif,
	            "telefono" : tel, "correo" : correo,
	            "repetidor" : repetidor, "fecha_alta" : fechaAlta,
	            "fecha_baja" : fechaBaja, "observacion" : observacion
	     };
    }
    
		 
  
   if (nombre && apellido1 && nif && fechaAlta){
	   
	   $.ajax("./api/v1/estudiante",
		 	    {
		 	    	contentType : "application/json",
		 	    	dataType : "json",
		 	    	type : "POST",
		 	    	data : JSON.stringify(estudiante),
		 	    	success : function(dataEstudiante){
		 	    		alert("El estudiante ha sido creado",dataEstudiante.id);
		 	    		limpiar();
		 	    	},
		 	    	error: function(event){
		 	    		alert("Error en el registro vuelva a intentarlo");
		 	    		console.log("Error", event);
		 	    	}
		 	   });
	   
   }else{
	  alert("faltan campos por llenar");
   }
   
 });
}

function Elim(){ //ELIMINA UN ESTUDIANTE DE LA BD
	$("#elimEst").on("click", function(event){
		event.preventDefault();
		alert("llegando a la funcion" + getId());
		
		if(getId()){
			
			$.ajax("api/v1/estudiante/" + getId(), 
				{
				contentType : "application/json",
				Type : "DELETE",
				success: function (){
					
					 var td = $("input[id = "+getId()+"]");
	        		 td.closest("tr").remove();
				},
				error: function(event){
					alert("error al eliminar el estudiante");
					console.log("Error" , event);
				}
			});
		}else{
			alert("Seleccione un estudiante");
		}
			
	});
		
}

function cargarDatosResponsable(){ // CARGA LOS DATOS DEL REPRESENTANTE EN LA VISTA PARA EDITARLOS
	$("#ListaResponsableEdit").change(function(){
		var id  = $("#ListaResponsableEdit").val();
		$.ajax("./api/v1/representante/"+ id, {
			contentType:"application/json",
			dataType : "json",
			type :"GET",
			success :  function (datos){
				
				 $("input[id =  DnombreR]").val(datos.nombre);
				 $("input[id =  DapellidoR]").val(datos.apellido1);
				 $("#DapellidoRs").val(datos.apellido2);
				 $("#DnifR").val(datos.nif);
				 $("#DtelefonoR").val(datos.telefono);
				 $("#DcorreoR").val(datos.correo);
				
			},
			error: function(event){
				console.log("error en el listar representante");
				alert("ERROR");
			}
		});
		// Carga de datos
		
		
	});
}

function ActualizarRepresentante(){ //ACTUALIZA LOS DATOS DEL REPRESENTANTE
	$("#guardarRep").on("click", function(event){
		event.preventDefault();
		 
		 // Toma de valores
			var nombreRep = $("#DnombreR").val();
			var apellidoRep = $("#DapellidoR").val();
			var apellidoRep1 = $("#DapellidoRs").val();
			var nif =  $("#DnifR").val();
			var telefono =  $("#DtelefonoR").val();
			var correoRep = $("#DcorreoR").val();
			var id  = $("#ListaResponsableEdit").val();
			
			
			if( nombreRep && apellidoRep && apellidoRep1 && nif && telefono && correoRep){
			
				
				var  responsable= {

				    	  "nombre" : nombreRep, "apellido1" : apellidoRep, 
				    	  "apellido2" : apellidoRep1, "nif" : nif,
				    	  "telefono" : telefono, "correo" : correoRep 
				       };
				
				   $.ajax("./api/v1/representante/"+id,
					    	{
					    		contentType : "application/json",
					    		dataType : "json",
					    		type :"PUT",
					    		data : JSON.stringify(responsable),
					    		success: function(datoResp){
					    			console.log("Responsable Actualizado");
					    			$("input[type = text]").val("");
					    			$("input[type = tel]").val("");
					    			$("input[type = email]").val("");
					    			$("#ListaResponsableEdit").val("");
					    			
					    			 
					    		},
					    		error : function(event){
					    			console.log("Error al cargar el Representante");
					    			alert("No se puede guardar");
					    			
					    		}
					    	});
				   
			}else{
				console.log("pasando aqui");
			}
	});
	
}

function CrearRepresentante(){ // CREA UN NUEVO REPRESENTANTE EN LA BD
	$("#crearReprensentante").on("click", function(event){
		event.preventDefault();
		
		var Nameresponsable = $("#nombreR").val();
	    var apellidoRe  = $("#apellidoR").val();
	    var apellido1Re = $("#apellido2R").val();
	    var nifRe = $("#nifR").val();
	    var telefonoRe = $("#telefonoR").val();
	    var correoRe = $("#correoR").val();
	 
	    if( Nameresponsable && apellidoRe && apellido1Re && nifRe && telefonoRe && correoRe){
	    	var  responsable= {

	    	    	  "nombre" : Nameresponsable, "apellido1" : apellidoRe, 
	    	    	  "apellido2" : apellido1Re, "nif" : nifRe,
	    	    	  "telefono" : telefonoRe, "correo" : correoRe 
	    	       };
	    	console.log("estoy aqui");
	    	$.ajax("./api/v1/representante",
			    	{
			    		contentType : "application/json",
			    		dataType : "json",
			    		type :"POST",
			    		data : JSON.stringify(responsable),
			    		success: function(datoResp){
			    			 alert("Representante Creado");
			    			 $("input[type = text]").val("");
			    			 $("input[type = tel]").val("");
			    			 $("input[type = email]").val("");
			    			 /* $("#nombreR").val("");
			    			    $("#apellidoR").val("");
			    			    $("#apellido2R").val("");
			    			    $("#nifR").val("");
			    			    $("#telefonoR").val("");
			    			    $("#correoR").val("");	*/			    		
			    		},
			    		error : function(event){
			    			console.log("Error al cargar el Representante", event);
			    			alert("No se puede guardar");
			    		}
			    	});
	    }else{
	    	
	    	alert("Error al crear el representante");
	    }//FinSi
	    
	});
		
}

function CargarMenuRepresentante(){//LISTA TODOS LOS REPRESENTANTES EXISTENTES PARA SU EDICION
	$("#EditRep").on("click", function(event){
			event.preventDefault();
			//$("#actualizar-representante").modal("show"= true);
			
		$.ajax("./api/v1/representante", {
			contentType:"application/json",
			dataType : "json",
			type :"GET",
			success :  function (datos){
				 $.each(datos, function(i, repre) {
					$("#ListaResponsableEdit").append("<option value=" + repre.id + " id = "+repre.id+">" + repre.nombre + "   " + repre.apellido1 +" "+ repre.apellido2+ "</option>");
					
				 });
			},
			error: function(event){
				console.log("error en el listar representante");
				alert("ERROR");
			}
		});
		
	});
	
}

function limpiar(){ //LIMPIA LOS CAMPOS DE TEXTO
	$("input[type = text]").val("");  
	$("input[type = date]").val("");
	$("input[type = tel]").val("");  
	$("input[type = email]").val("");
	$("select").val("");
	/*  $("#nombre").val("");
	    $("#apellido1").val("");
	    $("#apellido2").val("");
	    $("#nif").val("");
	    $("#telefono").val("");
	    $("#email").val("");
	    $("#curso").val("");
	    $("#repetidor").val("");
	    $("#fecha_de_alta").val("");
	    $("#fecha_de_baja").val("");
	    $("#observaciones").val("");
	   // DATOS DEL RESPONSABLE 
	    $("input[id = nombreR]").val("");
	    $("input[id = apellidoR]").val("");
	    $("input [id = apellido2R]").val("");
	    $("input [id = nifR]").val("");
	    $("input [id = telefonoR]").val("");
	    $("input[id= correoR]").val("");
*/
	
}

function agregaCursoEdit(val){ // AGREGA EL LISTADO DE DATOS DEL CURSO Y EL QUE POSEE EL ESTUDIANTE A LA VISTA DE EDITAR
	
	$.ajax({
		url : "/api/v1/curso",
		contentType: "application/json",
		dataType:'json',
		type: "GET",
		success:function(datos){
			
			 $.each(datos, function(i, curso) {
				
					if(val && curso.id == val){
						 $("#Dcurso").append("<option value=" + curso.id + " id = "+curso.id+" selected >" + curso.nivel + " " + curso.etapa + "</option>");
					}else{
						 $("#Dcurso").append("<option value=" + curso.id + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");
					}
				
				
				
				
				                   
			 });
			 		 
		},
		error : function(event){
			alert("error en el registro intente nuevamente");
			console.log("error" , event);
   	 	}
			
	});	
	
}

function agregaRepresentante(val ){	//AGREGA EL LISTADO DE DATOS DEL REPRESENTANTE Y SELECCIONAL EL QUE POSEE EL ESTUDIANTE PARA EDITAR Y POSTERIORMENTE CAMBIAR
	
	$.ajax("./api/v1/representante", {
		
		contentType:"application/json",
		dataType : "json",
		type :"GET",
		success :  function (datos){
			 $.each(datos, function(i, repre) {
				if(val && repre.id == val){
					$("#ListaResponsablD").append("<option value=" + repre.id + " id = "+repre.id+" selected >" + repre.nombre + "   " + repre.apellido1 +" "+ repre.apellido2+ "</option>");
				}else{
					$("#ListaResponsablD").append("<option value=" + repre.id + " id = "+repre.id+">" + repre.nombre + "   " + repre.apellido1 +" "+ repre.apellido2+ "</option>");
				}
			 });
		 },
		 error: function(event){
			console.log("error en el listar representante");
			alert("ERROR");
	     }
	});
	
	
}

function CargarDatos(){ //PERMITE CARGAR LOS DATOS DEL ESTUDIANTE EN EL MODAL PARA POSTERIORMENTE SER EDITADOS
	$("#datosEst").on("click" ,function(event){
		event.preventDefault();
		if(getId()){
			$.ajax("./api/v1/estudiante/"+getId(),{
				contentType:"application/json",
				dataType : "json",
				type :"GET",
				success :  function (datos){
					 $("input[id =  Dnombre]").val(datos.nombre);
					 $("input[id =  Dapellido1]").val(datos.apellido1);
					 $("input[id =  DapellidoD]").val(datos.apellido2);
					 $("input[id =  Dnif]").val(datos.nif);
					 $("input[id =  Dtelefono]").val(datos.telefono);
					 $("input[id =  Dcorreo]").val(datos.correo);
					 if(datos.grado){
						 agregaCursoEdit(datos.grado.id);
					 }else{
						 agregaCursoEdit();
					 }
					 if(datos.responsable){
						 agregaRepresentante(datos.responsable.id);
					 }else{
						 agregaRepresentante();
					 }
					 
					 $("input[id =  Drepetidor]").prop("checked", datos.repetidor);
					 $("input[id =  DfechaAlta]").val(datos.fecha_alta);
					 $("input[id =  DfechaBaja]").val(datos.fecha_baja);
					 $("input[id =  Dobservaciones]").val(datos.observacion);
					 // DATOS DEL RESPONSABLE 
				/*	if(datos.responsable != null) {
						$("input[id =  DnombreR]").val(datos.responsable.nombre);
						 $("input[id =  DapellidoR]").val(datos.responsable.apellido1);
						 $("input [id = DapellidoRs]").val(datos.responsable.apellido2);
						 $("input [id = DnifR]").val(datos.responsable.nif);
						 $("input [id = DtelefonoR]").val(datos.responsable.telefono);
						 $("input[id= DcorreoR]").val(datos.responsable.correo);
					}
					 
					 
					
					 $("#Dnombre").val(datos.nombre);
					  $("#Dapellido1").val(datos.apellido1);
					  $("#DapellidoD").val(datos.apellido2);
					  $("#Dnif").val(datos.nif);
					  $("#Dtelefono").val(datos.telefono);
					  $("#Dcorreo").val(datos.correo);
					  $("#Dcurso").val(datos.grado);
					  $("#Drepetidor").val(datos.repetidor);
					  $("#DfechaAlta").val(datos.fecha_alta);
					  $("#DfechaBaja").val(datos.fecha_baja);
					  $("#Dobservaciones").val(datos.observacion);
					   */ // DATOS DEL RESPONSABLE
					 /* $("#DnombreR").val(datos.responsable.nombre);
					  $("#DapellidoR").val(datos.responsable.apellido1);
					  $("#DapellidoRs").val(datos.responsable.apellido2);
					  $("#DnifR").val(datos.responsable.nif);
					  $("#DtelefonoR").val(datos.responsable.telefono);
					  $("#DcorreoR").val(datos.responsable.correo);*/
				},
				error : function(event){
					console.log("No carga datos");
					alert(error , "No se logro cargar los datos");
				} 
				
			});
		}else{
			alert("No se ha seleccionado un estudiante");
		}
	});
	
}

function Guardar(){ //ENVIA LOS DATOS ENVIA LOS DATOS YA EDITADOS  A LA BD  PARA ALMACENARLOS
	//FALTA TERMINAR ESTA PARTE
	$("#guardarEst").on("click", function(event){
	
		event.preventDefault();
		var nombre =  $("input[id =  Dnombre]").val();
		var apellido = $("input[id =  Dapellido1]").val();
		var apellido1 = $("input[id =  DapellidoD]").val();
		var cc = $("input[id =  Dnif]").val();
		var celular =  $("input[id =  Dtelefono]").val();
		var correo =  $("input[id =  Dcorreo]").val();
		var cursoid = $("select[id =  Dcurso]").val();///Tomamos el id del curso para ser buscado y cargado a la bd
		var repetidor = $("input[id =  Drepetidor]").is("selected");
		var fecha = $("input[id =  DfechaAlta]").val();
		var fechaB =  $("input[id =  DfechaBaja]").val();
		var observacion = $("input[id =  Dobservaciones]").val();
		var datoResp = $("#ListaResponsablD").val();
		 
		
		//var curso = cursoSeleccionado(cursoid);
		
		console.log(datoResp+" representante  "+ nombre + " " + apellido +" " + apellido1 +" "+ cc +" " +celular+" " +correo+" el id del curso es"+ cursoid+
				"  repretidor  " + repetidor +" " + fecha +" "+fechaB+" "+ observacion + " " +datoResp);
	    
	    var estudiante;
	    
	     if(datoResp && cursoid){
	    	 estudiante  = {
	 	    		"nombre" : nombre, "apellido1" : apellido,
	 			    "apellido2" : apellido1, "nif" : cc,
	 			    "telefono" : celular, "correo" : correo,
	 			    "repetidor" : repetidor, "fecha_alta" : fecha,
	 			    "fecha_baja" : fechaB, "observacion" : observacion,
	 			    "var1String" : datoResp , "varString" :cursoid
	 			 };
	     }else if(datoResp && !cursoid){
	    	 estudiante  = {
		 	    		"nombre" : nombre, "apellido1" : apellido,
		 			    "apellido2" : apellido1, "nif" : cc,
		 			    "telefono" : celular, "correo" : correo,
		 			    "repetidor" : repetidor, "fecha_alta" : fecha,
		 			    "fecha_baja" : fechaB, "observacion" : observacion,
		 			    "var1String" : datoResp 
		 			 };
	     }else if(!datoResp && cursoid){
	    	 estudiante  = {
		 	    		"nombre" : nombre, "apellido1" : apellido,
		 			    "apellido2" : apellido1, "nif" : cc,
		 			    "telefono" : celular, "correo" : correo,
		 			    "repetidor" : repetidor, "fecha_alta" : fecha,
		 			    "fecha_baja" : fechaB, "observacion" : observacion,
		 			    "varString" : cursoid 
		 			 };
	     }else{
	    	 estudiante  = {
		 	    		"nombre" : nombre, "apellido1" : apellido,
		 			    "apellido2" : apellido1, "nif" : cc,
		 			    "telefono" : celular, "correo" : correo,
		 			    "repetidor" : repetidor, "fecha_alta" : fecha,
		 			    "fecha_baja" : fechaB, "observacion" : observacion
		 			   
		 			 };
	     }
	   if (nombre && apellido && cc && fecha){
		   
		   $.ajax("./api/v1/estudiante/"+ getId(),
			 	    {
			 	    	contentType : "application/json",
			 	    	dataType : "json",
			 	    	type : "PUT",
			 	    	data : JSON.stringify(estudiante),
			 	    	success : function(dataEstudiante){
			 	    		alert("El estudiante ha sido Actualizado", dataEstudiante.id);
			 	    		
			 	    	},
			 	    	error: function(event){
			 	    		alert("Error en el registro vuelva a intentarlo");
			 	    		console.log("Error", event);
			 	    	}
			 	   });
		   
	   }else{
		   alert("Datos incompletos ");
	   }
		
		/* $.ajax("./api/v1/representante/"+getId(),{
  		contentType : "application/json",
  		dataType : "json",
  		type :"PUT",
  		data : JSON.stringify(estudiante),
  		success: function(datoResp){
  			alert("Actualizado  con exito");
  		},
  		error : function(event){
  			console.log("error al guardar los datos" , event);
  			alert("error desde Actualizar");
  		}
	  });*/
	  
	});
}

function Listar(){ //EVENTO DESENCADENADO AL PRESIONAR EL BOTON BUSCAR.
	$("#buscar").on("click", function(event){
		event.preventDefault();
		var buscar = $("#buscaNombre").val();
		var buscar1 = $("#buscaCurso").val();
		
		var url; //al momento de funcionar se deben agregar las url
		console.log(buscar + " " + buscar1);
		if( buscar && buscar1){
			url = "api/v1/estudiante/"+ buscar + "/" + bucar1;
		}else if (buscar && !buscar1){
			url = "api/v1/estudiantes/"+buscar;
		}else if (buscar1 && !buscar){
			url = "api/v1/estudiantees/" +buscar1;
		}else{
			url = "api/v1/estudiante";
		}
		$("tbody.cuerpo-tableEst").children().remove();
		$.ajax({
			url : url,
			contentType:"application/json", 
			dataType : "json",
			type : "GET",
			success: function(data){
				$.each(data, function(i, e){
					if(e.responsable && e.grado){
						
						$("tbody.cuerpo-tableEst").append(
								"<tr data-id="+e.id+">" +
								    "<td>" + e.nombre + "</td>" +
								    "<td>" + e.grado.etapa + "</td>" +
								    "<td>" + e.responsable.nombre+ "</td>" +
								    "<td>" + e.fecha_alta + "</td>" +
								    "<td>" + e.fecha_baja + "</td>" +
								    "<td><input type ='radio' name ='resultadoEstudiante' value=" + e.id + " id ="+ e.id+ "></td>" +
								"</tr>");
					}else if(!e.responsable && !e.grado){
						
						$("tbody.cuerpo-tableEst").append(
								"<tr data-id="+e.id+">" +
								    "<td>" + e.nombre + "</td>" +
								    "<td>  -  </td>" +
								    "<td>  -  </td>" +
								    "<td>" + e.fecha_alta + "</td>" +
								    "<td>" + e.fecha_baja + "</td>" +
								    "<td><input type ='radio' name ='resultadoEstudiante' value=" + e.id + " id ="+ e.id+ "></td>" +
								"</tr>");
					}else if(!e.reponsable && e.grado){
						$("tbody.cuerpo-tableEst").append(
								"<tr data-id="+e.id+">" +
								    "<td>" + e.nombre + "</td>" +
								    "<td>" + e.grado.etapa + "</td>" +
								    "<td> - </td>" +
								    "<td>" + e.fecha_alta + "</td>" +
								    "<td>" + e.fecha_baja + "</td>" +
								    "<td><input type ='radio' name ='resultadoEstudiante' value=" + e.id + " id ="+ e.id+ "></td>" +
								"</tr>");
					}else{
						$("tbody.cuerpo-tableEst").append(
								"<tr data-id="+e.id+">" +
								    "<td>" + e.nombre + "</td>" +
								    "<td>      -      </td>" +
								    "<td>" +e.responsable.nombre + "</td>" +
								    "<td>" + e.fecha_alta + "</td>" +
								    "<td>" + e.fecha_baja + "</td>" +
								    "<td><input type ='radio' name ='resultadoEstudiante' value=" + e.id + " id ="+ e.id+ "></td>" +
								"</tr>");
					}
				});
				
			},
			error: function (event){
				console.log("error al intentar buscar ", event);
				alert("error al buscar datos")
			}
		});
	});
}

function getId(){ //RETORNA EL ID DE OBJETO SELECCIONADO DE LA TABLA
	return $("input[name = resultadoEstudiante]:checked").val();
}

function LimpiarLista(){ //ACCION DESPLEGADA POR EL BOTON LIMPIAR
	$("#limpiar").on("click", function(event){
		event.preventDefault();
		$("tbody.cuerpo-tableEst").children().remove();
		
	});
	
}