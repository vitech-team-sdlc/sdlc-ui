import { authRouteNames } from '@/views/auth/auth.routes'
import { organizationRouteNames } from '@/views/organization/organization.routes'
import { dashboardRouteNames } from '@/views/dashboard/dashboard.routes'
import { aboutRouteNames } from '@/views/about/about.routes'

export const routesNames = {
  rootPage: 'rootPage',
  auth: 'auth',
  ...aboutRouteNames,
  ...authRouteNames,
  ...organizationRouteNames,
  ...dashboardRouteNames
}
