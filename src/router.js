import vueRouter from 'vue-router'
import User from './components/user'
import gerencia from './components/gerencia'
import indicadores from './components/indicadores'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/user/info',
            name: "User",
            component: User
        },
        {
            path: '/gerencias/gerencia1',
            name: "gerencia",
            component: gerencia
        },
        {
            path: '/gerencias/gerencia1/indicadores',
            name: "indicadores",
            component: indicadores
        },
    ]
})
export default router   