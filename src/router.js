import vueRouter from 'vue-router'
import User from './components/user'
import gerencia from './components/gerencia'
import indicadoresa from './components/indicadoresa'
import indicadoresb from './components/indicadoresb'
import indicadoresc from './components/indicadoresc'
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
import detalleo from './components/detalleo'
import detallep from './components/detallep'
import detalleba from './components/detalleba'
import detallebb from './components/detallebb'
import detallebc from './components/detallebc'
import detallebd from './components/detallebd'
import detallebe from './components/detallebe'
import detallebf from './components/detallebf'
import detallebg from './components/detallebg'
import detalleca from './components/detalleca'
import detallecb from './components/detallecb'
import detallecc from './components/detallecc'
import detallecd from './components/detallecd'
import detallece from './components/detallece'
import detallecf from './components/detallecf'
import detallecg from './components/detallecg'
import detallech from './components/detallech'
import detalleci from './components/detalleci'
import detallecj from './components/detallecj'
import detalleck from './components/detalleck'
import detallecl from './components/detallecl'
import detallecm from './components/detallecm'
import detallecn from './components/detallecn'
import detalleco from './components/detalleco'
import detallecp from './components/detallecp'
import detallecq from './components/detallecq'
import detallecr from './components/detallecr'
import detallecs from './components/detallecs'
import detallecu from './components/detallecu'
import detallecv from './components/detallecv'
import detallecw from './components/detallecw'
import detallecx from './components/detallecx'
import detallecy from './components/detallecy'
import detallecz from './components/detallecz'
import detallecaa from './components/detallecaa'
import detallecab from './components/detallecab'
import detallecac from './components/detallecac'
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
            name: "indicadoresa",
            component: indicadoresa
        },
        {
            path: '/gerencias/gerencia2/indicadores',
            name: "indicadoresb",
            component: indicadoresb
        },
        {
            path: '/gerencias/gerencia3/indicadores',
            name: "indicadoresc",
            component: indicadoresc
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
        {
            path: '/gerencias/gerencia1/indicadores/indicador15',
            name: "detalleo",
            component: detalleo
        },
        {
            path: '/gerencias/gerencia1/indicadores/indicador16',
            name: "detallep",
            component: detallep
        },
        {
            path: '/gerencias/gerencia2/indicadoresb/indicador1',
            name: "detalleba",
            component: detalleba
        },
        {
            path: '/gerencias/gerencia2/indicadoresb/indicador2',
            name: "detallebb",
            component: detallebb
        },
        {
            path: '/gerencias/gerencia2/indicadores/indicador3',
            name: "detallebc",
            component: detallebc
        },
        {
            path: '/gerencias/gerencia2/indicadores/indicador4',
            name: "detallebd",
            component: detallebd
        },
        {
            path: '/gerencias/gerencia2/indicadores/indicador5',
            name: "detallebe",
            component: detallebe
        },
        {
            path: '/gerencias/gerencia2/indicadores/indicador6',
            name: "detallebf",
            component: detallebf
        },
        {
            path: '/gerencias/gerencia2/indicadores/indicador7',
            name: "detallebg",
            component: detallebg
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador1',
            name: "detalleca",
            component: detalleca
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador2',
            name: "detallecb",
            component: detallecb
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador3',
            name: "detallecc",
            component: detallecc
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador4',
            name: "detallecd",
            component: detallecd
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador5',
            name: "detallece",
            component: detallece
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador6',
            name: "detallecf",
            component: detallecf
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador7',
            name: "detallecg",
            component: detallecg
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador8',
            name: "detallech",
            component: detallech
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador9',
            name: "detalleci",
            component: detalleci
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador10',
            name: "detallecj",
            component: detallecj
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador11',
            name: "detalleck",
            component: detalleck
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador12',
            name: "detallecl",
            component: detallecl
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador13',
            name: "detallecm",
            component: detallecm
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador14',
            name: "detallecn",
            component: detallecn
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador15',
            name: "detalleco",
            component: detalleco
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador16',
            name: "detallecp",
            component: detallecp
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador17',
            name: "detallecq",
            component: detallecq
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador18',
            name: "detallecr",
            component: detallecr
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador19',
            name: "detallecs",
            component: detallecs
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador20',
            name: "detallecu",
            component: detallecu
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador21',
            name: "detallecv",
            component: detallecv
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador22',
            name: "detallecw",
            component: detallecw
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador23',
            name: "detallecx",
            component: detallecx
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador24',
            name: "detallecy",
            component: detallecy
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador25',
            name: "detallecz",
            component: detallecz
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador26',
            name: "detallecaa",
            component: detallecaa
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador27',
            name: "detallecab",
            component: detallecab
        },
        {
            path: '/gerencias/gerencia3/indicadores/indicador28',
            name: "detallecac",
            component: detallecac
        },
    ]
})
export default router   