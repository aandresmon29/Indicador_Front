import vueRouter from 'vue-router'
import User from './components/user'
import gerencia from './components/gerencia'
import indicadores from './components/indicadores'
import detallea from './components/detallea'
import detalleb from './components/detalleb'
import detallec from './components/detallec'
import detalled from './components/detalled'
import detallee from './components/detallee'
import detallef from './components/detallef'
import detalleg from './components/detalleg'
import detalleh from './components/detalleh'
import detallei from './components/detallei'
import detallej from './components/detallej'
import detallek from './components/detallek'
import detallel from './components/detallel'
import detallem from './components/detallem'
import detallen from './components/detallen'
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
        {
            path: '/gerencias/gerencia1/indicadores/indicador4',
            name: "detalled",
            component: detalled
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador5',
            name: "detallee",
            component: detallee
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador6',
            name: "detallef",
            component: detallef
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador7',
            name: "detalleg",
            component: detalleg
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador8',
            name: "detalleh",
            component: detalleh
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador9',
            name: "detallei",
            component: detallei
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador10',
            name: "detallej",
            component: detallej
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador11',
            name: "detallek",
            component: detallek
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador12',
            name: "detallel",
            component: detallel
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador13',
            name: "detallem",
            component: detallem
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador14',
            name: "detallen",
            component: detallen
        },
    ]
})
export default router   