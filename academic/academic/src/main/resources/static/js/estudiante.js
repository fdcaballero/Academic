$(function(){
    add();
    limpiar();
});


function add(){
 $('#crear').on("click",function(event){
    event.preventDefault();

    var nombre = $("#nombre").val();
    var apellido1 = $("#apellido1").val();
    var apellido2 = $("#apellido2").val();
    var nif  = $("#nif").val();
    var tel = $("#telefono").val();
    var correo  = $("#email").val();
    var curso = $("#curso").val();
    var repetidor = $("#repetidor").val();
    var fechaAlta = $("#fecha_de_alta").val();
    var fechaBaja  = $("#fecha_de_baja").val();
    var observacion = $("#observaciones").val();
   // DATOS DEL RESPONSABLE 
    var responsable = $("#nombreR").val();
    var apellidoRe  = $("#apellidoR").val();
    var apellido1Re = $("#apellido2R").val();
    var nifRe = $("#nifR").val();
    var telefonoRe = $("#telefonoR").val();
    var correoRe = $("#correoR").val();
    
    var estudiante = {
      "nombre" : nombre, "apellido1" : apellido1,
      "apellido2" : apellido2, "nif" : nif,
      "telefono" : tel, "corrreo" : correo,
      "grado" : curso = {"nive": 11,"etapa": curso}, "repetidor" : repetidor,
      "fecha_alta" : fechaAlta, "fecha_baja" : fechaBaja, "observacion" : observacion,
      "responsable" : {
    	  "nombre" : responsable, "apellido1" : apellidoRe, 
    	  "apellido2" : apellido1Re, "nif" : nifRe,
    	  "telefono" : telefonoRe, "corrreo" : correoRe 
       }   
     };
    $.ajax("./api/v1/estudiante",
       {
    	contentType : "application/json",
    	dataType : "json",
    	type : "POST",
    	data : JSON.stringify(estudiante),
    	success : function(dataEstudiante){
    		limpiar();
    	},
    	error: function(event){
    		alert("Error en el registro vuelva a intentarlo");
    		console.log("Error", event);
    	}
       });

  	});
}

function limpiar(){
	    $("#nombre").val("");
	    $("#apellido1").val("");
	    $("#apellido2").val("");
	    $("#nif").val("");
	    $("#telefono").val("");
	    $("#email").val("");
	    $("#curso").val("");
	    $("#repetidor").val("");
	    $("#fecha_de_alta").val("");
	    $("#fecha_de_baja").val("");
	    $("#observaciones").val("");
	   // DATOS DEL RESPONSABLE 
	    $("input[id = nombreR]").val("");
	    $("input[id = apellidoR]").val("");
	    $("input [id = apellido2R]").val("");
	    $("input [id = nifR]").val("");
	    $("input [id = telefonoR]").val("");
	    $("input[id= correoR]").val("");

	
}
//  $("#myModal").modal("hide");   
/*$("#ct").append(
 "<tr>" +
    "<td>" + nombre.val() + "</td>" +
    "<td>" + curso.val() + "</td>" +
    "<td>" + responsable.val() + "</td>" +
    "<td>" + fechaAlta.val() + "</td>" +
    "<td>" + fechaBaja.val() + "</td>" +
"</tr>"); */
