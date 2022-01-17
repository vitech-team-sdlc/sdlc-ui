import { RouteRecordRaw } from 'vue-router'

export const dashboardEnvironmentsRouteNames = {
  dashboardEnvironments: 'dashboard-environments'
}

export const dashboardEnvironmentsRoutes: RouteRecordRaw = {
  path: ':id/environments',
  name: dashboardEnvironmentsRouteNames.dashboardEnvironments,
  component: () => import('./DashboardEnvironments.vue')
}
