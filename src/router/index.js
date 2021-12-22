import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Article from '../views/subsections/Article.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/subsections/Project.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import MarkdownEditor from '../views/MarkdownEditor.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/blog/:slug',
        name: 'Article',
        component: Article
    },
    {
        path: '/projects/:project',
        name: 'Project',
        component: Project
    },
    {
        path: '/:catchAll(.*)',
        name: 'Redirect',
        component: Home
    },
    {
        path: '/editor',
        name: 'Markdown Editor',
        component: MarkdownEditor
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
