<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Clases</title>

  <!-- Custom fonts for this template -->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/sb-admin-2.min.css" rel="stylesheet">

  <!-- Custom styles for this page -->
  <link href="vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

</head>

<body id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" th:href="@{/inicio}">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">Academic</div>
        </a>
  
        <!-- Divider -->
        <hr class="sidebar-divider my-0">
  
        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
          <a class="nav-link" th:href="@{/inicio}">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Inicio</span></a>
        </li>
  
        <!-- Nav Item - Utilities Collapse Menu -->
        <li class="nav-item">
          <a class="nav-link" th:href="@{/docente}">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Profesores</span>
          </a>
        </li>
        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <a class="nav-link" th:href="@{estudiante}" >
            <i class="fas fa-fw fa-folder"></i>
            <span>Alumnos</span>
          </a>
          <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar"></div>
        </li>
  
        <!-- Nav Item - Charts -->
        <li class="nav-item">
          <a class="nav-link" th:href="@{/clase}">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Clases</span></a>
        </li>
  
        <!-- Nav Item - Tables -->
        <li class="nav-item">
          <a class="nav-link" th:href="@{/mantenimiento/asignatura}">
            <i class="fas fa-fw fa-table"></i>
            <span>Mantenimiento</span></a>
        </li>
  
        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">
  
        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
  
      </ul>
      <!-- End of Sidebar -->
  
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

          

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
              <!-- Dropdown - Messages -->
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>


            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Administrador</span>
                <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60">
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>

          </ul>

        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">

             <!-- Page Heading -->
             <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h2 class="m-0 font-weight-bold text-primary">Clases</h2>    
            </div>
               <p><strong> Búsqueda de clases</strong></p>
            <div>
                <div class="form-group">
                    <select class="form-control">
                        <option>Seleccione curso...</option>
                        <option>1</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                  </div>
                  <div class="form-group">
                    <select class="form-control">
                        <option>Seleccione Asignatura...</option>
                        <option>Programación web</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                  </div>
                  <div class="form-group">
                    <select id = "MySelect" class="form-control">
                        <option>Seleccione Profesor...</option>
                      </select>
                  </div>
        </div>
        <div>
            <a href="#" class="btn btn-primary btn-user btn-block">Buscar</a>
            <a href="#" class="btn btn-primary btn-user btn-block">Limpiar</a>
        </div>

  
          <!-- DataTables Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Resultado de la búsqueda</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table id = "Tabla-clase"class="table" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                        <th><button  type = "button" class="btn btn-primary btn-user btn-block" data-toggle="modal" data-target="#myModal">Nueva clase</button></th>
                        <th><a href="#" class="btn btn-primary btn-user btn-block">Editar clase</a></th>
                        <th><button type = "button" class="btn btn-primary btn-user btn-block" data-toggle="modal" data-target="#ModalAlumnos">Alumnos</button></th>
                        <th><a href="#" class="btn btn-primary btn-user btn-block">Eliminar clase</a></th>
                        </th>
                    </tr>
                    <tr>
                      <th>Asignatura</th>
                      <th>Curso</th>
                      <th>Profesor</th>
                      <th>Horario</th>
                      <th>Tarifa</th> 
                      
                    </tr>
                  </thead>
                  <tbody>
    
                    <tr>
                      <td>------</td>
                      <td>Integration Specialist</td>
                      <td>Tokyo</td>
                      <td>55</td>                      
                    </tr>       
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
        <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Academic 2019</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="login.html">Cerrar sesión</a>
        </div>
      </div>
    </div>
  </div>
