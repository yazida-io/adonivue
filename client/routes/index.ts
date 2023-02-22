import { RouteRecordRaw } from 'vue-router'
import { auth, guest } from '../middleware'

const authRoute = {
  meta: {
    layout: 'auth',
    middleware: [auth],
  },
}

const guestRoute = {
  meta: {
    layout: 'default',
    middleware: [guest],
  },
}

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    alias: '/',
    component: () => import('../pages/Home.vue'),
    ...authRoute,
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../pages/Login.vue'),
    ...guestRoute,
  },
  {
    name: 'logout',
    path: '/logout',
    component: () => import('../pages/Logout.vue'),
    ...authRoute,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' },
  },
]

export default routes
