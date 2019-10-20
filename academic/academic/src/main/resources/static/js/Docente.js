$(function(){
    AddDocente();
    EliminarDocente();
    AddButtonDelete();
});

function AddDocente(){
   $('#create').on("click", function(event){
      event.preventDefault();
      var nombre = $("input[id = nombre]");
      var apellido = $("input[id = apellido]");
      var apellidoS = $("input[id = apellidoS]");
      var Nif = $("input[id = nif]");
      var telefono = $("input[id = telefono]");
      var correo = $("input[id = correo]");
      var titulacion = $("input[id  = titulacion]");
      
      var docente = {
    	  "nombre" : nombre,
    	  "apellido1" : apellido,
    	  "apellido2" : apellidoS,
    	  "nif" : nif ,
    	  "telefono" : telefono,
    	  "correo" : correo ,
    	  "titulacion" : titulacion
    	};
     $.ajax("./api/v1/docente",
    		 {
    	 contentType : "application/json",
    	 dataType:'json',
    	 type: "POST",
    	 data:JSON.stringify(docente),
    	 success:function(dataDocente){  
    		 
    	  $('#prof-tabla').append(
    			  "<tr class = 'prof' data-id=" + dataDocente.id +">"+
		    	      "<td>" + dataDocente.nombre + "</td>" +
		    	      "<td>" + dataDocente.Nif + "</td>" +
		    	      "<td>" + dataDocente.telefono + "</td>" +
		    	      "<td>" + dataDocente.correo + "</td>" +
	    	     "</tr>");
    	       nombre.val('');
    	       apellido.val('');
    	       apellidoS.val('');
    	       Nif.val(''); 
    	       telefono.val(''); 
    	       correo.val('');
    	       titulacion.val('');
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