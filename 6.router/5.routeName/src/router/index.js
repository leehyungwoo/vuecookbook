import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './home'
import Menu from './menu'
 

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/menu/:id',
            component: Menu,
            name: 'menu'
        } 
    ]
})
 