<section>
      <!-- The ModalAlumnos -->
      <div class="modal" id="ModalAlumnos">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">Nueva clase</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <!-- Modal body -->
              <div class="modal-body">
                
                  <h5>Alumnos</h5>
                  <select multiple class="form-control"> 
                          <h1>Nombre</h1>                                    
                          <option>
                             Fredy Caballero   
                          </option>
                          <option>                
                             Andres Navarro
                        </option> 
                       </tbody>
              </select>
      </section>
    <!-- The Mymodal##################################################################### -->
    <div class="modal" id="myModal">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">Nueva clase</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                  
                    <h5>Nueva clase</h5>
                    <section class="form-group">
                    <label for="apellido2">Curso: </label>
                    <input  type="text" name="Curso" id="curso"  class="form-control">

                      <label for="asignatura">* Asignatura</label>
                        <input id="asignatura"> indique una asignatura...</input>
                   

                      <label for="profesor">* Profesor</label>
                               <div class="form-group">
                    <select id = "Lista-Profesor" class="form-control">
                        <option>Seleccione Profesor...</option>
                      </select>
                  </div>
                      <label for="hora">* Hora </label>
                        <select id = "clase_horasemanal" class="form-control">
                        <option>Seleccione hora...</option>
                        <option>09:00 - 10:00</option>
                        <option>10:00 - 11:00</option>
                        <option>11:00 - 12:00</option>
                        <option>12:00 - 13:00</option>
                        <option>13:00 - 14:00</option>
                        <option>14:00 - 15:00</option>
                        <option>15:00 - 16:00</option>
                        <option>16:00 - 17:00</option>
                        <option>18:00 - 19:00</option>
                        <option>19:00 - 20:00</option>
                        <option>20:00 - 21:00</option>
                      </select>
                      
                    </section>
                 <table class="table table-striped table-inverse table-bordered text-center">
                     <thead class="thead-inverse">
                         <h5>Horario</h5>
                         <tr>
                             <th>Hora</th>
                             <th>Lunes</th>
                             <th>Martes</th>
                             <th>Miercoles</th>
                             <th>Jueves</th>
                             <th>Viernes</th>
                         </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td scope="row">09:00 - 10:00</td>
                             <td id = Lunes><a href='#' class='agregar button'>-</a></td>
                             <td id = Martes><a href='#' class='agregar button'>-</a></td>
                             <td id = Miercoles><a href='#' class='agregar button'>-</a></td>
                             <td id = Jueves><a href='#' class='agregar button'>-</a></td>
                             <td id = Viernes><a href='#' class='agregar button'>-</a></td>
                           </tr>
                           <tr>
                             <td scope="row">10:00 - 11:00</td>
                             <td id = Lunes><a href='#' class='agregar button'>-</a></td>
                             <td id = Martes><a href='#' class='agregar button'>-</a></td>
                             <td id = Miercoles><a href='#' class='agregar button'>-</a></td>
                             <td id = Jueves><a href='#' class='agregar button'>-</a></td>
                             <td id = Viernes><a href='#' class='agregar button'>-</a></td>
                           </tr>
                           <tr>
                             <td scope="row">11:00 - 12:00</td>
                             <td id = Lunes><a href='#' class='agregar button'>-</a></td>
                             <td id = Martes><a href='#' class='agregar button'>-</a></td>
                             <td id = Miercoles><a href='#' class='agregar button'>-</a></td>
                             <td id = Jueves><a href='#' class='agregar button'>-</a></td>
                             <td id = Viernes><a href='#' class='agregar button'>-</a></td>
                           </tr>
                           <tr>
                             <td scope="row">12:00 - 13:00</td>
                             <td id = Lunes><a href='#' class='agregar button'>-</a></td>
                             <td id = Martes><a href='#' class='agregar button'>-</a></td>
                             <td id = Miercoles><a href='#' class='agregar button'>-</a></td>
                             <td id = Jueves><a href='#' class='agregar button'>-</a></td>
                             <td id = Viernes><a href='#' class='agregar button'>-</a></td>
                           </tr>
                           <tr>
                             <td scope="row">13:00 - 14:00</td>
                             <td id = Lunes><a href='#' class='agregar button'>-</a></td>
                             <td id = Martes><a href='#' class='agregar button'>-</a></td>
                             <td id = Miercoles><a href='#' class='agregar button'>-</a></td>
                             <td id = Jueves><a href='#' class='agregar button'>-</a></td>
                             <td id = Viernes><a href='#' class='agregar button'>-</a></td>
                           </tr>
                           <tr>
                              <td scope="row">14:00 - 15:00</td>
                             <td id = Lunes><a href='#' class='agregar button'>-</a></td>
                             <td id = Martes><a href='#' class='agregar button'>-</a></td>
                             <td id = Miercoles><a href='#' class='agregar button'>-</a></td>
                             <td id = Jueves><a href='#' class='agregar button'>-</a></td>
                             <td id = Viernes><a href='#' class='agregar button'>-</a></td>
                           </tr>
                           <tr>
                             <td scope="row">15:00 - 16:00</td>
                             <td id = Lunes><a href='#' class='agregar button'>-</a></td>
                             <td id = Martes><a href='#' class='agregar button'>-</a></td>
                             <td id = Miercoles><a href='#' class='agregar button'>-</a></td>
                             <td id = Jueves><a href='#' class='agregar button'>-</a></td>
                             <td id = Viernes><a href='#' class='agregar button'>-</a></td>
                           </tr>
                           <tr>
                             <td scope="row">16:00 - 17:00</td>
                             <td id = Lunes><a href='#' class='agregar button'>-</a></td>
                             <td id = Martes><a href='#' class='agregar button'>-</a></td>
                             <td id = Miercoles><a href='#' class='agregar button'>-</a></td>
                             <td id = Jueves><a href='#' class='agregar button'>-</a></td>
                             <td id = Viernes><a href='#' class='agregar button'>-</a></td>
                           </tr>
                           <tr>
                             <td scope="row">17:00 - 18:00</td>
                             <td id = Lunes><a href='#' class='agregar button'>-</a></td>
                             <td id = Martes><a href='#' class='agregar button'>-</a></td>
                             <td id = Miercoles><a href='#' class='agregar button'>-</a></td>
                             <td id = Jueves><a href='#' class='agregar button'>-</a></td>
                             <td id = Viernes><a href='#' class='agregar button'>-</a></td>
                           </tr>
                           <tr>
                             <td scope="row">18:00 - 19:00</td>
                             <td id = Lunes><a href='#' class='agregar button'>-</a></td>
                             <td id = Martes><a href='#' class='agregar button'>-</a></td>
                             <td id = Miercoles><a href='#' class='agregar button'>-</a></td>
                             <td id = Jueves><a href='#' class='agregar button'>-</a></td>
                             <td id = Viernes><a href='#' class='agregar button'>-</a></td>
                           </tr>
                           <tr>
                             <td scope="row">19:00 - 20:00</td>
                             <td id = Lunes><a href='#' class='agregar button'>-</a></td>
                             <td id = Martes><a href='#' class='agregar button'>-</a></td>
                             <td id = Miercoles><a href='#' class='agregar button'>-</a></td>
                             <td id = Jueves><a href='#' class='agregar button'>-</a></td>
                             <td id = Viernes><a href='#' class='agregar button'>-</a></td>
                           </tr>
                           <tr>
                             <td scope="row">20:00 - 21:00</td>
                             <td id = Lunes><a href='#' class='agregar button'>-</a></td>
                             <td id = Martes><a href='#' class='agregar button'>-</a></td>
                             <td id = Miercoles><a href='#' class='agregar button'>-</a></td>
                             <td id = Jueves><a href='#' class='agregar button'>-</a></td>
                             <td id = Viernes><a href='#' class='agregar button'>-</a></td>
                           </tr>
                         </tbody>
                 </table>
                </div>
          
                <!-- Modal footer -->
                <div class="modal-footer">
    
                  <button id = "crear" type="button" class="btn btn-primary" >crear</button>
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                  
                </div>
          
              </div>
            </div>
          </div>
       </section>
    <!--End modal##############################################################-->    

  <!-- Bootstrap core JavaScript-->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="js/sb-admin-2.min.js"></script>

  <!-- Page level plugins -->
  <script src="vendor/datatables/jquery.dataTables.min.js"></script>
  <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>

  <!-- Page level custom scripts -->
  <script src="js/demo/datatables-demo.js"></script>
  
  <script type="text/javascript" src="js/clases.js"></script> 

</body>

</html>
