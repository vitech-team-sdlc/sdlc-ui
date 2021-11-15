import { RouteRecordRaw } from 'vue-router'

export const authRouteNames = {
  login: 'login'
}

export const authRoutes: Array<RouteRecordRaw> = [
  {
    path: 'login',
    name: authRouteNames.login,
    component: () => import('./Login.vue')
  }
]
