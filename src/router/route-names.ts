import { authRouteNames } from '@/views/auth/auth.routes'
import { organizationRouteNames } from '@/views/organization/organization.routes'
import { dashboardRouteNames } from '@/views/dashboard/dashboard.routes'

export const routesNames = {
  rootPage: 'rootPage',
  auth: 'auth',
  ...authRouteNames,
  ...organizationRouteNames,
  ...dashboardRouteNames
}
