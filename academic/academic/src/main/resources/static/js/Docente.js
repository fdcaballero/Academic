$(function(){
    AddDocente();
    EliminarDocente();
    showData();
    limpiar();
    Actualizar();
    buscar();
    getId();
    btnCrear();
    activarBtn();
});

function btnCrear(){
	$('#create').on("click", function(event){
	      event.preventDefault();
	      if($(this).val =="Crear"){
	    	  AddDocente();
	      }else{
	    	  Actualizar();
	      }
	});
}

function AddDocente(){
      $("#create").val("Crear");
      var nombre = $("input[id = nombre]").val();
      var apellido = $("input[id = apellido]").val();
      var apellidoS = $("input[id = apellidoS]").val();
      var Nif = $("input[id = nif]").val();
      var telefono = $("input[id = telefono]").val();
      var correo = $("input[id = correo]").val();
      var titulacion = $("input[id  = titulacion]").val();
     
      var docente = {
    	  "nombre" : nombre, "apellido1" : apellido,
    	  "apellido2" : apellidoS, "nif" : Nif ,
    	  "telefono" : telefono,"correo" : correo, "titulacion" : titulacion
        };
        
     $.ajax("./api/v1/docente",
    		 {
    	 contentType :"application/json",
    	 dataType:'json',
    	 type: "POST",
    	 data: JSON.stringify(docente),
    	 success: function(dataDocente){  
    		/* $('#prof-tabla').append(
    		  	    "<tr class = 'prof' data-id=" + dataDocente.id +">"+
    		    	      "<td>" + dataDocente.nombre + "</td>" +
    		    	      "<td>" + dataDocente.nif + "</td>" +
    		    	      "<td>" + dataDocente.telefono + "</td>" +
    		    	      "<td>" + dataDocente.correo + "</td>" +
    		           "</tr>");*/
    		             
    		   $("input[id = nombre]").val("");
    		    $("input[id = apellido]").val("");
    		    $("input[id = apellidoS]").val("");
    		    $("input[id = nif]").val("");
    		    $("input[id = telefono]").val("");
    		    $("input[id = correo]").val("");
    		    $("input[id  = titulacion]").val("");
    		
    	      
    	 },
    	 error : function(event){
    		 alert("error en el registro intente nuevamente");
    		 console.log("error" , event);
    	 }
     
      });
         

}

function activarBtn(){
	var checkout = $("input[class = seleccion]").prop("checked");
	var band = false;
	
	if(checkout){
		band = true;
	}
	
	$("#datosDocente").prop("disabled",band);
	$("#Delete").prop("disabled", band);
}

function EliminarDocente(){
    $('#Delete').on('click',  function(event){
         event.preventDefault();
         var id = getId();
         
    $.ajax("api/v1/docente/" + id,
    		{
    	//url: window.location +"api/v1/docente/" + id,
    	contentType: "application/json",
    	type: "DELETE",
    	success:function(){
		 //añadir codigo para eliminar la fila de la bd al momento de borrar usuario
		
		},
		error : function(event){
  		 alert("error en el registro intente nuevamente");
  		 console.log("error" , event);
  	 	},
  	 	complete : function(event){
  	 		var td = $("input[id = "+getId()+"]");
  	 		td.closest("tr").remove();
  	 	}
    });
     
         
    });
}

function Actualizar(){
	
		  var nombre = $("input[id = nombre]").val();
	      var apellido = $("input[id = apellido]").val();
	      var apellidoS = $("input[id = apellidoS]").val();
	      var Nif = $("input[id = nif]").val();
	      var telefono = $("input[id = telefono]").val();
	      var correo = $("input[id = correo]").val();
	      var titulacion = $("input[id  = titulacion]").val();
	     
	      var docente = {
	    	  "nombre" : nombre, "apellido1" : apellido,
	    	  "apellido2" : apellidoS, "nif" : Nif ,
	    	  "telefono" : telefono,"correo" : correo, "titulacion" : titulacion
	        };
	        if(getId() != "undefined"){
			     $.ajax("./api/v1/docente/"+getId(),
			    		 {
			    	 contentType :"application/json",
			    	 dataType:'json',
			    	 type: "PUT",
			    	 data: JSON.stringify(docente),
			    	 success: function(dataDocente){  
			    			    		             
			    		    $("input[id = nombre]").val("");
			    		    $("input[id = apellido]").val("");
			    		    $("input[id = apellidoS]").val("");
			    		    $("input[id = nif]").val("");
			    		    $("input[id = telefono]").val("");
			    		    $("input[id = correo]").val("");
			    		    $("input[id  = titulacion]").val("");
			    		
			    	      
			    	 },
			    	 error : function(event){
			    		 alert("error en el registro intente nuevamente");
			    		 console.log("error" , event);
			    	 }
			     
			      });
	        }else{
	        	console.log("no ha seleccionado los datos")
	        }
		
}

function showData(){
    $("#datosDocente").on("click",function(event){
        event.preventDefault();
        $("#NuevoDoc").text("Datos Profesor");
        $("#create").val("Guardar");
        
       var id = getId();
        if(id != 'undefined'){
        	$.ajax("api/v1/docente/"+id,
    	    	{
    	    		contentType :"application/json",
    	    		dataType:'json',
    	    		type: "GET",
    	    		success:function (data){
    	    			
    	    			$("input[id = nombre]").val(data.nombre);
    	    		    $("input[id = apellido]").val(data.apellido1);
    	    		    $("input[id = apellidoS]").val(data.apellido2);
    	    		    $("input[id = nif]").val(data.nif);
    	    		    $("input[id = telefono]").val(data.telefono);
    	    		    $("input[id = correo]").val(data.correo);
    	    		    $("input[id  = titulacion]").val(data.titulacion);
    	    		
    	    			
    	    		},
    	    		error : function(event){
    	    			alert("error al cargar datos intente nuevamente");
    	       		 	console.log("error" , event);
    	    			
    	    		}
    	    		
    	        });
        }else{
        	alert("seleccione un profesor");
        }
	    
    } );

}

function buscar(){
	$("#buscar").on("click", function(event){
		event.preventDefault();
		var link;
		var buscaNombre =$("#buscarNombre").val();
		var buscaCC = $("#buscarCC").val();
		
		if(buscaNombre == ""  && buscaCC == ""){	
			link = "./api/v1/docente";
			
		}else {
			link = "./api/v1/docente/" + buscaNombre + "/" + buscaCC ;
		}
		$.ajax({
				url : link,
	    		contentType: "application/json",
	    		dataType:'json',
	    		type: "GET",
	    		success:function(datos){
	    			 $.each(datos, function(i, e) {
	    			        $('#prof-tabla').append("" +
	    			        	"<tr class = 'contenido' data-id="+e.id+">" +
	    			              "<td>" + e.nombre + "</td>" +
	    			    	      "<td>" + e.nif + "</td>" +
	    			    	      "<td>" + e.telefono + "</td>" +
	    			    	      "<td>" + e.correo + "</td>" +
	    			    	      "<td> <input type='radio' value="+ e.id +" class ='seleccion' name='seleccion' id="+ e.id + "> </td>" +
	    			    	    "</tr>");
	    			    });
	    			

	    		},
	    		error : function(event){
	       		 alert("error en el registro intente nuevamente");
	       		 console.log("error" , event);
	       	 	}
	    		
	    });
		
	});
}

function getId(){
	return $("input[name = seleccion]:checked").val();
}

function limpiar(){
	$("#limpiar").on("click", function(event){
			event.preventDefault();
			$("tr").remove(".contenido");
		}
		
	);
	
	
}
 
