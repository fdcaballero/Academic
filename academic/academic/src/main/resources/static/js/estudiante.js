$(function(){
    add();
    limpiar();
   Listar();
    
   CargarDatos();
   ListaResponsable();
   ListarCursos();
   
});


function cursoSeleccionado(id){ //Retorna el curso seleccionado
	
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

function ListarCursos(){ //agrega a la vista los cursos
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

function ListaResponsable(){ //#ListaResponsable
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

function add(){  //Agrega un estudiante a la BDD
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
   // DATOS DEL RESPONSABLE 
    var Nameresponsable = $("#nombreR").val();
    var apellidoRe  = $("#apellidoR").val();
    var apellido1Re = $("#apellido2R").val();
    var nifRe = $("#nifR").val();
    var telefonoRe = $("#telefonoR").val();
    var correoRe = $("#correoR").val();
    ///
    var cargarResp = $("#ListaResponsable").val();
    
    console.log(cargarResp+" representante  "+ nombre + " " + apellido1 +" " + apellido2 +" "+ nif +" " +tel +" " +correo+" el id del curso es"+ idcurso+ "  repretidor  " + repetidor +" " + fechaAlta +" "+fechaBaja+" "+ observacion );
    
    
    var estudiante;
    var  responsable= {

    	  "nombre" : Nameresponsable, "apellido1" : apellidoRe, 
    	  "apellido2" : apellido1Re, "nif" : nifRe,
    	  "telefono" : telefonoRe, "correo" : correoRe 
       };
    
   if( Nameresponsable && apellidoRe && apellido1Re && nifRe && telefonoRe && correoRe){
	  
	   $.ajax("./api/v1/representante",
		    	{
		    		contentType : "application/json",
		    		dataType : "json",
		    		type :"POST",
		    		data : JSON.stringify(responsable),
		    		success: function(datoResp){
		    			 
		    				estudiante  = {
		       				      "nombre" : nombre, "apellido1" : apellido1,
		       				      "apellido2" : apellido2, "nif" : nif,
		       				      "telefono" : tel, "correo" : correo,
		       				      "repetidor" : repetidor, "fecha_alta" : fechaAlta,
		       				      "fecha_baja" : fechaBaja, "observacion" : observacion,
		       				      "responsable" : datoResp , "varString" :idcurso
		       			       };
		    		
		    		},
		    		error : function(event){
		    			console.log("Error al cargar el Representante");
		    			alert("No se puede guardar");
		    		}
		    	});
	   
   }else{
	   
	   estudiante  = {
			      "nombre" : nombre, "apellido1" : apellido1,
			      "apellido2" : apellido2, "nif" : nif,
			      "telefono" : tel, "correo" : correo,
			      "repetidor" :repetidor, "fecha_alta" : fechaAlta,
			      "fecha_baja" : fechaBaja, "observacion" : observacion,
			      "varString" :idcurso
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
	   
   }
   
 	

  });
}


function limpiar(){ //Limpia los datos de los estudiantes
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

function CargarDatos(){ //Carga los datos del estudiante en el Modal
	
		
	$("#datosEst").on("click" ,function(event){
		event.preventDefault();
		
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
				// agregaCursoEdit(datos.grado.id);
				 
				 $("input[id =  Drepetidor]").prop("checked", datos.repetidor);
				 $("input[id =  DfechaAlta]").val(datos.fecha_alta);
				 $("input[id =  DfechaBaja]").val(datos.fecha_baja);
				 $("input[id =  Dobservaciones]").val(datos.observacion);
				 // DATOS DEL RESPONSABLE 
				if(datos.responsable != null) {
					$("input[id =  DnombreR]").val(datos.responsable.nombre);
					 $("input[id =  DapellidoR]").val(datos.responsable.apellido1);
					 $("input [id = DapellidoRs]").val(datos.responsable.apellido2);
					 $("input [id = DnifR]").val(datos.responsable.nif);
					 $("input [id = DtelefonoR]").val(datos.responsable.telefono);
					 $("input[id= DcorreoR]").val(datos.responsable.correo);
				}
				
				 
				 
				 
				 /*
				
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
		
	});
	
}


function Guardar(){ //Carga los datos ya editados a la bdd 
	//FALTA TERMINAR ESTA PARTE
	
	
	$("#guardarEst").on("click", function(event){
		
		event.preventDefault();
		var nombre =  $("input[id =  Dnombre]").val();
		var apellido = $("input[id =  Dapellido1]").val();
		var apellido1 = $("input[id =  DapellidoD]").val();
		var cc = $("input[id =  Dnif]").val();
		var celular =  $("input[id =  Dtelefono]").val();
		var correo =  $("input[id =  Dcorreo]").val();
		var cursoid = $("input[id =  Dcurso]").val();///Tomamos el id del curso para ser buscado y cargado a la bd
		var repetidor = $("input[id =  Drepetidor]").val();
		var fecha = $("input[id =  DfechaAlta]").val();
		var fechaB =  $("input[id =  DfechaBaja]").val();
		var observacion = $("input[id =  Dobservaciones]").val();
		 // DATOS DEL RESPONSABLE 
		var nombreRep = $("input[id =  DnombreR]").val();
		var apellidoRep = $("input[id =  DapellidoR]").val();
		var apellidoRep1 = $("input [id = DapellidoRs]").val();
		var nif =  $("input [id = DnifR]").val();
		var telefono =  $("input [id = DtelefonoR]").val();
		var correoRep = $("input[id= DcorreoR]").val();
		//var curso = cursoSeleccionado(cursoid);
		
		console.log(cargarResp+" representante  "+ nombre + " " + apellido1 +" " + apellido2 +" "+ nif +" " +tel +" " +correo+" el id del curso es"+ idcurso+ "  repretidor  " + repetidor +" " + fechaAlta +" "+fechaBaja+" "+ observacion );
	    
	    
	    var estudiante;
	    var  responsable= {

	    	  "nombre" : Nameresponsable, "apellido1" : apellidoRe, 
	    	  "apellido2" : apellido1Re, "nif" : nifRe,
	    	  "telefono" : telefonoRe, "correo" : correoRe 
	       };
	    
	   if( Nameresponsable && apellidoRe && apellido1Re && nifRe && telefonoRe && correoRe){
		  
		   $.ajax("./api/v1/representante",
			    	{
			    		contentType : "application/json",
			    		dataType : "json",
			    		type :"PUT",
			    		data : JSON.stringify(responsable),
			    		success: function(datoResp){
			    			 
			    				estudiante  = {
			       				      "nombre" : nombre, "apellido1" : apellido1,
			       				      "apellido2" : apellido2, "nif" : nif,
			       				      "telefono" : tel, "correo" : correo,
			       				      "repetidor" : repetidor, "fecha_alta" : fechaAlta,
			       				      "fecha_baja" : fechaBaja, "observacion" : observacion,
			       				      "responsable" : datoResp , "varString" :idcurso
			       			       };
			    		
			    		},
			    		error : function(event){
			    			console.log("Error al cargar el Representante");
			    			alert("No se puede guardar");
			    		}
			    	});
		   
	   }else{
		   
		   estudiante  = {
				      "nombre" : nombre, "apellido1" : apellido1,
				      "apellido2" : apellido2, "nif" : nif,
				      "telefono" : tel, "correo" : correo,
				      "repetidor" :repetidor, "fecha_alta" : fechaAlta,
				      "fecha_baja" : fechaBaja, "observacion" : observacion,
				      "varString" :idcurso
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~~44~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~
function Listar(){ //Buscar implementado con AJAX
	$("#buscar").on("click", function(event){
		event.preventDefault();
		var buscar = $("#buscaNombre").val();
		var buscar1 = $("#buscaCurso").val();
		var url = "api/v1/estudiante"; //al momento de funcionar se deben agregar las url
		
		if( buscar && buscar1){
			//url = "api/v1/estudiante/+ bucar + /+ bucar1";
		}else if (buscar && !buscar1){
			//url = "api/v1/estudiante/+buscar";
		}else if (buscar1 && !bucar){
			//url = "api/v1/estudiante";
		}else{
			url = "api/v1/estudiante";
		}
		
		$.ajax({
			url : url,
			contentType:"application/json", 
			dataType : "json",
			type : "GET",
			success: function(data){
				$.each(data, function(i, e){
					if(e.responsable != null){
						$("tbody.cuerpo-tableEst").append(
								"<tr data-id="+e.id+">" +
								    "<td>" + e.nombre + "</td>" +
								    "<td>" + e.grado + "</td>" +
								    "<td>" + e.responsable.nombre+ "</td>" +
								    "<td>" + e.fecha_alta + "</td>" +
								    "<td>" + e.fecha_baja + "</td>" +
								    "<td><input type ='radio' name ='resultadoEstudiante' value=" + e.id + " id ="+ e.id+ "></td>" +
								"</tr>");
					}else{
						$("tbody.cuerpo-tableEst").append(
								"<tr data-id="+e.id+">" +
								    "<td>" + e.nombre + "</td>" +
								    "<td>" + e.grado + "</td>" +
								    "<td> - </td>" +
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
//4~~4~~4~~4~~~44~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~
function getId(){
	
	return $("input[name = resultadoEstudiante]:checked").val();
	
}
