$(function(){
    add();
    limpiar();
    Listar();
    editar();
    //Fecha();
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
    var idcurso = $("#curso").val();
    var repetidor = $("#repetidor").val();
    var fechaAlta = $("#fecha_de_alta").val();
    var fechaBaja  = $("#fecha_de_baja").val();
    var observacion = $("#observaciones").val();
   // DATOS DEL RESPONSABLE 
    var Nameresponsable = $("#nombreR").val();
    var apellidoRe  = $("#apellidoR").val();
    var apellido1Re = $("#apellido2R").val();
    var nifRe = $("#nifR").val();
    var telefonoRe = $("#telefonoR").val();
    var correoRe = $("#correoR").val();
    
    
    var  responsable= {

    	  "nombre" : Nameresponsable, "apellido1" : apellidoRe, 
    	  "apellido2" : apellido1Re, "nif" : nifRe,
    	  "telefono" : telefonoRe, "correo" : correoRe 
       };   
     
    $.ajax("./api/v1/representante",
    	{
    		contentType : "application/json",
    		dataType : "json",
    		type :"POST",
    		data : JSON.stringify(responsable),
    		success: function(datoResp){
    			
    			var estudiante = {
    				      "nombre" : nombre, "apellido1" : apellido1,
    				      "apellido2" : apellido2, "nif" : nif,
    				      "telefono" : tel, "correo" : correo,
    				      "repetidor" : repetidor, "fecha_alta" : fechaAlta,
    				      "fecha_baja" : fechaBaja, "observacion" : observacion,
    				      "responsable" : datoResp 
    			       };
    			$.ajax("./api/v1/estudiante",
    			 	    {
    			 	    	contentType : "application/json",
    			 	    	dataType : "json",
    			 	    	type : "POST",
    			 	    	data : JSON.stringify(estudiante),
    			 	    	success : function(dataEstudiante){
    			 	    		alert("El estudiante ha sido creado",dataEstudiante.id);
    			 	    		limpiar();
    			 	    	},
    			 	    	error: function(event){
    			 	    		alert("Error en el registro vuelva a intentarlo");
    			 	    		console.log("Error", event.status+" "+event.responseText);
    			 	    	}
    			 	   });
    		    
    		},
    		error : function(event){
    			console.log("Error al cargar el Representante");
    			alert("No se puede guardar");
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
function editar(){
	$("#datosEst").on("click" ,function(event){
		event.preventDefault();
		
		$.ajax("./api/v1/estudiante/"+getId(),{
			contentType:"application/json",
			dataType : "json",
			type :"GET",
			success :  function (datos){
				
				 $("#nombre").val(datos.nombre);
				 $("#apellido1").val(datos.apellido1);
				 $("#apellido2").val(datos.apellido2);
				 $("#nif").val(datos.nif);
				 $("#telefono").val(datos.telefono);
				 $("#email").val(datos.correo);
				 $("#curso").val(datos.grado);
				 $("#repetidor").val(datos.repetidor);
				 $("#fecha_de_alta").val(datos.fecha_alta);
				 $("#fecha_de_baja").val(datos.fecha_baja);
				 $("#observaciones").val(datos.observacion);
				 // DATOS DEL RESPONSABLE 
				 $("input[id = nombreR]").val(datos.responsable.nombre);
				 $("input[id = apellidoR]").val(datos.responsable.apellido1);
				 $("input [id = apellido2R]").val(datos.responsable.apellido2);
				 $("input [id = nifR]").val(datos.responsable.nif);
				 $("input [id = telefonoR]").val(datos.responsable.telefono);
				 $("input[id= correoR]").val(datos.responsable.correo);
				
			},
			error : function(event){
				console.log("No carga datos");
				alert(error , "No se logro cargar los datos");
			} 
			
		});
		
	});
	
}
function Fecha(){
	/*$("#nuevoEst").on("click", function(event){
		event.preventDefault();
		var f = new Date();
		$("#fecha_de_alta").val(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
	});*/
}
function Listar(){
	$("#buscar").on("click", function(event){
		event.preventDefault();
		var buscar = $("#buscaNombre").val();
		
		
		$.ajax("api/v1/estudiante",{
			contentType:"application/json", 
			dataType : "json",
			type : "GET",
			success: function(data){
				$.each(data, function(i, e){
					
					$("tbody.cuerpo-tableEst").append(
							"<tr>" +
						    "<td>" + e.nombre + "</td>" +
						    "<td>" + e.curso + "</td>" +
						   // "<td>" + e.responsable.nombre+ "</td>" +
						    "<td>" + e.fecha_alta + "</td>" +
						    "<td>" + e.fecha_baja + "</td>" +
						    "<td><input type ='radio'name ='resultadoEstudiante' value=" + e.id + "class='seleccion' id ="+ e.id+ "></td>" +
						"</tr>");
				});
				
			},
			error: function (event){
				console.log("error al intentar buscar ", event);
				alert("error al buscar datos")
			}
		});
	});
function getId(){
	
	return $("input[name = resultadoEstudiante]:checked").val();
}
	
}