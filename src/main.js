// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
//import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);

Vue.use(vueRouter)

Vue.use(BootstrapVue)

Vue.config.productionTip = false
new Vue({
    router,
    el: '#app',
    components: { App },//componente raiz
    template: '<App/>'
})

Vue.component('modal', {
    template: '#modal-template'
  })
