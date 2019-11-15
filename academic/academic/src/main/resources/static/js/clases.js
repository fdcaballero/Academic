$(function(){
  elim();
  addClase();
  Buscar();
  cargarDatos();
  cargarStudiantes();
  cargarAsignaturaByCurso();
  EcargarAsignaturaByCurso();
  cargarAsignatura();
  tabla1();
  cargarProfesores();
  cargarCurso();
  tabla();
  //getId();
  limpiar();
//  tablaQuitar();
  limpiarTabla();
 
});
function limpiarTabla(){  //REMOVERA TODOS LOS DATOS DE LA TABLA
	$("button.limpiarTb").on("click", function(event){
		event.preventDefault();
		
		$("p.removible").remove();
		horas.length = 0;
		console.log(horas + "  arreglo  "+ horas.lengt);
	});
	
}

function cargarAsignaturaAlEditar(val, id){
	
		
	 // var id  = $("#Ecurso").val();
		$("#asignatura").children().remove();
		if(!isNaN(id)){
			console.log(id);
			$.ajax("./api/v1/asignaturasPorc/"+ id, {
				contentType:"application/json",
				dataType : "json",
				type :"GET",
				success :  function (datos){
					$("#Easignatura").children().remove();
					if(datos){
						 $.each(datos, function(i, e) {
				      
							 if(val && val == e.id){
							     $("#Easignatura").append("<option value=" + e.id + " id = "+e.id+" selected>"  + e.nombre +  "</option>");				 
							 }else{
							 console.log(e.nombre+ " " +e.id +" ");
						   //  $("#curso").append("<option value=" + e.id + " id = "+e.id+">" + e.nombre + "</option>");
						     $("#Easignatura").append("<option value=" + e.id + " id = "+e.id+">" + e.nombre +  "</option>");
							 }
						 });
					}
					
				},
				error: function(event){
					console.log("error en al cargar la asignatura");
					alert("ERROR");
				}
			});
		}
	
}

function elim(){ //ELIMINA UNA CLASE
	$("#elim").on("click", function(event){
		event.preventDefault();
		if(getId()){
			$.ajax("./api/v1/clase/" + getId(),
		    		{
		        	 
		        	 contentType: "application/json",
		        	 type: "DELETE",
		        	 success:function(){
		        		 //añadir codigo para eliminar la fila de la bd al momento de borrar usuario
		        		 var td = $("input[id = "+getId()+"]");
		        		 td.closest("tr").remove();
		        	 },
		        	 error : function(event){
		        		 alert("error  al eliminar intente nuevamente");
		        		 console.log("error" , event);
		        	 }
		        });
		}else{
			alert("No ha seleccionado objetos de la tabla");
		}
	});	
}

function cargarAsignaturaByCurso(){	//CAMBIA LAS ASIGNATURAS DEPENDIENDO DEL CURSO SELECCIONADO EN EL MODAL CREAR
	
	$("#curso").change(function(){
		var id  = $("#curso").val();
		$("#asignatura").children().remove();
		if(!isNaN(id)){
			console.log(id);
			$.ajax("./api/v1/asignaturasPorc/"+ id, {
				contentType:"application/json",
				dataType : "json",
				type :"GET",
				success :  function (datos){
					if(datos){
						 $.each(datos, function(i, e) {
							console.log(e.nombre+ " " +e.id +" ");
						   //  $("#curso").append("<option value=" + e.id + " id = "+e.id+">" + e.nombre + "</option>");
						     $("#asignatura").append("<option value=" + e.id + " id = "+e.id+">" + e.nombre +  "</option>");
						 });
					}
					
				},
				error: function(event){
					console.log("error en el listar representante");
					alert("ERROR");
				}
			});
		}
		
		
		
	});
}

