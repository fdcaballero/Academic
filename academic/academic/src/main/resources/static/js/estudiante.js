$(function(){
    add();
    limpiar();
   // Listar();
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

function editar(){
	$("#datosEst").on("click" ,function(event){
		event.preventDefault();
		
		$.ajax("./api/v1/estudiante/"+getId(),{
			contentType:"application/json",
			dataType : "json",
			type :"GET",
			success :  function (datos){
				
				 $("input[id =  Dnombre]").val(datos.nombre);
				 $("input[id =  Dapellido1]").val(datos.apellido1);
				 $("input[id =  DapellidoD]").val(datos.apellido2);
				 $("input[id =  Dnif]").val(datos.nif);
				 $("input[id =  Dtelefono]").val(datos.telefono);
				 $("input[id =  Dcorreo]").val(datos.correo);
				 $("input[id =  Dcurso]").val(datos.grado);
				 $("input[id =  Drepetidor]").val(datos.repetidor);
				 $("input[id =  DfechaAlta]").val(datos.fecha_alta);
				 $("input[id =  DfechaBaja]").val(datos.fecha_baja);
				 $("input[id =  Dobservaciones]").val(datos.observacion);
				 // DATOS DEL RESPONSABLE 
				 $("input[id =  DnombreR]").val(datos.responsable.nombre);
				 $("input[id =  DapellidoR]").val(datos.responsable.apellido1);
				 $("input [id = DapellidoRs]").val(datos.responsable.apellido2);
				 $("input [id = DnifR]").val(datos.responsable.nif);
				 $("input [id = DtelefonoR]").val(datos.responsable.telefono);
				 $("input[id= DcorreoR]").val(datos.responsable.correo);
				 
				 /*
				
				 $("#Dnombre").val(datos.nombre);
				  $("#Dapellido1").val(datos.apellido1);
				  $("#DapellidoD").val(datos.apellido2);
				  $("#Dnif").val(datos.nif);
				  $("#Dtelefono").val(datos.telefono);
				  $("#Dcorreo").val(datos.correo);
				  $("#Dcurso").val(datos.grado);
				  $("#Drepetidor").val(datos.repetidor);
				  $("#DfechaAlta").val(datos.fecha_alta);
				  $("#DfechaBaja").val(datos.fecha_baja);
				  $("#Dobservaciones").val(datos.observacion);
				   // DATOS DEL RESPONSABLE
				  $("#DnombreR").val(datos.responsable.nombre);
				  $("#DapellidoR").val(datos.responsable.apellido1);
				  $("#DapellidoRs").val(datos.responsable.apellido2);
				  $("#DnifR").val(datos.responsable.nif);
				  $("#DtelefonoR").val(datos.responsable.telefono);
				  $("#DcorreoR").val(datos.responsable.correo);*/
			},
			error : function(event){
				console.log("No carga datos");
				alert(error , "No se logro cargar los datos");
			} 
			
		});
		
	});
	
}

function Guardar(){
	$("#guardarEst").on("click", function(event){
		event.preventDefault();
		var nombre =  $("input[id =  Dnombre]").val();
		var apellido = $("input[id =  Dapellido1]").val(datos.apellido1);
		var apellido1 = $("input[id =  DapellidoD]").val(datos.apellido2);
		var cc = $("input[id =  Dnif]").val(datos.nif);
		var celular =  $("input[id =  Dtelefono]").val(datos.telefono);
		var correo =  $("input[id =  Dcorreo]").val(datos.correo);
		var curso = $("input[id =  Dcurso]").val(datos.grado);
		var repetidor = $("input[id =  Drepetidor]").val(datos.repetidor);
		var fecha = $("input[id =  DfechaAlta]").val(datos.fecha_alta);
		var fechaB =  $("input[id =  DfechaBaja]").val(datos.fecha_baja);
		var observacion = $("input[id =  Dobservaciones]").val(datos.observacion);
		 // DATOS DEL RESPONSABLE 
		var nombreRep = $("input[id =  DnombreR]").val(datos.responsable.nombre);
		var apellidoRep = $("input[id =  DapellidoR]").val(datos.responsable.apellido1);
		var apellidoRep1 = $("input [id = DapellidoRs]").val(datos.responsable.apellido2);
		var nif =  $("input [id = DnifR]").val(datos.responsable.nif);
		var telefono =  $("input [id = DtelefonoR]").val(datos.responsable.telefono);
		var correoRep = $("input[id= DcorreoR]").val(datos.responsable.correo);
		
		var responsable = {
				"nombre" : nombreRep, "apellido1" : apellidoRep, 
		    	"apellido2" : apellidoRep1, "nif" : nif,
		    	"telefono" : telefono, "correo" : correoRep 
		};
		
		var estudiante = {
			      "nombre" : nombre, "apellido1" : apellido,
			      "apellido2" : apellido1, "nif" : cc,
			      "telefono" : celular, "correo" : correo,
			      "repetidor" : repetidor, "fecha_alta" : fecha,
			      "fecha_baja" : fechaB, "observacion" : observacion,
			      "responsable" : responsable
		       };
	  $.ajax("./api/v1/representante",{
  		contentType : "application/json",
  		dataType : "json",
  		type :"PUT",
  		data : JSON.stringify(estudiante),
  		success: function(datoResp){
  			alert("Actualizado  con exito");
  		},
  		error : function(event){
  			console.log("error al guardar los datos" , event);
  			alert("error desde Actualizar");
  		}
	  });
	  
	});
	
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function Fecha(){
	/*$("#nuevoEst").on("click", function(event){
		event.preventDefault();
		var f = new Date();
		$("#fecha_de_alta").val(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
	});*/
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~~44~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~
function Listar(){ //Buscar implementado con AJAX
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
	});~
}
//4~~4~~4~~4~~~44~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~
function getId(){
	return $("input[name = resultadoEstudiante]:checked").val(); 
}
	function repetidor(){
	$("#")
		
}