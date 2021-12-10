import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/subsections/Article.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog/:slug',
        name: 'Article',
        component: Article
    },
    {
        path: '/:catchAll(.*)',
        name: 'Redirect',
        component: Home
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export {
  router,
  routes
}
