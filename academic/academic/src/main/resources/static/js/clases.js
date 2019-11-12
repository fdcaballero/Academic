$(function(){
 
  addClase();
  Buscar();
  OpcionesProfe();
  cargarCursoOfAsig();
  cargarAsignatura();
  cargarProfesores();
  cargarCurso();
  tabla();
});

function cargarCursoOfAsig(){
	
	$("#asignatura").change(function(){
		var id  = $("#asignatura").val();
		
		if(id){
			$.ajax("./api/v1/asignatura/"+ id, {
				contentType:"application/json",
				dataType : "json",
				type :"GET",
				success :  function (datos){
					if(datos){
						console.log(" " +datos.id + "   "+ datos.etapa);
						$.each(datos.curso, function(i, e) {
						   //  $("#curso").append("<option value=" + e.id + " id = "+e.id+">" + e.nombre + "</option>");
						     $("#curso").append("<option value=" + curso.id + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");
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
			     $("#asignatura").append("<option value=" + e.id + " id = "+e.id+">" + e.nombre + "</option>");
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
			//	 $("#curso").append("<option value=" + curso.id + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");
				 $("#Bcurso").append("<option value=" + curso.etapa + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");                  
			 });
			 		 
		},
		error : function(event){
   		 alert("error en el registro intente nuevamente");
   		 console.log("error ", event);
   	 	}
		
	});
	
}

function addClase(){
	$("#crear").on("click", function(event){
		event.preventDefault();
		;
		
		var curso = $("#curso").val();
		var asignatura =$("#asignatura").val();
		var profesor = $("#profesor").val();
		var clase ;
		
		
		if(curso && asignatura && profesor){
			$.ajax("./api/v1/clase",{
				contentType: "application/json",
				dataType: "json",
				type : "POST",
				data : JSON.stringify(clase),
				success: function(data){
					$("select").val("");
					
				}, 
				error : function(event){
					console.log("Error al crear la clase");
					alert("Ha ocurrido un error al crear la clase");
				}
			});
		}else {
			alert("seleccione todos los datos");
		}
	});
	

}

function OpcionesProfe(){

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
			url : url,
			contentType:"application/json", 
			dataType : "json",
			type : "GET",
			success: function(data){
				$.each(data, function(i, e){
					if(e.responsable && e.grado){
						$("tbody.cuerpo-table").append(
								"<tr data-id="+e.id+">" +
								    "<td>" + e.asignatura.nombre + "</td>" +
							/*	    "<td>" + e.grado.etapa + "</td>" +
								    "<td>" + e.responsable.nombre+ "</td>" +
								    "<td>" + e.fecha_alta + "</td>" +
								   */
								    "<td><input type ='radio' name ='resultadoEstudiante' value=" + e.id + " id ="+ e.id+ "></td>" +
								"</tr>");
					}
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
		
		console.log("["+$(this).parent().index()+" , "+$(this).index()+"]"  );
		var g = $("tr.headTableC").children().eq($(this).index()).text();
		console.log (g)
	 //	console.log(document.getElementById("crearH").children().eq(0).eq($(this).parent().index()).text() );
		//document.getElementById("crearH").rows[$(this).parent().index()+1].cells[$(this).index()].innerHTML = "XXXX!!" ;
		
		
		
		
		
	});
}
