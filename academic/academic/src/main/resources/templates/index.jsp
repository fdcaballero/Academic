<!doctype html>
<html lang="en">
  <head>
    <title>Login</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" type="text/css" href="css/login-styles.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/login.css" > 
<!--    <link rel="stylesheet" href="../css/login-styles.css" > -->
  <body>
    
    <section class = "container text-center">

      <section class="card-body ms-flexbox px-md-5" >
         <div class = "row">
           <div class = "mx-auto">
              <div class= "p-5 mx-auto">   
                 <div class="card px-md-5 ">
                  <div class="card-header">
                    <h3>Iniciar sesion</h3>
                
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="input-group form-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="fas fa-user"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Usuario">
                        
                      </div>
                      <div class="input-group form-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                        <input type="password" class="form-control" placeholder="Contraseña">
                      </div>
                      <div class="row align-items-center remember">
                        <input type="checkbox">Recordar
                      </div>
                      <div class="form-group">      
                       <button type="submit" class="btn btn-success " name = "submit">Iniciar sesion</button>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer">
                    <div class="d-flex justify-content-center links">
                      No tienes una cuenta aún?<a href="@{/registro}">Registrarse</a>
                    </div>
                  </div>
                </div>
               </div>
             </div>
          </div>
      </section>  
    </section>

    <footer id="sticky-footer" class="py-4 text-white-0">
       <div class="container text-center">
           <small>Copyright &copy; Academic</small>
       </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>