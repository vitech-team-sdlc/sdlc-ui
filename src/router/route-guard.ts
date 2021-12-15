import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { authStore } from '@/views/auth/auth.store'
import { routesNames } from '@/router/route-names'

// async function getRefreshToken (code: string) {
//   await authStore.getRefreshTokenFromCode(code)
// }

// async function getUser () {
//   await authStore.getUser()
// }

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const isAuthenticated = !!authStore.accessToken
  // const refreshToken = !!authStore.refreshToken
  const isAuthRoute = to.name === 'login'
  const isOrganizationRoute = to.name === 'organization'

  if (isAuthenticated) {
    // await authStore.getUser()
    if (isAuthRoute) {
      next({ name: routesNames.organization })
    } else {
      next()
    }
  } else {
    // if (refreshToken) {
    //   await getRefreshToken(authStore.refreshToken)
    // }
    if (isAuthRoute) {
      next()
    } else if (isOrganizationRoute) {
      next()
    } else {
      next({ name: routesNames.login })
    }
  }
}
