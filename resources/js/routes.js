import Welcome from './components/WelcomeComponent.vue';
import Create from './components/CreateComponent.vue';
import Edit from './components/EditComponent.vue';
import Login from './components/auth/LoginComponent.vue';
import Register from './components/auth/RegisterComponent.vue';

export default {
    mode: 'history',
    base: '/',
    fallback: true,
    routes:[
        {
            path: '/',
            component: Welcome,
            name: 'welcome',
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: { guest: true }
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
            meta: { guest: true }
        },
        {
            path: '/create',
            component: Create,
            meta: { requiresAuth: true }
        },
        {
            name: 'edit',
            path: '/edit/:id',
            component: Edit,
            meta: { requiresAuth: true }
        }
    ]
}
