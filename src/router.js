import vueRouter from 'vue-router'
import User from './components/user'
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
            path: '/user/info/:username',
            name: "User",
            component: User
        },
    ]
})
export default router   