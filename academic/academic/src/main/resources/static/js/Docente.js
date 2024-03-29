$(function(){
    AddDocente();
    EliminarDocente();
    showData();
    limpiar();
    Actualizar();
    buscar();
    getId();
    showClass();
    //btnCrear();
    //activarBtn();
});


function showClass(){	
	$("#claseD").on("click", function(event){
		event.preventDefault();
		$("p.removible").remove();
		if(getId()){
			   $.ajax("api/v1/clasesprof/"+getId(),
		    	    	{
		    	    	contentType :"application/json",
		    	    	dataType:'json',
		    	    	type: "GET",
		    	    	success:function (data){
		    	    		$.each(data, function(i, p){
		    	    		
		    	    			$.each(p.horas_semanales, function(i, e){
		    	    					
		    	    				document.getElementById("tabla-Horario").rows[e.hora_indice].cells[e.dia_indice].innerHTML ="<p class='removible' >"+p.asignatura.nombre +"</p>";
			    	    				
		    	    			});	
	    	    			});	
		    	    	},
		    	    	error : function(event){
		    	    		alert("error al cargar datos intente nuevamente");
		    	       	 	console.log("error" , event);
		    	    	}
		    	    	
		      });
		}
		
	});
	
}

function AddDocente(){
	$("#create").on("click", function(event){
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
    		 
    		    $("input[type= text]").val("");
    		   // $("input[id = apellido]").val("");
    		 //   $("input[id = apellidoS]").val("");
    		    $("input[type = tel]").val("");
    		    $("input[id = telefono]").val("");
    		    $("input[type = email]").val("");
    		  //  $("input[id  = titulacion]").val("");
    		
    	      console.log("usuario crado");
    	 },
    	 error : function(event){
    		 alert("error en al registrar  intente nuevamente");
    		 console.log("error" , event);
    	 }
     
      });
      
	});
         
}

/*function activarBtn(){
	var checkout = $("input[class = seleccion]").prop("checked");
	var band = false;
	
	if(checkout){
		band = true;
	}
	
	//$("#datosDocente").prop("disabled",band);
	//$("#Delete").prop("disabled", band);
}*/

function EliminarDocente(){
    $('#Delete').on('click', function(event){
         event.preventDefault();
         var id = getId();
         console.log("id seleccionado desde Eliminar " + id);
         if(id){
	         $.ajax("api/v1/docente/" + id,
	    		{
	        	 //url: window.location +"api/v1/docente/" + id,
	        	 contentType: "application/json",
	        	 type: "DELETE",
	        	 success:function(){
	        		 //añadir codigo para eliminar la fila de la bd al momento de borrar usuario
	        		 var td = $("input[id = "+getId()+"]");
	        		 td.closest("tr").remove();
	        	 },
	        	 error : function(event){
	        		 alert("error en el registro intente nuevamente");
	        		 console.log("error" , event);
	        	 }
	        });
    	}else{
    		alert("Seleccione un Profesor");
    	}       
    });
}

