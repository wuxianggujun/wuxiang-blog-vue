import {createRouter, createWebHistory} from 'vue-router'

const routes = [{
    path: '/', name: 'MainHome', component: () => import('../components/Home')
}, {
    path: '/about', name: 'MainAbout', component: () => import('../components/About')
}]

const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_URL), routes
})

export default router

