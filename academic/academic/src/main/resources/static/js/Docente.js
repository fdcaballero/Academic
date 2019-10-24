$(function(){
    AddDocente();
    EliminarDocente();
    AddButtonDelete();
    limpiar();
    showData();
    buscar();


});


function AddDocente(){
    
   $('#create').on("click", function(event){
      event.preventDefault();

      
      var nombre = $("input[id = nombre]").val();
      var apellido = $("input[id = apellido]").val();
      var apellidoS = $("input[id = apellidoS]").val();
      var Nif = $("input[id = nif]").val();
      var telefono = $("input[id = telefono]").val();
      var correo = $("input[id = correo]").val();
      var titulacion = $("input[id  = titulacion]").val();
     
      var docente = {
    	  "nombre" : nombre, "apellido1" : apellido, "apellido2" : apellidoS, "nif" : Nif ,"telefono" : telefono,"correo" : correo, "titulacion" : titulacion
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
        
   
    
   });
}

function AddButtonDelete(){
  $('#Delete').on('click', function(event){
      event.preventDefault();
      $(".prof").append("<th><a href='#' class='eliminar button'>Eliminar</a></th>");
  });
}

function EliminarDocente(){
    $('#prof-tabla').on('click', '.eliminar', function(event){
         event.preventDefault();
         $(this).closest('tr').remove();
    });
}

function showData(){
    $("#datosDocente").on("click",function(event){
        event.preventDefault();
        $("#titleRegistro").text("Datos Profesor")

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
			
		}else if (buscaNombre != "" && buscaCC != ""){
			link = "./api/v1/docente";
		}
		$.ajax({
				url : link,
	    		contentType: "application/json",
	    		dataType:'json',
	    		type: "GET",
	    		success:function(datos){
	    			 $.each(datos, function(i, e) {
	    			        $('#prof-tabla').append("<tr class = 'contenido' data-id="+e.id+">" +
	    			              "<td>" + e.nombre + "</td>" +
	    			    	      "<td>" + e.nif + "</td>" +
	    			    	      "<td>" + e.telefono + "</td>" +
	    			    	      "<td>" + e.correo + "</td>" +
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

/*function btnAccep(){
 $("#BtnAccep").on("click", function(e){
     e.preventDefault();
    $("#myModalHorario").hide();
 });
 Quieres ocultar el modal despues de haber ingresado un docente?
 cual?
 
}*/

function limpiar(){
	$("#limpiar").on("click", function(event){
			event.preventDefault();
			$("tr").remove(".contenido");
		}
		
	);
	
	
}
 
 