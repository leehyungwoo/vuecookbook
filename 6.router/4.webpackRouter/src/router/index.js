import Vue from 'vue'
import VueRouter from 'vue-router'  
import Home from '../components/home'
import Contact from '../components/contact'
import About from '../components/about'
 
Vue.use(VueRouter)
 
export default  new VueRouter({
    routes: [
        {
            path: '/',
            name:'home',
            component: Home
        },
        {
            path: '/contact',
            name:'contact',
            component: Contact
        },
        {
            path: '/about',
            name:'about',
            component: About
        }
    ]
})