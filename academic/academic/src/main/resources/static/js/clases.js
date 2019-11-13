$(function(){
 
  addClase();
//  Buscar();
 
  cargarAsignaturaByCurso();
  cargarAsignatura();
  cargarProfesores();
  cargarCurso();
  tabla();

  tablaQuitar();
});

function cargarAsignaturaByCurso(){
	
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


function cargarAsignatura(){
	
	
	$.ajax("./api/v1/asignatura",{	//AGREAGA LA LISTA DE ASIGNATURA A LA VISTA
		
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

function cargarProfesores(){
	$.ajax({	//AGREAGA LA LISTA DE PROFESORES A LA VISTA
		url : "/api/v1/docente",
		contentType: "application/json",
		dataType:'json',
		type: "GET",
		success:function(datos){
			$.each(datos, function(i, p) {
				 $("#profesor").append("<option value=" + p.id + " id = "+p.id+">" + p.nombre + " " + p.apellido1 + "</option>");
				 $("#Bprofesor").append("<option value=" + p.nombre + " id = "+p.id+">" + p.nombre + " " + p.apellido1 + "</option>");                  
			 });
			 		 
		},
		error : function(event){
   		 alert("error en el registro intente nuevamente");
   		 console.log("error ", event);
   	 	}
		
	});
}

function cargarCurso(){
	
	$.ajax({	//AGREAGA LA LISTA DE CURSOS A LA VISTA
		url : "/api/v1/curso",
		contentType: "application/json",
		dataType:'json',
		type: "GET",
		success:function(datos){
			$.each(datos, function(i, curso) {
				 $("#curso").append("<option value=" + curso.id + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");
				 $("#Bcurso").append("<option value=" + curso.etapa + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");                  
			 });
			 		 
		},
		error : function(event){
   		 alert("error en el registro intente nuevamente");
   		 console.log("error ", event);
   	 	}
		
	});
	
}
var horas =[];
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
		
		
		if(curso && asignatura && profesor){
			$.ajax("./api/v1/clase",{
				contentType: "application/json",
				dataType: "json",
				type : "POST",
				data : JSON.stringify(clase),
				success: function(data){
					$("select").val("");
					$("asignatura").children().remove();
					alert("Clase creada");
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



function limpiar(){
	 $("#limpiar").on("click", function(event){
		  event.preventDefault();
		  $("tbody.cuerpo-table").children().remove();
	 });
	
}

function Buscar(){
 $("#buscar").on("click", function(event){
	  event.preventDefault();
	  var buscar = $("#buscaNombre").val();
	  var buscar1 = $("#buscaCurso").val();
	  var buscar2  = $("#").val();
	  
	  var url;
	  
	  if (buscar && buscar1  && bucar2){ // 1 2 3
		
		  url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+bucar2;
		  
	  }else if (buscar && buscar1 && !buscar2){ //1 2
		
		  url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+bucar2;
		  
	  }else if (buscar && !buscar1 && buscar2){ // 1 3
		  
	    url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+bucar2;
		  
	  }else if (!buscar && buscar1 && buscar2){ //2 3
		
		  url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+bucar2;
		  
	  }else if (!buscar && !buscar1 && buscar2){ // 3 
		  
		  url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+bucar2;
		  
	  }else if (buscar && !buscar1 && !buscar2){ // 1
		  
		  url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+bucar2;
		  
	  }else if (!buscar && buscar1 && !buscar2){ // 2
		  
		  url = "api/v1/clase/"+ buscar + "/" +buscar1 +"/"+bucar2;
		  
	  }else{
		  url = "api/v1/clase/";
	  }
	  $("tbody.cuerpo-table").children().remove();
		$.ajax({
			url : "api/v1/clase",
			contentType:"application/json", 
			dataType : "json",
			type : "GET",
			success: function(data){
				$.each(data, function(i, e){
					
						$("tbody.cuerpo-table").append(
								"<tr data-id="+e.id+">" +
								    "<td>" + e.asignatura.nombre + "</td>" +
								    "<td>" + e.profesor.nombre + "</td>" +
							    /*	    "<td>" + e.responsable.nombre+ "</td>" +
								    "<td>" + e.fecha_alta + "</td>" +
								   */
								    "<td><input type ='radio' name ='resultadoEstudiante' value=" + e.id + " id ="+ e.id+ "></td>" +
								"</tr>");
					
				});
			},
			error: function(event) {
				alert("error al buscar");
			}
		});
 });
}

function tabla(){
	$('td.editar').click( function(e) {
		e.preventDefault();
		
		//console.log("["+$(this).parent().index()+" , "+$(this).index()+"]"  );
		var dia = $("tr.headTableC").children().eq($(this).index()).text();
		
		var hora = $(this).parent().children().eq(0).text();
		//console.log("La hora de la clase es "+ hora);
		var indiceD =$(this).index();
		var indiceH =$(this).parent().index();
		validarPila(dia, hora,indiceD ,indiceH );
		/*horas.push({"dia": dia, "hora" : hora,
					"dia_indice" :  $(this).index(),
					"hora_indice" : $(this).parent().index()
					});*/
	//	console.log (dia);
	 //	console.log(document.getElementById("crearH").children().eq(0).eq($(this).parent().index()).text() );
		document.getElementById("crearH").rows[$(this).parent().index()+1].cells[$(this).index()].innerHTML = "!!!" ;
			
	});
}

function validarPila( dia , hora, indice_dia, indice_hora){
	console.log(indice_dia +"   "+ indice_hora+"  "+ dia +" "+ hora);
	
	if(dia != undefined && hora != undefined && indice_dia != undefined && indice_hora != undefined){
		var horaSemanal = {
					"dia": dia, "hora" : hora,
					"dia_indice" :  indice_dia,
					"hora_indice" : indice_hora
					};
		
		
		 if(!encontrarPila(dia, hora)){
			 alert("Guardando");
			 horas.push(horaSemanal);
		 }else{
			// console.log("horario" + dia + " " + hora);
			 alert("ya has elegido ese horario");
		 }
		
		
	}else{
		alert("datos incompletos");
	}
}

function encontrarPila(dia, hora){
	for( var i = 0; i< horas.length;i++) {
		
		if (horas[i].dia == dia && horas[i].hora == hora) {
				return true;
				
		}
	}
	return false;
}

function tablaQuitar(){
	$('td.editar').dblclick( function(e) {
		e.preventDefault();
		aler("hola");
		//console.log("["+$(this).parent().index()+" , "+$(this).index()+"]"  );
		var Qdia = $("tr.headTableC").children().eq($(this).index()).text();
		var Qhora = $(this).parent().children().eq(0).text();
		console.log("La hora de la clase es "+ hora);
		
		console.log (dia);
	 //	console.log(document.getElementById("crearH").children().eq(0).eq($(this).parent().index()).text() );
		document.getElementById("crearH").rows[$(this).parent().index()+1].cells[$(this).index()].innerHTML = "   " ;
				
	});
}
