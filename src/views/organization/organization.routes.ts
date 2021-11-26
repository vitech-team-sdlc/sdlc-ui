import { RouteRecordRaw } from 'vue-router'

export const authRouteNames = {
  organization: 'organization'
}

export const organizationRoutes: Array<RouteRecordRaw> = [
  {
    path: 'organization',
    name: authRouteNames.organization,
    component: () => import('./Organization.vue')
  }
]
