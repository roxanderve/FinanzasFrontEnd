<template>
    <div id="sign_up">
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
                        <label class="label">Registrarse</label>
                      </div>
                    </div>

                    <hr >

                  </div>
				    <!-- Fin cabecera del Panel -->
					<!-- Inicio body del Panel -->
                  <div class="panel-body">
    <div class="row">
      <div class="col-lg-12">
        <!-- Formulario Registro-->
        <form
          id="register-form"
          action="#"
          method="put"
          role="form"
          style="display: block"
        >
          <div class="form-group">
            <input
              type="text"
              name="nombres"
              id="nombres"
              tabindex="1"
              class="form-control"
              placeholder="Nombres"
              v-model="nombres"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="apellidos"
              id="apellidos"
              tabindex="1"
              class="form-control"
              placeholder="Apellidos"
              v-model="apellidos"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="email"
              id="email"
              tabindex="1"
              class="form-control"
              placeholder="E-mail"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="username"
              id="username"
              tabindex="1"
              class="form-control"
              placeholder="Usuario"
              v-model="username"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="password"
              id="password"
              tabindex="2"
              class="form-control"
              placeholder="Contraseña"
              v-model="password"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              tabindex="2"
              class="form-control"
              placeholder="Confirmar contraseña"
              v-model="confirm_password"
            />
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <input
                  v-on:click="addUser"
                  type="submit"
                  name="register-submit"
                  id="register-submit"
                  tabindex="4"
                  class="form-control btn btn-register"
                  value="Registrarme ahora"
                  
                />
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
export default {
  name: "Sign_up",
  data: function () {
    return {
      nombres: "",
      apellidos: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    showAlert(Response) {
      // Use sweetalert2
      if (Response == true) {
            this.$swal("Registro completado satisfactoriamente");
          } else
          {
            this.$swal("No se pudo crear el usuario");
          }

    },

    addUser: function () {
      var datosJson = {
        nombres: this.nombres,
        apellidos: this.apellidos,
        email: this.email,
        username: this.username,
        password: this.password,
        active: true,
        fecha_registro: "2020-12-16T22:39:30.817Z",
      };
      if (
        this.nombres != "" &&
        this.apellidos != "" &&
        this.email != "" &&
        this.username != "" &&
        this.password != "" &&
        this.password == this.confirm_password
      ){
        //alert("Peticion enviada")
        axios
          //.put("https://finanzaspersonales3.herokuapp.com/user/create/", datosJson)
          .put("http://127.0.0.1:8000/user/create/", datosJson)
          .then((Response) => {
            //alert("Registro completado satisfactoriamente"); 
            this.showAlert(Response); 
          })
          .catch((err) => {
            console.log("error en la creacion");
          });
      }else{
          //alert("No se pudo crear el usuario")
          this.showAlert(); 
      }
    },
  },
};

  // login y registro
  $(function() {
		$("#register-form").delay(100).fadeIn(100);

});
</script>
<style>
.label{
	color: #59B2E0;
	font-weight: bold;
	font-size: 20px;	
}
</style>
