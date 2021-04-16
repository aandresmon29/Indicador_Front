import vueRouter from 'vue-router'
import User from './components/user'
import gerencia from './components/gerencia'
import indicadores from './components/indicadores'
import detallea from './components/detallea'
import detalleb from './components/detalleb'
import detallec from './components/detallec'
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
            path: '/gerencias',
            name: "gerencia",
            component: gerencia
        },
        {
            path: '/gerencias/gerencia1/indicadores',
            name: "indicadores",
            component: indicadores
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador1',
            name: "detallea",
            component: detallea
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador2',
            name: "detalleb",
            component: detalleb
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador3',
            name: "detallec",
            component: detallec
        },
    ]
})
export default router   