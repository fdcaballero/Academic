$(function(){
	crear();
	buscar();
	editar();
	elim();
	limpiar();
	cargarDatos();
	
});



function crear(){
	
	$("#create").on("click", function(event){
		var nivel = $("#nivel").val();
		var etapa = $("#etapa").val();
		
		if(nivel && etapa){
			var curso = {
				"nivel" : nivel,
				"etapa" : etapa
			};
		$.ajax("./api/v1/curso",{
				contentType :"application/json",
				dataType : "json",
				type : "POST",
				data: JSON.stringify(curso),
				success  : function(data){
					console.log(data.id);
					 $("#nivel").val("");
					 $("#etapa").val("");
				},
				error : function(event){
					alert("error al crear un curso");
					console.log("error ", event);
				}
			});
		}else{
			alert("los campos son obligatorios");
		}
				
	});
	
}

function buscar(){
	$("#buscar").on("click", function(event){
		event.preventDefault();
		

		var nivel =	$("#Bnivel").val();
		var etapa =	$("#Betapa").val();
		var	url ;
		if(nivel && etapa){
			url="api/v1/cursosne/" + nivel + "/" + etapa;
		}else if(!nivel && etapa){
			url="api/v1/cursose/"+ etapa;
		}else if(nivel && !etapa){
			url="api/v1/cursos/"+ nivel;
		}else{
			url="api/v1/curso";
		}
		$("tbody.cuerpo-tabla").children().remove();
		$.ajax({
			url : url,
			contentType :"application/json",
			dataType : "json",
			type : "GET",
			
			success  : function(datos){
		
				 $.each(datos, function(i, e) {
 			        $('#curso-tabla').append("" +
 			        	"<tr class = 'contenido' data-id="+e.id+">" +
 			              "<td>" + e.nivel + "</td>" +
 			    	      "<td>" + e.etapa + "</td>" +
 			    	      "<td> <input type='radio' value="+ e.id +" class ='seleccion' name='seleccion' id="+ e.id + "> </td>" +
 			    	    "</tr>");
 			    });
			},
			error : function(event){
				alert("error al cargar el curso");
				console.log("error ", event);
			}
		});
	});
}


function cargarDatos(){
	$("#editar").on("click", function(event){
		event.preventDefault();
		
		if(getId()){
			$.ajax("./api/v1/curso/"+ getId(),{
				contentType : "application/json",
				dataType : "json",
				type : "GET",
				success: function(data){
					$("#nivelS").val(data.nivel);
					$("#etapaS").val(data.etapa);
					
				}, 
				error : function(event){
					alert("error al cargar los datos");
					console.log("error", event);
				}
			});
		}
		
	});

}

function editar(){
	$("#guardar").on("click", function(event){
		event.preventDefault();
		var nivel = $("#nivelS").val();
		var etapa = $("#etapaS").val();
		console.log("estmos aqui");
		if(nivel && etapa){
			var curso = {
				"nivel" : nivel,
				"etapa" : etapa
			};
			$.ajax("./api/v1/curso/"+ getId(),
				{
				contentType :"application/json",
				dataType : "json",
				type : "PUT",
				data: JSON.stringify(curso),
				success  : function(data){
					
				},
				error : function(event){
					alert("error al crear un curso");
					console.log("error ", event);
				}
			});
		}else{
			alert("los campos son obligatorios");
		}
		
	});
	
		
}

function elim(){
	$("#elim").on("click", function(event){
		event.preventDefault();
		
		if(getId()){
			$.ajax("./api/v1/curso/"+ getId(),
				{
				contentType : "application/json",
				type : "DELETE",
				success : function(){
					var td = $("input[id = "+getId()+"]");
	        		td.closest("tr").remove();
				},
				error : function(event){
					alert("Error al eliminar");
					console.log("Error", event);
				}
			});
		}else{
			alert("seleccione un curso");
		}
		
	});
}

function limpiar(){
	$("#limpiar").on("click", function(event){
		event.preventDefault();
		$("tr").remove(".contenido");
		
	});

}

function getId(){
	return $("input[name = seleccion]:checked").val();
}
