import vueRouter from 'vue-router'
import Home from './components/Home' 
import Login from './components/Login'
import Sign_up from './components/Sign_up'
import Ini_session from './components/Ini_session'
import Contact from './components/Contact'

import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
                
        {
            path: '/', 
            name: "home", 
            component: Home
        },
    
        {
            path:'/login',
            name: "login",
            component: Login
        },

        {
            path:'/sign_up',
            name: "sign_up",
            component: Sign_up
        },

        {
            path: '/ini_session',
            name: "ini_session",
            component: Ini_session
        },
        {
            path: '/contact',
            name: "contact",
            component: Contact
        },
    ]
})     
export default router