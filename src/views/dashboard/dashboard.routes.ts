import { RouteRecordRaw } from 'vue-router'
import { dashboardInstallationsRoutes } from '@/views/dashboard/dashboard-installations/dashboard-installations.routes'

export const dashboardRouteNames = {
  dashboard: 'dashboard'
}

export const dashboardRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: dashboardRouteNames.dashboard,
    component: () => import('./Dashboard.vue'),
    children: [
      dashboardInstallationsRoutes
    ]
  }
]
