<template>
    <div id="ini_session">    
<!-- Inicio Ventana modal actualizar/Eliminar -->
<script type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
  <!-- Botón Cerrar ventana modal -->
  <button class="modal-default-button" @click="$emit('close')">X</button>
  <!-- cabecera Cerrar ventana modal -->
          <div class="modal-header">
            <slot name="header">
              Mis Datos
            </slot>
          </div>
  <!-- body Cerrar ventana modal -->
          <div class="modal-body">
            <slot name="body">
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
                        value= {{nombres}}
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
                        value= {{apellidos}}
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
                        value= {{email}}
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
                        value= {{username}}
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
                        value= {{password}}
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
                      />
                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-sm-6">
                          <input
                            type="submit"
                            name="actualizar"
                            id="actualizar"
                            tabindex="4"
                            class="form-control btn btn-register"
                            value="Actualizar"                           
                          />
                        </div>
                        <div class="col-sm-6">
                          <input
                            type="submit"
                            name="eliminar"
                            id="eliminar"
                            tabindex="4"
                            class="form-control btn btn-register"
                            value="Eliminarme"
                            v-on:click="Eliminar(username)"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </slot>
          </div>
<!-- Inicio footer ventana modal -->
          <div class="modal-footer">
            <footer class="page-footer font-small blue pt-4"> 
              <!-- Copyright -->
              <div class="footer-copyright text-center py-3">© 2020 Copyright:<a href="#"> Finir</a>
              </div>
              <!-- Copyright -->
            </footer> 
<!-- Fin footer ventana modal -->                 
          </div>
        </div>
      </div>
    </div>
  </transition>
</script>
<!-- Fin Ventana modal actualizar/Eliminar -------------------------------------->
      <br>
      <br>
      <br>
      <br>
      <br>
<!-- Botón para abrir ventana modal -->      
<button class="btn btn-primary" @click="showModal = true"> 
      <h4 class="text-white text-right ">
        <i class="fas fa-user-cog"></i> Usuario: {{username}} 
      </h4>
</button>
  <!-- usa el componente modal-->
  <modal v-if="showModal" @close="showModal = false" @eliminar="eliminar_usuario">
    <!--
      puedes usar contenido personalizado aquí para sobrescribir
      contenido predeterminado
    -->
    <h3 slot="header">Mis Datos</h3>
  </modal>
      <br>
      <br>
      <br>
<!-- contenedor principal del usuario--------------------------------->
        <div class="container-sm" style="border:0px">
          <div class="row">
              <div class="col-md-12">
                   <div class="panel shadow-lg p-3 mb-5 rounded">
                       <h1 align="center">Bienvenid@ {{nombres}} {{apellidos}}</h1>

                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-12">
                                    <label class="label">Mis finanzas</label>
                                </div>
                            </div>
                            <hr >
                        </div>
                        <!-- Fin cabecera del Panel -->

					<!-- Inicio body del Panel -->
