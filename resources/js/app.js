require('./bootstrap');
window.Vue = require('vue').default;
import VueRouter from 'vue-router'
import Toaster from 'v-toaster'
import Swal from 'sweetalert2'
import 'v-toaster/dist/v-toaster.css'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter(routes)

Vue.use(Toaster, { timeout: 5000 })

window.Swal = Swal

function loggedIn() {
    return localStorage.getItem('token')
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!loggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if (loggedIn()) {
            next({
                path: '/',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

const app = new Vue({
    el: '#app',
    router,
});
