import { RouteRecordRaw } from 'vue-router'

export const dashboardApplicationsRouteNames = {
  dashboardApplications: 'dashboard-applications'
}

export const dashboardApplicationsRoutes: RouteRecordRaw = {
  path: ':id/applications',
  name: dashboardApplicationsRouteNames.dashboardApplications,
  component: () => import('./DashboardApplications.vue')
}
