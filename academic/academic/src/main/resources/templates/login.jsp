<!doctype html>
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    <title>Login</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" th:href="css/login.css" >
  <body>
    
    <header> <!-- Nav tabs -->
    <nav class="nav ">
      <a class="nav-link active bg-primary text-white" href="#">Volver a inicio</a>
      <a class="nav-link disabled" >Login</a>
      
    </nav>
    
    
    </header>
    <section class = "container ">
      <section class="card-body ms-flexbox">
          <h2>identificacion</h2>
          <section class="justify-content-center align-items-center"> 
            <form action="" class="form" method="POST">
              <div class="form-group">
                <label for="usuario">Usuario :</label>
                <input type="text" name="usuario" placeholder="Usuario" class="form-control">
              </div>
              <div class="form-group ">
                <label for="clave"> Clave :</label>
                <input type="password" name="clave" id="" placeholder="clave" class="form-control">
              </div>
              <div class="form-group  ">
                  <button type="submit" class="btn btn-primary btn-lg justify-content-center " name = "submit">iniciar sesion</button>
                 
              </div>
            </form>
          </section>
      </section>  
      
      
    </section>
    <footer class="footer">
      <div class = " text-white text-center"> sofhistas </div>
    </footer>


    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>