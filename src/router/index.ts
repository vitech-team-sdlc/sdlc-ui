import { createRouter, createWebHistory, RouteRecordRaw, onBeforeRouteUpdate, useRoute } from 'vue-router'

import { routesNames } from './route-names'
import { routeGuard } from './route-guard'

import { authRoutes } from '@/views/auth/auth.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'
import { organizationRoutes } from '@/views/organization/organization.routes'
import { dashboardRoutes } from '@/views/dashboard/dashboard.routes'
import { aboutRoutes } from '@/views/about/about.routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routesNames.auth,
    redirect: routesNames.login,
    component: BlankLayout,
    children: authRoutes
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      ...organizationRoutes,
      ...dashboardRoutes,
      ...aboutRoutes
    ]
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
