import { RouteRecordRaw } from 'vue-router'

export const dashboardTopologyStreamsRouteNames = {
  dashboardTopologyStreams: 'dashboard-topology-streams'
}

export const dashboardTopologyStreamsRoutes: RouteRecordRaw = {
  path: ':id/topology-streams',
  name: dashboardTopologyStreamsRouteNames.dashboardTopologyStreams,
  component: () => import('./DashboardTopologyStreams.vue')
}
