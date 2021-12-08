import { RouteRecordRaw } from 'vue-router'
import {
  dashboardInstallationsRouteNames, dashboardInstallationsRoutes
} from '@/views/dashboard/dashboard-installations/dashboard-installations.routes'

export const dashboardRouteNames = {
  dashboard: 'dashboard'
}

export const dashboardRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: dashboardRouteNames.dashboard,
    redirect: {
      name: dashboardInstallationsRouteNames.dashboardInstallations
    },
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      dashboardInstallationsRoutes
    ]
  }
]
