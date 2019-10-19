$(function(){
    AddDocente();
    EliminarDocente();
    AddButtonDelete();
});

function AddDocente(){
   $('#create').on("click", function(event){
      event.preventDefault();
      var nombre = $("input[id = nombre]");
      var apellido1 = $("input[id = apellido1]");
      var apellido2 = $("input[id = apellido2]");
      var Nif = $("input[id = nif]");
      var telefono = $("input[id = telefono]");
      var correo = $("input[id = correo]");
      var titulacion = $("input[id  = titulacion]");
      
      var docente = {
    	  "nombre" : nombre,
    	  "apellido1" : apellido1,
    	  "apellido2" : apellido2,
    	  "nif" : nif ,
    	  "telefono" : telefono,
    	  "correo" : correo ,
    	  "titulacion" : titulacion
    	};
     $.ajax("./api/v1/docente",
    		 {
    	 contentType :"application/json",
    	 dataType:'json',
    	 type: "POST",
    	 data:JSON.stringify(docente),
    	 success:function(dataDocente){  
    		 
    	      $('#prof-tabla').append(
    	    "<tr class = 'prof' data-id=" + dataDocente.id +">"+
    	      "<th>" + dataDocente.nombre + "</th>" +
    	      "<th>" + dataDocente.Nif + "</th>" +
    	      "<th>" + dataDocente.telefono + "</th>" +
    	      "<th>" + dataDocente.correo + "</th>" +
    	     "</tr>");
    	       nombre.val('');
    	       apellido1.val('');
    	       apellido2.val('');
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