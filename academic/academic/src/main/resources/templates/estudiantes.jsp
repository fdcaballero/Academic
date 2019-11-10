<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    <title>Alumno</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
   <!-- <link rel="stylesheet" th:href="@{/css/estudiantes.css}" > -->
    <link rel="stylesheet" th:href=" @{https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css}" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body class="center">
    <header>
      <!-- Nav tabs -->
      <ul class="nav nav-tabs" id="navId">
        <li class="nav-item">
          <a href="#tab1Id" class="nav-link active">Active</a>
        </li>
        <li class="nav-item">
          <a th:href="@{/inicio}" >volver</a>
        </li>
      </ul>
      
      <!-- Tab panes -->
      <div class="tab-content">
        <div class="tab-pane fade show active" id="tab1Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab2Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab3Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab4Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab5Id" role="tabpanel"></div>
      </div>
      
     
    </header>
   <section class=" col-11">
      <div class="container-fluid">

          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
             <h2 class="m-0 font-weight-bold text-primary">Alumnado</h2>
          </div>
          <div class="card-header py-1 bg-primary text-white">
          		<h5>Busqueda de alumnos</h5>
        	</div>
        
      
           
     	<div>
       
        	
             <div class="form-group">
               <label for="nombre">Nombre</label>
                 <input type="text" name = "buscaNombre" id ="buscaNombre" class="form-control form-control-user"  placeholder="Ingrese nombre...">
               </div>
               <div class="form-group">
                  <label for="curso">Curso </label>
                  <select name="buscaCurso" id = "buscaCurso" class="form-control custom-select">
                      <option  selected></option>
                      <option th:each="curso : ${cursos}" th:text ="${curso.etapa}">One</option>
                      
                  </select>
                  
                  <div class="form-check">
                    <label class="form-check-label">
                          
                      <input type="checkbox" class="form-check-input" name="repetidor" >
                      Mostrar solo actuales 
                    </label>
                  </div>
               </div>
         
    	</div>
     <div class="form-group align-items-center">
         <button type="submit" class="btn btn-primary col-2" name = "buscar" id  = "buscar" >Buscar </button>
         <button type="submit" class=" btn btn-primary col-2"name="limpiar"id="limpiar">Limpiar </button>
     </div>
  
      <!-- DataTables Example -->
      <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Resultado de la busqueda</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table" width="100%" cellspacing="0" id="tabla-c">
                
                  <tr>
                      <th><a href="#" class="btn btn-primary btn-user btn-block" id ="nuevoEst" data-toggle="modal" data-target="#myModal">Nuevo alumno</a></th>
                      <th><a href="#" class="btn btn-primary btn-user btn-block" id="datosEst" data-toggle="modal" data-target="#actualizar-estudiante">Datos personales</a></th>
                      <th><a href="#" class="btn btn-primary btn-user btn-block"  data-toggle="modal" data-target="#myModalClases">Clases</a></th>
                      <th><a href="#" class="btn btn-primary btn-user btn-block" id = "elimEst" >Dar de alta/ baja</a></th>
                      <th><a href="#" class="btn btn-primary btn-user btn-block" id ="nuevoRep" data-toggle="modal" data-target="#registro-representante">Nuevo representante</a></th>
                      <th><a href="#" class="btn btn-primary btn-user btn-block" id ="EditRep" data-toggle="modal" data-target="#actualizar-representante">Editar datos Representante</a></th>
                      
                  </tr>
                  <tr>
                    <th>Nombre</th>
                    <th>curso</th>
                    <th>Responsable</th>
                    <th>Fecha de alta </th>
                    <th>Fecha de baja</th>
                  </tr>
                <tbody class="cuerpo-tableEst">
                
                
                
                </tbody>	
                
              </table>
            </div>
          </div>
        </div>
   </section>
    <!-- The MODAL REGISTRO ESTUDIANTE 4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~-->
    <div class="modal " id="myModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header colorH">
              <h4 class="modal-title">Nuevo alumno</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
      
            <!-- Modal body -->
            <div class="modal-body ">
              <form action="#"  class="form">
                <section class="container">  
                    <section class="row">
                        <section class="form-group col">

                            <label for="nombre">* Nombre </label>
                            <input type="text" name="nombre" id="nombre" class="form-control " required>
                        
                            <label for="apellido1">* Apellido 1</label>
                                  <input type="text" name="apellido1" id="apellido1" class="form-control" required>
                              
                            <label for="apellido2">Apellido 2 </label>
                            <input type="text" name="apellido2"  class="form-control" id="apellido2">
                        
                            <label for="nif">* NIF </label>
                            <input type="text" name="nif" id="nif" class="form-control" required>
                            
                            <label for="telefono">Telefono </label>
                            <input type="tel" name="telefono" id="telefono" class="form-control">
                        
                            <label for="correo">Correo </label>
                            <input type="email" name="email" id="email" class="form-control">

                            <label for="curso">Curso </label>
                            <select name="curso" id="curso" class="form-control custom-select" required >
                                 <option selected > </option>                                 
                            </select>
                            
                            <div class="form-check">
                              <label class="form-check-label">
                                    
                                <input type="checkbox" class="form-check-input " name="repetidor" id="repetidor" >
                                
                                * Repetidor
                              </label>
                            </div>
                            
                            <label for="fecha de alta">Fecha de alta </label>
                            <input type="date" name="fecha de alta" id="fecha_de_alta" class="form-control">
                            
                            <label for="fecha de baja">Fecha de baja </label>
                            <input type="date" name="fecha de baja" id="fecha_de_baja" class="form-control">
                            
                            <label for="observaciones">Observaciones </label>
                            <textarea name="observaciones"  class="form-control " id="observaciones"rows=4></textarea>
                        </section>

                        <section class="form-group col" id="responsable">
                            <h4>Responsable</h4>
                            <div>
                            	<label for="lista-responsable"> Seleccione un responsable</label>
                            	<select name = "lista-responsable" id ="ListaResponsable" class="form-control" >
                            		<option selected></option>
                            	</select>
                            </div>
                            <h5><br>** Nota: Los datos del responsable se rellenaran en caso de que sea necesario</h5>
                        </section>
                   
                    </section>
                </section>
              </form>
            </div>
      
            <!-- Modal footer -->
            <div class="modal-footer">

              <button type="submit" class="btn btn-primary " id="crear" data-dismiss="modal">Crear</button>
              <button type="button" class="btn btn-danger" id="cancelCre" data-dismiss="modal">Cancelar</button>
              
            </div>
      
          </div>
        </div>
      </div>
 <!-- -4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~4~~ -->     
 <!-- The MODAL EDITAR APERTURA ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ -->
    <div class="modal " id="actualizar-estudiante">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header colorH">
              <h4 class="modal-title">Datos alumno</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body ">
              <form class="form" id="ActEstudiante">
                <section class="container">
                    <section class="row">
                        <section class="form-group col formulario">

                            <label for="nombre">* Nombre </label>
                            <input type="text" name="nombre" id="Dnombre" class="form-control " required>

                            <label for="apellido1">* Apellido 1</label>
                            <input type="text" name="apellido" id="Dapellido1" class="form-control" required>

                            <label for="apellido2">Apellido 2 </label>
                            <input type="text" name="apellido"  class="form-control" id="DapellidoD">

                            <label for="nif">* NIF </label>
                            <input type="text" name="nif" id="Dnif" class="form-control" required>

                            <label for="telefono">Telefono </label>
                            <input type="tel" name="telefono" id="Dtelefono" class="form-control">

                            <label for="correo">Correo </label>
                            <input type="email" name="correo" id="Dcorreo" class="form-control">

                            <label for="curso">Curso </label>
                            <select name="curso" id="Dcurso" class="form-control custom-select" required>
                            	<option></option>
                            </select>

                            <div class="form-check">
                              	<label class="form-check-label">
                                <input type="checkbox" class="form-check-input " name="repetidor" id="Drepetidor" >
                                * Repetidor
                              </label>
                            </div>

                            <label for="fecha de alta">Fecha de alta </label>
                            <input type="date" name="fechaDeAlta" id="DfechaAlta" class="form-control" disabled>

                            <label for="fecha de baja">Fecha de baja </label>
                            <input type="date" name="fecha_de_baja" id="DfechaBaja" class="form-control">

                            <label for="observaciones">Observaciones </label>
                            <textarea name="observaciones"  class="form-control " id="Dobservaciones"rows=4></textarea>
                        </section>

                        <section class="form-group col" id="Dresponsable">
                            <h4>Responsable</h4>
                            <div>
                            	<label for="lista-responsable"> Seleccione un responsable</label>
                            	<select name = "lista-responsable" id ="ListaResponsablD" class="form-control" >
                            		<option></option>
                            	</select>
                            </div>
                        </section>
                    </section>
                </section>
              </form>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-primary " id="guardarEst" data-dismiss="modal">Guardar</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>

            </div>

          </div>
        </div>
      </div>
      <!--¬¬¬¬¬¬¬¬MODAL EDITAR CIERRE¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ -->
   
   <!-- REGISTRO REPRESENTANTE -->
    <section>
    	   <div class="modal " id="registro-representante">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header colorH">
              <h4 class="modal-title">Nuevo Responsable</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
      
            <!-- Modal body -->
            <div class="modal-body ">
              <form action="#"  class="form">
                <section class="container">  
                    <section class="row">
                       <section class="form-group col" id="responsable">
                            <h4>Responsable</h4>
                          
                            <label for="nombre">* Nombre </label>
                            <input type="text" name="nombreR" id="nombreR" class="form-control" required>

                            <label for="apellido1">* Apellido 1</label>
                            <input type="text" name="apellidoR" id="apellidoR" class="form-control" required>
                                
                            <label for="apellido2">Apellido 2 </label>
                            <input type="text" name="apellido2R" id="apellido2R" class="form-control">
                            
                            <label for="nif">* NIF </label>
                            <input type="text" name="nifR"  id="nifR" class="form-control" required>
                                
                            <label for="telefono">* Telefono </label>
                            <input type="tel" name="telefonoR" id="telefonoR" class="form-control" required>
                            
                            <label for="correo">* Correo </label>
                            <input type="email" name="correoR" id="correoR" class="form-control" required>
                          
                        </section>
                    </section>
                </section>
              </form>
            </div>
      
            <!-- Modal footer -->
            <div class="modal-footer">

              <button type="submit" class="btn btn-primary " id="crearReprensentante" data-dismiss="modal">Crear</button>
              <button type="button" class="btn btn-danger" id="cancelCre" data-dismiss="modal">Cancelar</button>
              
            </div>
      
          </div>
        </div>
      </div>
    </section>
     
     <!-- MODAL EDITAR REPRESENTANTE -->
     <section>
     	<div class="modal " id="actualizar-representante">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header colorH">
              <h4 class="modal-title">Datos Representante</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body ">
              <form class="form" id="ActRepresentante">
                <section class="container">
                    <section class="row">
                      <section class="form-group col" id="Dresponsable">
                            <h4>Responsable</h4>
                            
                             <div>
                            	<label for="lista-responsable"> Lista Responsable</label>
                            	<select name = "lista-responsable" id ="ListaResponsableEdit" class="form-control" >
                            		<option selected></option>
                            	</select>
                            </div>
                            
                            <label for="nombre">* Nombre </label>
                            <input type="text" name="nombreR" id ="DnombreR" class="form-control" required>

                            <label for="apellido1">* Apellido 1</label>
                            <input type="text" name="apellido1R" id="DapellidoR" class="form-control" required>

                            <label for="apellido2">Apellido 2 </label>
                            <input type="text" name="apellidoRs" id="DapellidoRs" class="form-control">

                            <label for="nif">* NIF </label>
                            <input type="text" name="nifR"  id="DnifR" class="form-control" required>

                            <label for="telefono">* Telefono </label>
                            <input type="tel" name="telefonoR" id="DtelefonoR" class="form-control" required>

                            <label for="correo">* Correo </label>
                            <input type="email" name="correoR" id="DcorreoR" class="form-control" required>
                            

                        </section>
                    </section>
                </section>
              </form>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-primary " id="guardarRep" data-dismiss="modal">Guardar</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>

            </div>

          </div>
        </div>
      </div>
     </section>
     
      <section>
              <!-- The Modal HorarioÂ·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·Â·-->
          <div class="modal" id="myModalClases">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
          
                <!-- Modal Header -->
                <div class="modal-header colorH">
                  <h4 class="modal-title ">Clases</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
          
                <!-- Modal body -->
                <div class="modal-body">
                 <table class="table table-striped table-inverse table-bordered text-center">
                     <thead class="thead-inverse">
                         <h5>Clases disponibles para el alumno</h5>
                         <tr>
                             <th>Asignatura</th>
                             <th>Profesor</th>
                             <th>Horario</th>
                         </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td scope="row">Calculo Integral</td>
                                 <td>Pedro Gutierrez </td>
                                 <td>lunes , Viernes cienaga grande norte 201</td>
                             </tr>
                             <tr>
                                    <td scope="row">Electricidad y Magnetismo</td>
                                    <td>Gilma 500</td>
                                    <td>Viernes, 14:00-16:00 Sierra Nevada Sur 205, 16:00-18:00 Lab Electricidad y Magnetismo </td>
                                </tr>
                         </tbody>
                 </table>
                 <table class="table table-striped table-inverse table-bordered text-center">
                     <thead class="thead-inverse">
                         <h5>Horario</h5>
                         <tr>
                             				<th>Hora</th>			<th>Lunes</th> 		 <th>Martes</th> 	<th>Miercoles</th>	 <th>Jueves</th>	 <th>Viernes</th>
                         </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td scope="row">09:00 - 10:00</td>  	 <td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td>
                           </tr>
                           <tr>
                             <td scope="row">10:00 - 11:00</td>   	 <td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td>
                           </tr>
                           <tr>
                             <td scope="row">11:00 - 12:00</td>  	 <td>-</td> 			<td>-</td> 			<td>-</td>			<td>-</td> 			<td>-</td>
                           </tr>
                           <tr>
                             <td scope="row">12:00 - 13:00</td> 	 <td>-</td>				<td>-</td>			<td>-</td> 			<td>-</td> 			<td>-</td>
                           </tr>
                           <tr>
                             <td scope="row">13:00 - 14:00</td>   	 <td>-</td>				<td>-</td> 			<td>-</td>			<td>-</td> 			<td>-</td>
                           </tr>
                           <tr>
                             <td scope="row">14:00 - 15:00</td>  	 <td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td>
                           </tr>
                           <tr>
                             <td scope="row">15:00 - 16:00</td>   	 <td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td>
                           </tr>
                           <tr>
                             <td scope="row">16:00 - 17:00</td>   	 <td>-</td>				<td>-</td>	 		<td>-</td> 			<td>-</td> 			<td>-</td>
                           </tr>
                           <tr>
                             <td scope="row">17:00 - 18:00</td>   	 <td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td>
                           </tr>
                           <tr>
                             <td scope="row">18:00 - 19:00</td>  	 <td>-</td>				<td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td> 
                           </tr>
                           <tr>
                             <td scope="row">19:00 - 20:00</td>  	 <td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td>
                           </tr>
                           <tr>
                             <td scope="row">20:00 - 21:00</td>  	 <td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td> 			<td>-</td>
                           </tr>
                         </tbody>
                 </table>
                </div>
          
                <!-- Modal footer -->
                <div class="modal-footer">
    
                  <button type="button" class="btn btn-primary ">Guardar</button>
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                  
                </div>
          
              </div> 
            </div>
          </div>
       </section>
       <!---############################################################-->
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    
  
    <script th:src="@{https://code.jquery.com/jquery-3.3.1.slim.min.js}" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script th:src="@{https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js}"></script>
    <script th:src="@{https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js}" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
   
   
     <script th:src="@{https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js}"></script> 
     <script type="text/javascript" th:src="@{js/estudiante.js}" ></script>
  </body>
</html>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    