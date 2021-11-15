import { createRouter, createWebHistory, RouteRecordRaw, onBeforeRouteUpdate, useRoute } from 'vue-router'

import { routesNames } from './route-names'
import { routeGuard } from './route-guard'

import { authRoutes } from '@/views/auth/auth.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routesNames.auth,
    redirect: routesNames.login,
    component: DefaultLayout,
    children: authRoutes
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(routeGuard)

export {
  routesNames,
  routes,
  onBeforeRouteUpdate,
  useRoute
}
