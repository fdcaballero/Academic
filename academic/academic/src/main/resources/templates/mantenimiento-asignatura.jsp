<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org"s>

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Mantenimiento de asignaturas</title>

  <!-- Custom fonts for this template -->
  <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
  <link rel="stylesheet" href="../css/styles.css" type="text/css">
  <!-- Custom styles for this template -->
  <link href="../css/sb-admin-2.min.css" rel="stylesheet">

  <!-- Custom styles for this page -->
  <link href="../vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">


</head>

<body id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">Academic</div>
        </a>
  
        <!-- Divider -->
        <hr class="sidebar-divider my-0">
  
        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
          <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Inicio</span></a>
        </li>
  
        <!-- Nav Item - Utilities Collapse Menu -->
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Profesores</span>
          </a>
        </li>
        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <a class="nav-link" href="#" >
            <i class="fas fa-fw fa-folder"></i>
            <span>Alumnos</span>
          </a>
          <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar"></div>
        </li>
  
        <!-- Nav Item - Charts -->
        <li class="nav-item">
          <a class="nav-link" href="charts.html">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Clases</span></a>
        </li>
  
        <!-- Nav Item - Tables -->
        <li class="nav-item">
          <a class="nav-link" href="tables.html">
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
                <h2 class="m-0 font-weight-bold text-primary">Mantenimiento de asignaturas</h2>
    
            </div>
               <p><strong> Búsqueda de asignaturas</strong></p>
            <div>
                <div class="form-group">
                    <input type="name" class="form-control form-control-user"  placeholder="Ingrese nombre...">
                  </div>
                  <div class="form-group">            
                    <select id = "curso" class="form-control">
                        <option id = "c">Seleccione curso...</option>
                      
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
                <table class="table" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                       <th><a href="#" class="btn btn-primary btn-user btn-block" data-toggle="modal" data-target="#myModal">Nueva asignatura</a></th>
                       <th><a href="#" class="btn btn-primary btn-user btn-block"data-toggle="modal" data-target="#EditarModal">Editar asignatura</a></th>
                       <th><a href="#" class="btn btn-primary btn-user btn-block">Eliminar asignatura</a></th>
                       </th>
                    </tr>
                    <tr>
                      <th>Nombre</th>
                      <th>Curso</th>
                    </tr>
                  </thead>
                  <tbody>
    
                    <tr>
                      <td>Level one</td>
                      <td>primera etapa</td>
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
<!-- ############################################################################################################### -->     
      <!-- The Modal -->
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header bg-primary text-white">
              <h4 class="modal-title" id= "NuevoDoc">Nueva asignatura</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
  
            <!-- Modal body -->
            <div class="modal-body">
              <form action=""  class="form">
                <section class="form-group">
                    <label for="nombre">* Nombre </label>
                    <input id = "nombre" type="text" name="nombre"   class="form-control" required />

                    <label for="titulacion">* Curso </label>
                    <select id = "Lista_asignatura" class="form-control">
                        <option>Seleccione curso...</option></select>
                </section>

              </form>
            </div>
           
            <!-- Modal footer -->
         <!-- Modal footer -->
            <div class="modal-footer">
              <input id ="create" value = "Crear" type="button" class="btn btn-primary" data-dismiss="modal" />
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
<!-- ##################################################################################################### -->
      <!-- The Modal -->
      <div class="modal" id="EditarModal">
        <div class="modal-dialog">
          <div class="modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header bg-primary text-white">
              <h4 class="modal-title" id= "NuevoDoc">Editar curso</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
  
            <!-- Modal body -->
            <div class="modal-body">
              <form action=""  class="form">
                <section class="form-group">
                    <label for="nombre">* Nombre </label>
                    <input id = "nombre" type="text" name="nombre"   class="form-control" required />

                    <label for="titulacion">* Curso </label>
                    <select id = "Lista_asignatura" class="form-control">
                        <option>Seleccione curso...</option></select>
                </section>
                </section>

              </form>
            </div>
           
            <!-- Modal footer -->
         <!-- Modal footer -->
            <div class="modal-footer">
              <input id ="" value = "Editar" type="button" class="btn btn-primary" data-dismiss="modal" />
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
            </div>
          </div>
        </div>
      </div>    
      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2019</span>
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


  <!-- Bootstrap core JavaScript-->
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="../js/sb-admin-2.min.js"></script>

  <!-- Page level plugins -->
  <script src="../vendor/datatables/jquery.dataTables.min.js"></script>
  <script src="../vendor/datatables/dataTables.bootstrap4.min.js"></script>

   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> 
  
 <!--  <script type="text/javascript" src="../js/mantenimiento-curso.js"></script> -->
  
</body>

</html>
