$(function(){
    AddDocente();
    EliminarDocente();
    AddButtonDelete();
});

function AddDocente(){
   $('#create').on("click", function(event){
      event.preventDefault();
      var nombre = $("input[id = nombre]");
      var Nif = $("input[id = Nif]");
      var telefono = $("input[id = telefono]");
      var correo = $("input[id = correo]");
      $('#prof-tabla').append("<tr class = 'prof'>"+
      "<th>" + nombre.val() + "</th>" +
      "<th>" + Nif.val() + "</th>" +
      "<th>" + telefono.val() + "</th>" +
      "<th>" + correo.val() + "</th>" +
      "</tr>");
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