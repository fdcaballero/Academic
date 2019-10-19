<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">

<head th:replace="layout/base::head('Profesorado','profesor')">

</head>

<body id="page-top">

        
  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
    <ul  th:replace="layout/base::sidebar()" class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"></ul>
  
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

          <!-- Topbar Search -->
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Administrador</span>
                <img class="img-profile rounded-circle" src="#">
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
                <h2 class="m-0 font-weight-bold text-primary">Profesorado</h2>
    
            </div>
               <p><strong>Búsqueda de profesores</strong></p>
            <div>
                <div class="form-group">
                    <input type="name" class="form-control form-control-user"  placeholder="Ingrese nombre...">
                  </div>
                  <div class="form-group">
                    <input type="id" class="form-control form-control-user"  placeholder="Ingrese C.C...">
                  </div>
        </div>
        <div>
            <a href="#" class="btn btn-primary btn-user btn-block">Buscar</a>
            <a href="#" class="btn btn-primary btn-user btn-block">Limpiar</a>
        </div>
  
          <!--DataTables Example-->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Resultado de la búsqueda</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table id = "prof-tabla" class="table" width="100%" cellspacing="0">
                  
                    <tr>
                        <th><button class="btn btn-primary btn-user btn-block" data-toggle="modal" data-target="#myModal">Crear docente</button></th>                    
                        <th><a href="#" class="btn btn-primary btn-user btn-block">Datos personales</a></th>
                        <th><a href="#" class="btn btn-primary btn-user btn-block">Clases</a></th>
                        <th><a href="#" id="Delete" class="btn btn-primary btn-user btn-block">Eliminar profesor</a></th>
                        </th>
                    </tr>
                    <tr>
                      <th>Nombre</th>
                      <th>NIF O C.C.</th>
                      <th>Correo</th>
                      <th>Teléfono</th>
                    </tr>
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
            <span>Copyright &copy; Academic </span>
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
            <span aria-hidden="true">Ã—</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="login.html">Cerrar sesiÃ³n</a>
        </div>
      </div>
    </div>
  </div>
  <!---#######################HORARIO DOCENTE#################################-->
  <!-- The Modal -->
  <div class="modal" id="myModalHorario">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
  
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Nuevo profesor</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
  
        <!-- Modal body -->
        <div class="modal-body">
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
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                   </tr>
                   <tr>
                     <td scope="row">10:00 - 11:00</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                   </tr>
                   <tr>
                     <td scope="row">11:00 - 12:00</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                   </tr>
                   <tr>
                     <td scope="row">12:00 - 13:00</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                   </tr>
                   <tr>
                     <td scope="row">13:00 - 14:00</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                   </tr>
                   <tr>
                      <td scope="row">14:00 - 15:00</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                   </tr>
                   <tr>
                     <td scope="row">15:00 - 16:00</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                   </tr>
                   <tr>
                     <td scope="row">16:00 - 17:00</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                   </tr>
                   <tr>
                     <td scope="row">17:00 - 18:00</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                   </tr>
                   <tr>
                     <td scope="row">18:00 - 19:00</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                   </tr>
                   <tr>
                     <td scope="row">19:00 - 20:00</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                   </tr>
                   <tr>
                     <td scope="row">20:00 - 21:00</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                   </tr>
                 </tbody>
         </table>
        </div>
  
        <!-- Modal footer -->
        <div class="modal-footer">

          <button type="button" class="btn btn-primary ">aceptar</button>
                    
        </div>
  
      </div>
    </div>
  </div>
  <!---#################################################################-->

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

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="js/Docente.js"></script>
  

</body>

</html>
