$(function(){
	Crear();
	Editar();
	Elim(); 	//NO COMPLETA NI IMPLEMENTADA
	buscar();
	limpiar();
	ListaCursos();
	Cargar();
	agregaCursoEdit();
	
});

function agregaCursoEdit(val){ // AGREGA EL LISTADO DE DATOS DEL CURSO Y EL QUE POSEE LA ASIGNATURA A LA VISTA DE EDITAR
	
		$.ajax({
			url : "./api/v1/curso",
			contentType: "application/json",
			dataType:'json',
			type: "GET",
			success:function(datos){
				 $.each(datos, function(i, curso) {
					if(val && curso.id == val){
						 $("#Lista_cursoD").append("<option value=" + curso.id + " id = "+curso.id+" selected >" + curso.nivel + " " + curso.etapa + "</option>");
					}else{
						 $("#Lista_cursoD").append("<option value=" + curso.id + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");
					}
									                   
				 });
				 		 
			},
			error : function(event){
				alert("error en el registro intente nuevamente");
				console.log("error" , event);
	   	 	}
				
		});	
}

function ListaCursos(){	//AGREGA EL LISTADO DE DATOS DE LOS CURSOS AL MODAL DE CREAR
	$.ajax({
		url : "/api/v1/curso",
		contentType: "application/json",
		dataType:'json',
		type: "GET",
		success:function(datos){
			$.each(datos, function(i, curso) {
				 $("#Lista_curso").append("<option value=" + curso.id + " id = "+curso.id+">" + curso.nivel + " " + curso.etapa + "</option>");
				                   
			 });
			 		 
		},
		error : function(event){
   		 alert("error en el registro intente nuevamente");
   		 console.log("error ", event);
   	 	}
		
	});	

}

function Crear(){ //ENVIA A LA BD LOS DATOS DE LA ASIGNATURA
	$("#crear").on("click", function(event){
		event.preventDefault();
		var nombre  = $("#nombre").val();
		var curso = $("#Lista_curso").val();
		
		var asignatura = {
				"nombre" : nombre,
				"varString" : curso
		};
		if(nombre){
			$.ajax("./api/v1/asignatura",
				{
				contentType: "application/json",
				dataType : "json",
				type : "POST",
				data: JSON.stringify(asignatura),
				success: function(data){
					$("#nombre").val("");
					$("#Lista_curso").val("");
					alert("creado");
				},
				error : function(event){
					alert("error al crear");
					console.log("error ",event);
				}
			
				
			});
		}else{
			alert("el campo nombre es obligatorio");
		}
		
	});
}

function Cargar(){ //CARGA LOS DATOS AL MODAL DE EDICION
	$("#editar").on("click", function(event){
		event.preventDefault();
		if (getId()){
			$.ajax(
					{
					url : "./api/v1/asignatura/"+ getId(),
					contentType: "application/json",
					dataType : "json",
					type : "GET",
					success: function(data){
						//$("#Dnombre").val("");
						//$("#Lista_cursoD").val("");
						$("#Dnombre").val(data.nombre);
						//agregaCursoEdit(data.curso.id);
					 var opc = 	$("#Lista_cursoD").find("#"+ data.curso.id);
						opc.attr("selected", true);
					},
					error : function(event){
						alert("error al cargar datos");
						console.log("error ",event);
					}
				
					
				});
		}else{
			alert("seleccione una asignatura");
		}
		
		
	});
}

function Editar(){	//GUARDA LOS DATOS DE LA ASIGNATURA
	$("#guardar").on("click", function(event){
		event.preventDefault();
		var nombre  = $("#Dnombre").val();
		var curso = $("#Lista_cursoD").val();
		
		var asignatura = {
				"nombre" : nombre,
				"varString" : curso
		};
		
		if(nombre){
			$.ajax("./api/v1/asignatura/"+getId(),
				{
				contentType: "application/json",
				dataType : "json",
				type : "PUT",
				data: JSON.stringify(asignatura),
				success: function(data){
					$("#Dnombre").val("");
					$("#Lista_cursoD").val("");
				},
				error : function(event){
					alert("error al crear");
					console.log("error ",event);
				}
			
				
			});
		}else{
			alert("el campo nombre es obligatorio");
		}
		
	});
}

function Elim(){	//ELIMINA UNA ASIGNATURA SELECCIONADA
	$("#eliminar").on("click", function(event){
		event.preventDefault();
		if(getId()){
			$.ajax("./api/v1/asignatura/"+ getId(),
					{
					contentType: "application/json",
					type : "DELETE",
					success: function(data){
						var td = $("input[id = "+getId()+"]");
		        		 td.closest("tr").remove();
					},
					error : function(event){
						alert("error al crear");
						console.log("error ",event);
					}
				
					
				});
		}else{
			alert("no es posible ejecutar la accion eliminar");
		}
		
	});
}

function buscar(){ //BUSCA Y RETORNA TODOS LOS DATOS DE  LA TABLA
	$("#buscar").on("click", function(event){
		event.preventDefault();
		var nombre = $("#Bnombre").val();
		var curso = $("#Bcurso").val();
		var url;
		if(curso && nombre){
			url ="/api/v1/asignatura/"+nombre+"/"+curso;
		}else if(curso && !nombre){
			url ="/api/v1/asignaturasc/"+curso;
		}else if(!curso && nombre){
			url ="/api/v1/asignaturasn/"+nombre;
		}else{
			url ="/api/v1/asignatura";
		}
	
		$.ajax({
			url : "./api/v1/asignatura",
    		contentType: "application/json",
    		dataType:'json',
    		type: "GET",
    		success:function(datos){
    		
    			 $.each(datos, function(i, e) {
    				 if(e.curso){
    					 $('.cuerpo-tabla').append("" +
    	    			        	"<tr class = 'contenido' data-id="+e.id+">" +
    	    			              "<td>" + e.nombre + "</td>" +
    	    			    	      "<td>" + e.curso.etapa + "</td>" +
    	    			    	      "<td> <input type='radio' value="+ e.id +" class ='seleccion' name='seleccion' id="+ e.id + "> </td>" +
    	    			    	    "</tr>");
    				 }else{
    					 $('.cuerpo-tabla').append("" +
    	    			        	"<tr class = 'contenido' data-id="+e.id+">" +
    	    			              "<td>" + e.nombre + "</td>" +
    	    			    	      "<td> -  </td>" +
    	    			    	      "<td> <input type='radio' value="+ e.id +" class ='seleccion' name='seleccion' id="+ e.id + "> </td>" +
    	    			    	    "</tr>");
    				 }
    			        
    			});
    			
//
    		},
    		error : function(event){
       		 alert("error al cargar los datos");
       		 console.log("error" , event);
       	 	}
    		
		});
		
	});
}

function getId(){//RETORNA EL IDE DEL OBJETO SELECCIONADO
	return $("input[name = seleccion]:checked").val();
}

function limpiar(){ //LIMPIA LA TABLA DE DATOS
	$("#limpiar").on("click", function(event){
		event.preventDefault();
		$("tr").remove(".contenido");
		
	});
}
