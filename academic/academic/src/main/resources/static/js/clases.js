$(function(){
 // btnCrear();
 // addClase();
  BuscarByProfe();
  OpcionesProfe();
});

function btnCrear(){
	
	$('#create').on("click", function(event){
	      event.preventDefault();
	      if($(this).val() =="Crear"){
	    	  //Add();
	      }else{
	    	  //Actualizar();
	      }
	});
}

function addClase(){
	
    $('form input[type=submit]').on('click', function(e) {
        e.preventDefault();
		
		

    });
	
}

function OpcionesProfe(){
	$("#new").on("click", function(event){
		event.preventDefault();
		 
		 var s = document.getElementById('Lista-profesor');

			$.ajax({
					url : "./api/v1/docente",
		    		contentType: "application/json",
		    		dataType:'json',
		    		type: "GET",
		    		success:function(datos){
		    			// s[0] = new Option("Seleccione profesor...", 0, false, true);
		    			 $.each(datos, function(i, e) {
		    				 
		    				 s[i] = new Option(e.nombre+" "+e.apellido1, i);   
		                     console.log(e.apellido1);
		    			 });
		    			 		 
		    		},
		    		error : function(event){
		       		 alert("error en el registro intente nuevamente");
		       		 console.log("error" , event);
		       	 	}
		    			
		});	
		
	});
}


function BuscarByProfe(){

	 var select = document.getElementById('MySelect');

		$.ajax({
				url : "./api/v1/docente",
	    		contentType: "application/json",
	    		dataType:'json',
	    		type: "GET",
	    		success:function(datos){
	    			// s[0] = new Option("Seleccione profesor...", 0, false, true);
	    			 $.each(datos, function(i, e) {
	    				 
	    				 select[i] = new Option(e.nombre+" "+e.apellido1, e.id);   
	    				 
	    			 });
	    			 		 
	    		},
	    		error : function(event){
	       		 alert("error en el registro intente nuevamente");
	       		 console.log("error" , event);
	       	 	}
	    			
	});
}
