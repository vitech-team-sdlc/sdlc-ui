import { RouteRecordRaw } from 'vue-router'

export const dashboardInstallationsRouteNames = {
  dashboardInstallations: 'dashboard-installations'
}

export const dashboardInstallationsRoutes: RouteRecordRaw = {
  path: 'installations',
  name: dashboardInstallationsRouteNames.dashboardInstallations,
  component: () => import('./DashboardInstallations.vue')
}