function cargarCursoEdit(val){
	$("#Ecurso").children().remove();
	$.ajax({	
		url : "/api/v1/curso",
		contentType: "application/json",
		dataType:'json',
		type: "GET",
		success:function(datos){
			
			$.each(datos, function(i, curso) {
				if (val == curso.id){
					 $("#Ecurso").append("<option value=" + curso.id + " id = "+curso.id+" selected >" + curso.nivel + " " + curso.etapa + "</option>");
				}else{
					 $("#Ecurso").append("<option value=" + curso.id + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");
				}
				
				                  
			 });
			
		},
		error : function(event){
   		 alert("error en el registro intente nuevamente");
   		 console.log("error ", event);
   	 	}
		
	});
}

function cargarDocenteEdit(val){
	$.ajax({	
		url : "/api/v1/docente",
		contentType: "application/json",
		dataType:'json',
		type: "GET",
		success:function(datos){
			 $("#Eprofesor").children().remove();
			$.each(datos, function(i, p) {
				if(val && val == p.id){
					 $("#Eprofesor").append("<option value=" + p.id + " id = "+p.id+" selected >" + p.nombre + " " + p.apellido1 + "</option>");
				}else{
					 $("#Eprofesor").append("<option value=" + p.id + " id = "+p.id+">" + p.nombre + " " + p.apellido1 + "</option>");
				}
				
			 });
			 		 
		},
		error : function(event){
   		 alert("error en el registro intente nuevamente");
   		 console.log("error ", event);
   	 	}
		
	});
}

function cargarDatos(){//CARGA LOS DATOS AL MODAL DE EDITAR
	$("#editar").on("click", function(event){
		event.preventDefault();
		
		if(getId()){
			$("p.removible").remove();
			$.ajax("./api/v1/clase/" + getId(),
					{
				contentType : "application/json",
				dataType : "json",
				type : "GET",
				success:function(dato){
					console.log(dato.profesor.nombre + " " + dato.profesor.id);
					
					cargarCursoEdit(dato.asignatura.curso.id);
					tabla1(dato.horas_semanales);
					
					cargarDocenteEdit(dato.profesor.id);
					cargarAsignaturaAlEditar(dato.asignatura.id, dato.asignatura.curso.id);
				}, 
				error : function(event){
					console.log("Error ", event);
				}
			
			});
		}else{
			alert("DEBE SELECCIONAR UN OBJETO DE LA TABLA");
		}
		
			
		
	});
}

function EcargarAsignaturaByCurso(){	//CAMBIA LAS ASIGNATURAS DEPENDIENDO DEL CURSO SELECCIONADO EN EL MODAL EDITAR
	
	$("#Ecurso").change(function(){
		
		var id  = $("#Ecurso").val();
		$("#asignatura").children().remove();
		if(!isNaN(id)){
			console.log(id);
			$.ajax("./api/v1/asignaturasPorc/"+ id, {
				contentType:"application/json",
				dataType : "json",
				type :"GET",
				success :  function (datos){
					if(datos){
						 $.each(datos, function(i, e) {
							console.log(e.nombre+ " " +e.id +" ");
						   //  $("#curso").append("<option value=" + e.id + " id = "+e.id+">" + e.nombre + "</option>");
						     $("#Easignatura").append("<option value=" + e.id + " id = "+e.id+">" + e.nombre +  "</option>");
						 });
					}
					
				},
				error: function(event){
					console.log("error en el listar representante");
					alert("ERROR");
				}
			});
		}
		
		
		
	});
}


function cargarAsignatura(){//AGREAGA LA LISTA DE ASIGNATURA A LA VISTA
	
	
	$.ajax("./api/v1/asignatura",{	
		
		contentType: "application/json",
		dataType:'json',
		type: "GET",
		success:function(datos){
			
			$.each(datos, function(i, e) {
			  //   $("#asignatura").append("<option value=" + e.id + " id = "+e.id+">" + e.nombre + "</option>");
				 $("#Basignatura").append("<option value=" + e.nombre + " id = "+e.id+">" + e.nombre  + "</option>");                  
			 });
			 		 
		},
		error : function(event){
   		 alert("error en el registro intente nuevamente");
   		 console.log("error ", event);
   	 	}
		
	});
}

function cargarProfesores(){//AGREAGA LA LISTA DE PROFESORES A LA VISTA
	
	$.ajax({	
		url : "/api/v1/docente",
		contentType: "application/json",
		dataType:'json',
		type: "GET",
		success:function(datos){
			$.each(datos, function(i, p) {
				 $("#profesor").append("<option value=" + p.id + " id = "+p.id+">" + p.nombre + " " + p.apellido1 + "</option>");
				 $("#Bprofesor").append("<option value=" + p.nombre + " id = "+p.id+">" + p.nombre + " " + p.apellido1 + "</option>");
				// $("#Eprofesor").append("<option value=" + p.id + " id = "+p.id+">" + p.nombre + " " + p.apellido1 + "</option>");
			 });
			 		 
		},
		error : function(event){
   		 alert("error en el registro intente nuevamente");
   		 console.log("error ", event);
   	 	}
		
	});
}

function cargarCurso(){//AGREAGA LA LISTA DE CURSOS A LA VISTA
	
	$.ajax({	
		url : "/api/v1/curso",
		contentType: "application/json",
		dataType:'json',
		type: "GET",
		success:function(datos){
			
			$.each(datos, function(i, curso) {
				 $("#curso").append("<option value=" + curso.id + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");
				// $("#Ecurso").append("<option value=" + curso.id + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");
				 $("#Bcurso").append("<option value=" + curso.etapa + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");                  
			 });
			 		 
		},
		error : function(event){
   		 alert("error en el registro intente nuevamente");
   		 console.log("error ", event);
   	 	}
		
	});
	
}
var horas =[]; //ARRAY GLOBAL PARA EL LISTADO DE HORAS SEMANALES DE UNA ASIGNATURA
function addClase(){
	
	$("#crear").on("click", function(event){
		event.preventDefault();
		
		
		var curso = $("#curso").val();
		var asignatura =$("#asignatura").val();
		var profesor = $("#profesor").val();
		//var horas = horasSemanales();
		console.log(curso + " " + asignatura + " " + profesor);
		$.each(horas, function(i, e){
			console.log(e.dia);
		});
		var clase  ={
				
				"varAux1" : asignatura,
				"varAux2" : profesor,
				"horas_semanales": horas
		} ;
		
		
		if(curso && asignatura && profesor && horas.length != 0){
			$.ajax("./api/v1/clase",{
				contentType: "application/json",
				dataType: "json",
				type : "POST",
				data : JSON.stringify(clase),
				success: function(data){
					horas.length= 0;
					$("select").val("");
					$("asignatura").children().remove();
					alert("Clase creada");
					$("p.removible").remove();
				}, 
				error : function(event){
					console.log("Error al crear la clase", event);
					alert("Ha ocurrido un error al crear la clase");
				}
			});
		}else {
			alert("seleccione todos los datos");
		}
	});
	

}

function cargarStudiantes(){ // MUESTRA TODOS LOS ESTUDIANTES PERTENECIENTES A UNA CLASE SELECCIONADA
	$("#MAlumnos").on("click", function(event){
		event.preventDefault();
		//alert(getId());
		if(getId()){
			
			$.ajax("./api/v1/clase/" + getId(),
					{
				contentType : "application/json",
				dataType : "json",
				type : "GET",
				success:function(dato){
					console.log(dato.asignatura.curso.estudiantes);
					if(dato.asignatura.curso.estudiantes){
						$.each(dato, function(i, p) {
	   			 			$("#list-estudiantes").append("<option value=" + p.id + " id = "+p.id+">" + p.nombre + " " + p.apellido1 + "</option>");
	   			 		});
					}
				}, 
				error : function(event){
					console.log("Error ", event);
				}
			
			});
		}else{
			alert("DEBE SELECCIONAR UN OBJETO DE LA TABLA");
		}
		
		
	});	
	
}

function limpiar(){ // LIMPIA LA TABLA DE DATOS
	 $("#limpiar").on("click", function(event){
		  event.preventDefault();
		  $("tbody.cuerpo-table").children().remove();
	 });
	
}

function Buscar(){ //REALIZA LAS BUSQUEDAS EN LA BD
 $("#buscar").on("click", function(event){
	  event.preventDefault();
	  
	  var buscar = $("#Bprofesor").val();
	  var buscar1 = $("#Bcurso").val();
	  var buscar2  = $("#Basignatura").val();
	  

	  var url;
	  
	  if (buscar && buscar1  && buscar2){ // 1 2 3
		
		  url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+buscar2; // 1
		  
	  }else if (buscar && buscar1 && !buscar2){ //1 2
		
		  url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+buscar2; // 2
		  
	  }else if (buscar && !buscar1 && buscar2){ // 1 3
		  
	    url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+buscar2; // 3
		  
	  }else if (!buscar && buscar1 && buscar2){ //2 3
		
		  url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+buscar2; // 4 
		  
	  }else if (!buscar && !buscar1 && buscar2){ // 3 
		  
		  url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+buscar2; // 5
		   
	  }else if (buscar && !buscar1 && !buscar2){ // 1
		  
		  url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+buscar2; //6 
		  
	  }else if (!buscar && buscar1 && !buscar2){ // 2
		  
		  url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+buscar2; // 7
		  
	  }else{
		  url = "api/v1/clase/";  // 8
		
	  }
	  
	  $("tbody.cuerpo-table").children().remove();
	  	
		$.ajax("./api/v1/clase",{
			//url : url,
			contentType:"application/json", 
			dataType : "json",
			type : "GET",
			success: function(data){
			
				$.each(data, function(i, e){
					//if(e.asignatura.nombre){
					var str = "";
					$.each(e.horas_semanales, function(j,p){
						str += p.dia +" "+ p.hora+"<br>";
					});
					
						$("tbody.cuerpo-table").append(
								"<tr data-id="+e.id+">" +
								    "<td>" + e.asignatura.nombre + "</td>" +
								    "<td>" + e.asignatura.curso.etapa + "</td>" +
								    "<td>" + e.profesor.nombre + "</td>" +
							        "<td>" + str+ "</td>" +
								 /*  "<td>" + e.fecha_alta + "</td>" +*/
								   
								    "<td><input type ='radio' name ='seleccion' value=" + e.id + " id ="+ e.id+ "></td>" +
								"</tr>");
				//	}
				});
			},
			error: function(event) {
				alert("error al buscar");
			}
		});
 });
}

function tabla(){	///SELECCION DE LA TABLA
	$('td.editar').click( function(e) {
		e.preventDefault();
		
		//console.log("["+$(this).parent().index()+" , "+$(this).index()+"]"  );
		var dia = $("tr.headTableC").children().eq($(this).index()).text();
		
		var hora = $(this).parent().children().eq(0).text();
		//console.log("La hora de la clase es "+ hora);
		var indiceD =$(this).index();
		var indiceH =$(this).parent().index()+1;
		
		validarPila(dia, hora,indiceD ,indiceH );
		/*horas.push({"dia": dia, "hora" : hora,
					"dia_indice" :  $(this).index(),
					"hora_indice" : $(this).parent().index()
					});*/
	//	console.log (dia);
	 //	console.log(document.getElementById("crearH").children().eq(0).eq($(this).parent().index()).text() );
		document.getElementById("crearE").rows[indiceH].cells[indiceD].innerHTML = "<p class='removible'>!!!</p>" ;
			
	});
}

function validarPila( dia , hora, indice_dia, indice_hora){ //VERIFICA QUE LOS DATOS ESTEN COMPLETOS PARA ARMAR UN OBJ HORA SEMANAL
	console.log(indice_dia +"   "+ indice_hora+"  "+ dia +" "+ hora);
	
	if(dia != undefined && hora != undefined && indice_dia != undefined && indice_hora != undefined){
		var horaSemanal = {
					"dia": dia, "hora" : hora,
					"dia_indice" :  indice_dia,
					"hora_indice" : indice_hora
					};
		
		
		 if(!encontrarPila(dia, hora)){
		
			 horas.push(horaSemanal);
		 }else{
			// document.getElementById("crearE").rows[indice_dia].cells[indice_hora].remove("p.removible");//s = "<p class='removible' >      </p>" ;
			 // console.log("horario" + dia + " " + hora);
			// alert("ya has elegido ese horario");
		 }
		
		
	}else{
		alert("datos incompletos");
	}
}

function encontrarPila(dia, hora){ // VERIFICA SI EL DIA YA HA SIDO AGREGADO UNA VEZ	
	for( var i = 0; i< horas.length;i++) {
		
		if (horas[i].dia == dia && horas[i].hora == hora) {
				return true;
				
		}
	}
	return false;
}

function tablaQuitar(){ // FUNCION PARA LIMPIAR LA TABLA LUEGO DE CREAR --- NO EN USO
	$('td.editar').on("dblclick", function(e) {
		e.preventDefault();
		
		//console.log("["+$(this).parent().index()+" , "+$(this).index()+"]"  );
		var Qdia = $("tr.headTableC").children().eq($(this).index()).text();
		var Qhora = $(this).parent().children().eq(0).text();
		console.log("La hora de la clase es "+ hora);
		
		console.log (dia);
	 //	console.log(document.getElementById("crearH").children().eq(0).eq($(this).parent().index()).text() );
		document.getElementById("crearH").rows[$(this).parent().index()+1].cells[$(this).index()].innerHTML = "    " ;
				
	});
}

function getId(){	// RETORNA EL ID DEL OBJ SELECCIONADO
	return $("input[name = seleccion]:checked").val();
} 


function tabla1(datos){	///CARGA LOS DIAS SELECCIONADOS A LA TABLA EDITAR
/*$(' td.edita').click( function(e) {
		e.preventDefault();
		
		console.log("["+$(this).parent().index()+" , "+$(this).index()+"]"  );
		var dia = $("tr.headTableC").children().eq($(this).index()).text();
		
		var hora = $(this).parent().children().eq(0).text();
		console.log("La hora de la clase es "+ hora);
		var indiceD =$(this).index();
		var indiceH =$(this).parent().index();
	validarPila(dia, hora,indiceD ,indiceH );
		horas.push({"dia": dia, "hora" : hora,
					"dia_indice" :  $(this).index(),
					"hora_indice" : $(this).parent().index()
					});*/
	console.log (datos);
	 	/*console.log(document.getElementById("crearH").children().eq(0).eq($(this).parent().index()).text() );*/
	$.each(datos, function(i, e){
		//if(e.hora_indice != undefined && e.dia_indice != undefined){
			horas.push(e);
			console.log(e);
			document.getElementById("mostrarE").rows[e.hora_indice].cells[e.dia_indice].innerHTML ="<p class='removible' >XXX</p>";
	//	}
	});
		

}
