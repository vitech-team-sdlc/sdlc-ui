import { authRouteNames } from '@/views/auth/auth.routes'
import { organizationRouteNames } from '@/views/organization/organization.routes'

export const routesNames = {
  rootPage: 'rootPage',
  auth: 'auth',
  ...authRouteNames,
  ...organizationRouteNames
}
