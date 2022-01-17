import { RouteRecordRaw } from 'vue-router'
import {
  dashboardOverviewRouteNames,
  dashboardOverviewRoutes
} from '@/views/dashboard/dashboard-overview/dashboard-overview.routes'
import {
  dashboardEnvironmentsRouteNames,
  dashboardEnvironmentsRoutes
} from '@/views/dashboard/dashboard-environments/dashboard-environments.routes'
import {
  dashboardApplicationsRouteNames,
  dashboardApplicationsRoutes
} from '@/views/dashboard/dashboard-applications/dashboard-applications.routes'
import {
  dashboardTopologyStreamsRouteNames,
  dashboardTopologyStreamsRoutes
} from '@/views/dashboard/dashboard-topology-streams/dashboard-topology-streams.routes'

export const dashboardRouteNames = {
  dashboard: 'dashboard',
  ...dashboardOverviewRouteNames,
  ...dashboardApplicationsRouteNames,
  ...dashboardEnvironmentsRouteNames,
  ...dashboardTopologyStreamsRouteNames
}

export const dashboardRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    redirect: { name: dashboardRouteNames.dashboard },
    component: () => import('@/layouts/BlankLayout.vue'),
    children: [
      {
        path: '',
        name: dashboardRouteNames.dashboard,
        component: () => import('./Dashboard.vue')
      },
      {
        path: '',
        component: () => import('./DashboardWrapper.vue'),
        children: [
          dashboardOverviewRoutes,
          dashboardEnvironmentsRoutes,
          dashboardApplicationsRoutes,
          dashboardTopologyStreamsRoutes
        ]

      }
    ]
  }
]