<div class="panel-body">
  <div class="row">
    <div class="col-lg-12">
      <div class="container-fluid">
        <!-- Ingreso de  los items -->
        <section class="form">
          <form action="" class="text-center">
            <div class="row">
              <div class="form-group col-lg-6">
                <input v-model="nombreitem" @keyup.enter="crearItem" type="text" class="form-control" placeholder="Nombre del ítem">
              </div>
              <div class="form-group col-lg-6">
                <input v-model="valor" @keyup.enter="crearItem" type="number" class="form-control" placeholder="Valor del ítem">
              </div>
            </div>
            <div class="row">  
              <div class="form-group col-lg-6">
                <b-form-select v-model="tipo" @keyup.enter="crearItem" :options="options" ></b-form-select>
              </div>
              <div class="form-group col-lg-6">
                <b-form-select v-model="subtipo" @keyup.enter="crearItem">
                  <option disabled value="">Seleccione un subtipo</option>
                  <opcion>Transporte</opcion>
                  <option>Salario</option>
                  <option>Servicios Públicos</option>
                  <opcion>Casa</opcion>
                  <option>Mercado Personal</option>
                  <option>Cuidado Personal</option>
                </b-form-select>
              </div>
            </div>
            <div class="row">  
              <div class="form-group col-lg-4">
                <input v-model="fecha" @keyup.enter="crearItem" type="date" class="form-control" name="fecha" min="2020-12-25" step="1" />
              </div>
            </div> 
              <!-- Botón para añadir -->
              <div class="form-group">
                <input @click="crearItem" type="button" value="Añadir ítem" class="btn btn-success">
              </div>
          </form>
        </section>
        <!-- Tabla donde se muestran los datos -->
        <section class="data">
            <caption>Items</caption>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Subtipo</th>
                        <th scope="col">Fecha</th>
                        <th scope="col"> Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items">
                        <td>{{ item.id }}</td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <!-- Formulario para actualizar -->
                                <input v-model="nombreActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato nombre -->
                                {{ item.nombreitem }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <!-- Formulario para actualizar -->
                                <input v-model="valorActualizar" type="number" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato valor -->
                                {{ item.valor }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <!-- Formulario para actualizar -->
                                <input v-model="tipoActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato tipo -->
                                {{ item.tipo }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <!-- Formulario para actualizar -->
                                <input v-model="subtipoActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato subtipo -->
                                {{ item.subtipo }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <!-- Formulario para actualizar -->
                                <input v-model="fechaActualizar" type="date" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato subtipo -->
                                {{ item.fecha }}
                            </span>
                        </td>
                        <td>
                            <!-- Botón para guardar la información actualizada -->
                            <span v-if="formActualizar && idActualizar == index">
                                <button @click="guardarActualizacion(index)" class="btn btn-success">Guardar</button>
                            </span>
                            <span v-else>
                                <!-- Botón para mostrar el formulario de actualizar -->
                                <button @click="verFormActualizar(index)" class="btn btn-warning">Actualizar</button>
                                <!-- Botón para borrar -->
                                <button @click="borrarItem(index)" class="btn btn-danger">Borrar</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

                          </div>
                      </div>
                    </div>
                  </div>        
                  </div>    
              </div>
          </div>
        </div>          
    </div>
</template>

<script>
    import axios from "axios";
    import Datepicker from 'vuejs-datepicker';

    export default{
        name: "ini_session",
        data: function(){
            return{
                nombres: "",
                apellidos: "",
                fecha_registro: "",
                email: "",
                showModal: false,
                nuevo_username:"",
                Datepicker,
                fecha: '',
            // Input nombre
            nombreitem: '',
            // Input valor
            valor: '',
            // Input tipo
            tipo: null,
             options: [
              { value: null, text: 'Seleccione un tipo' },
              { value: 'Ingreso', text: 'Ingreso' },
              { value: 'Egreso', text: 'Egreso' },
              { value: 'Ahorro', text: 'Ahorro' },
            ],
            // Input subtipo con un comentario
            subtipo: '',

            // Ver o no ver el formulario de actualizar
            formActualizar: false,
            // La posición de tu lista donde se seleccionar para actualizar 
            idActualizar: -1,
            // Input nombre dentro del formulario de actualizar
            nombreActualizar: '',
            // Input valor dentro del formulario de actualizar
            valorActualizar: '',
            // Lista de items
            items: [] 
            }
        },
        created: function(){
            this.nombres = this.$route.params.nombres
            this.apellidos = this.$route.params.apellidos
            this.username = this.$route.params.username
            this.password = this.$route.params.password
            let self = this
        },
        methods:{
          eliminar_usuario: function(){
            //axios.post("https://finanzaspersonales3.herokuapp.com/user/delete/", datos)
            axios.post("http://127.0.0.1:8000/user/delete/", datos)
                .then((result) => {
                      alert(result.data)
                      this.$router.push({name: "Login"})
                })
                .catch((error) =>{
                  console.log(error)
                })
          },
          crearItem: function () {
                // Añadimos a nuestra lista
                this.items.push({
                    id: + new Date(),
                    nombreitem: this.nombreitem,
                    valor: this.valor,
                    tipo: this.tipo,
                    subtipo: this.subtipo
                });
                // Vaciamos el formulario de añadir
                this.nombreitem = '';
                this.valor = '';
                this.tipo = '';
                this.subtipo = '';
                this.fecha = '';
            },
            verFormActualizar: function (item_id) {
                // Antes de mostrar el formulario de actualizar, rellenamos sus campos
                this.idActualizar = item_id;
                this.nombreActualizar = this.items[item_id].nombreitem;
                this.valorActualizar = this.items[item_id].valor;
                this.tipoActualizar = this.items[item_id].tipo;
                this.subtipoActualizar = this.items[item_id].subtipo;
                this.fechaActualizar = this.items[item_id].fecha;
                // Mostramos el formulario
                this.formActualizar = true;
            },
            borrarItem: function (item_id) {
                // Borramos de la lista
                this.items.splice(item_id, 1);
            },
            guardarActualizacion: function (item_id) {
                // Ocultamos nuestro formulario de actualizar
                this.formActualizar = false;
                // Actualizamos los datos
                this.items[item_id].nombreitem = this.nombreActualizar;
                this.items[item_id].valor = this.valorActualizar;
                this.items[item_id].tipo = this.tipoActualizar;
                this.items[item_id].subtipo = this.subtipoActualizar;
                this.items[item_id].fecha = this.fechaActualizar;
            },
        }
    }

$(function() {
	$("#finance-form").delay(100).fadeIn(100);

}); 

</script>

<style>

</style>
