import { RouteRecordRaw } from 'vue-router'

export const dashboardOverviewRouteNames = {
  dashboardOverview: 'dashboard-overview'
}

export const dashboardOverviewRoutes: RouteRecordRaw = {
  path: ':id/overview',
  name: dashboardOverviewRouteNames.dashboardOverview,
  component: () => import('./DashboardOverview.vue')
}
