<template>
  <div id="app">  
	<nav class="navbar navbar-expand-sm fixed-top">
		<a class="navbar-brand" href="" v-on:click="init">Finir </a>
	<!--	<img src="./assets/logoFinir.png" width="50" height="50"> -->
		<ul class="navbar-nav">
			<li class="nav-item">
				<label class="text text-white font-size: 4px" >Finanzas personales</label>
			</li>
		</ul>
		<ul class="navbar-nav ml-auto">
			<li class="nav-item">
				<a class="nav-link" href="" v-on:click="init">Inicio</a> 
			</li>
			<li class="nav-item">
				<a class="nav-link" href="" v-on:click="log">Ingresar</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="" v-on:click="sign">Registrarse</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="">Contactenos</a>
			</li>
		</ul>
	</nav>

	  <div class="main-component">
      <router-view> </router-view>
    </div>

  </div> 
</template>

<script>
export default {
    name: 'App',
    components: {},
    data: function(){
    },
    
    methods: {
		init: function(){
			this.$router.push({name: "home"})
		},	

		log: function(){
			this.$router.push({name: "login"})
		},

		sign: function(){
			this.$router.push({name: "sign_up"})
		},

    },
}
 </script>

<style>
	/*Importar estilos*/
	@import './assets/css/style.css';
</style>