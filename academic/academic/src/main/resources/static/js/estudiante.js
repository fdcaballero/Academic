$(function(){
    add();
});


function add(){
 $("#crear").on("click",function(event){
    event.preventDefault();

    var nombre = $("#nombre");
    var apellido1 = $("#apellido1");
    var apellido2 = $("#apellido2");
    var nif  = $("#nif");
    var tel = $("#telefono")
    var correo  =$("#email");
    var curso = $("#curso");
   var repetidor = $("#repetidor");
    var fechaAlta = $("#fecha_de_alta");
    var fechaBaja  =$("#fecha_de_baja");
    var observacion = $("#observaciones");
   // DATOS DEL RESPONSABLE 
    var responsable = $("input[id = #nombreR]");
    var apellidoRe  = $("input[id = apellidoR]");
    var apellido1Re = $("input [id = apellido2R]");
    var nifRe = $("input [id = nifR]");
    var telefonoRe = $("input [id = telefonoR]");
    var correoRe =$("input[id= correoR]");

    
    
    nombre.val("");
    apellido1.val("");
    apellido2.val("");
    nif.val("");
    tel.val("");
    correo.val("");
    curso.val("");
    repetidor.val("");
    fechaBaja.val("");
    fechaAlta.val("");
    observacion.val("");
    //##############################
    responsable.val("");
    apellidoRe.val("");
    apellido1Re.val("");
    nifRe.val("");
    telefonoRe.val("");
    correoRe.val("");
    $("#myModal").modal("hide");   
    /*$("#ct").append(
     "<tr>" +
        "<td>" + nombre.val() + "</td>" +
        "<td>" + curso.val() + "</td>" +
        "<td>" + responsable.val() + "</td>" +
        "<td>" + fechaAlta.val() + "</td>" +
        "<td>" + fechaBaja.val() + "</td>" +
    "</tr>"); */
 });
}