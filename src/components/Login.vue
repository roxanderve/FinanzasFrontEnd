<template>
    <div id="login">

      <br>
      <br>
      <div class="container-sm" style="border:0px">
          <div class="row">
              <div class="col-md-6 col-md-offset-3">
				<!-- Inicio Panel -->  
                <div class="panel panel-login shadow-lg p-3 mb-5 rounded">
					<!-- Logo e icono usuario -->
					<div class="row">
						<div class="col-md-6">
							<label class="text"> Finanzas Personales</label>

						</div>
						<div class="col-md-6">
							<label class="label" type="text"> 
								<i class='fas fa-user-alt' style='font-size: 48px; color:#59B2E0'></i>
							</label>
						</div>	  	  
					</div>
					<!-- Fin -->
						<hr style="width:100%; text-align:left; margin-left:0">
					<!-- Inicio cabecera del Panel -->
                  <div class="panel-heading">
                    <div class="row">
                      <div class="col-xs-6 col-md-offset-3">
                        <label class="label">Iniciar Sesión</label>
                      </div>
                    </div>

                    <hr >

                  </div>
				    <!-- Fin cabecera del Panel -->
					<!-- Inicio body del Panel -->
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-lg-12">
						  <!-- Formulario Ingreso-->
                        <form id="login-form" action="#" method="post" role="form" style="display: block;" v-on:submit.prevent="ini_session">
                          <div class="form-group">
                            <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Usuario" value="">
                          </div>
                          <div class="form-group">
                            <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Contraseña">
                          </div>
                          <div class="form-group text-center">
                            <input type="checkbox" tabindex="3" class="" name="remember" id="remember">
                            <label for="remember"> Recordarme</label>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col-sm-6 col-sm-offset-3">
                                <input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Ingresar">
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="text-center">
                                  <a href="#" tabindex="5" class="forgot-password">¿Se te olvidó tu contraseña?</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
					<!-- fin body del Panel -->
                  <footer class="page-footer font-small blue pt-4"> 
                      <!-- Copyright -->
                    <div class="footer-copyright text-center py-3">© 2020 Copyright:<a href="#"> Finir</a>
                    </div>
                    <!-- Copyright -->
                  </footer> 

                </div>
            </div>
          </div>
      </div>

    </div>

    
</template>

<script>
import axios from "axios";
    export default{
        name: "Login",// tener cuidado si es con mayuscula o minuscula
        methods: {
            ini_session: function(){
                var datos={
                  username : document.getElementById("username").value,
                  password : document.getElementById("password").value
                } 
                //axios.post("https://finanzaspersonales3.herokuapp.com/user/auth/", datos)
                axios.post("http://127.0.0.1:8000/user/auth/", datos)
                .then((result) => {
                      let nombres = result.data.nombres
                      let apellidos = result.data.apellidos
                      let username = document.getElementById("username").value
                      let password = document.getElementById("password").value
                      this.$router.push({name: "ini_session", params:{nombres: nombres, apellidos: apellidos, username: username, password: password}})
                })
                .catch((error) =>{
                  console.log(error)
                  alert(error.response.data.detail)
                })
            },
        }
    }


  // login
$(function() {
		$("#login-form").delay(100).fadeIn(100);
});
</script>

<style>
.label{
	color: #59B2E0;
	font-weight: bold;
	font-size: 20px;	
}
</style>