function Actualizar(){
	 $('#guardarDatos').on("click", function(event){
	      event.preventDefault();
	      
		/*  var nombre = $("input[id = nombre]").val();
	      var apellido = $("input[id = apellido]").val();
	      var apellidoS = $("input[id = apellidoS]").val();
	      var Nif = $("input[id = nif]").val();
	      var telefono = $("input[id = telefono]").val();
	      var correo = $("input[id = correo]").val();
	      var titulacion = $("input[id  = titulacion]").val();
	     */
	

	      var nombre = $("#Dnombre").val();
	      var apellido = $("#Dapellido").val();
	      var apellidoS = $("#DapellidoS").val();
	      var Nif = $("#Dnif").val();
	      var telefono = $("#Dtelefono").val();
	      var correo = $("#Dcorreo").val();
	      var titulacion = $("#Dtitulacion").val();

	      var docente = {
	    	  "nombre" : nombre, "apellido1" : apellido,
	    	  "apellido2" : apellidoS, "nif" : Nif ,
	    	  "telefono" : telefono,"correo" : correo, "titulacion" : titulacion
	        };
	      var id = getId();
	      console.log(id+ " este es el id seleccionado des Actualizar");
	      if(nombre && apellido && Nif && telefono && correo ){
	 	     $.ajax("./api/v1/docente/"+id,
		    		 {
		    	 contentType :"application/json",
		    	 dataType:'json',
		    	 type: "PUT",
		    	 data: JSON.stringify(docente),
		    	 success: function(dataDocente){  
		    		 
		    		    $("#Dnombre").val("");
		    			$("#Dapellido").val("");
		    			$("#DapellidoS").val("");
		    			$("#Dnif").val("");
		    			$("#Dtelefono").val("");
		    			$("#Dcorreo").val("");
		    			$("#Dtitulacion").val("");

		    		
		    	      
		    	 },
		    	 error : function(event){
		    		 alert("error en el registro intente nuevamente");
		    		 console.log("error" , event);
		    	 }
		     
		      });
       
	    	  
	      }
		
		
	 });
}

function showData(){
	
    $("#datosDocente").on("click",function(event){
       event.preventDefault();
       var id = getId();
      // data-target='#Modaldatos'
     //  $('#Modaldatos').modal('show');
     //  $("#Modaldatos").modal("target");
       if(id){
    	 //  $('#Modaldatos').modal('show');
    	   $.ajax("api/v1/docente/"+id,
    	    	{
    	    		contentType :"application/json",
    	    		dataType:'json',
    	    		type: "GET",
    	    		success:function (data){
    	    			$("input[id = Dnombre]").val(data.nombre);
    	    			$("input[id = Dapellido]").val(data.apellido1);
    	    			$("input[id = DapellidoS]").val(data.apellido2);
    	    			$("input[id = Dnif]").val(data.nif);
    	    			$("input[id = Dtelefono]").val(data.telefono);
    	    			$("input[id = Dcorreo]").val(data.correo);
    	    			$("input[id  = Dtitulacion]").val(data.titulacion);
    	    		},
    	    		error : function(event){
    	    			alert("error al cargar datos intente nuevamente");
    	       		 	console.log("error" , event);
    	    		}
    	    		
    	        });
        }else{
        	alert("seleccione un profesor");
        }
	    
   });

}

function buscar(){
$("#buscar").on("click", function(event){
		event.preventDefault();
		var link;
		var buscaNombre =$("#buscarNombre").val();
		var buscaCC = $("#buscarCC").val();
		 $('tbody.Tbuscar').children().remove();
		if(buscaNombre == ""  && buscaCC == ""){	
			link = "./api/v1/docente";
			
		}else {
			link = "./api/v1/docente/" + buscaNombre + "/" + buscaCC ;
		}
		$("tr").remove(".contenido");
		$.ajax({
				url : link,
	    		contentType: "application/json",
	    		dataType:'json',
	    		type: "GET",
	    		success:function(datos){
	    			 $.each(datos, function(i, e) {
	    			        $('tbody.Tbuscar').append("" +
	    			        	"<tr class = 'contenido' data-id="+e.id+">" +
	    			              "<td>" + e.nombre + "</td>" +
	    			    	      "<td>" + e.nif + "</td>" +
	    			    	      "<td>" + e.correo + "</td>" +
	    			    	      "<td>" + e.telefono + "</td>" +
	    			    	      "<td> <input type='radio' value="+ e.id +" class ='seleccion' name='seleccion' id="+ e.id + "> </td>" +
	    			    	    "</tr>");
	    			    });
	    			
//
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
	});
}
 



/*	
$("input[id = nombre]").val(data.nombre);
$("input[id = apellido]").val(data.apellido1);
$("input[id = apellidoS]").val(data.apellido2);
$("input[id = nif]").val(data.nif);
$("input[id = telefono]").val(data.telefono);
$("input[id = correo]").val(data.correo);
$("input[id  = titulacion]").val(data.titulacion);
*/
