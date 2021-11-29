import { RouteRecordRaw } from 'vue-router'

export const organizationRouteNames = {
  organization: 'organization'
}

export const organizationRoutes: Array<RouteRecordRaw> = [
  {
    path: 'organization',
    name: organizationRouteNames.organization,
    component: () => import('./Organization.vue')
  }
]
