import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
// import { authStore } from '@/views/auth/auth.store'
// import { routesNames } from '@/router/route-names'
//
// async function getProfile () {
//   await authStore.getUserProfile()
// }

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // const isAuthenticated = !!authStore.accessToken
  // const userExists = !!authStore.refreshToken
  // const isAuthRoute = to.name === 'login'
  // const isOrganizationRoute = to.name === 'organization'
  // console.log(isAuthRoute, 'isAuthRoute')
  // if (isAuthenticated) {
  //   if (!userExists) {
  //     // await getProfile()
  //   }
  //
  //   if (isOrganizationRoute) {
  //
  //   }
  //
  //   if (isAuthRoute) {
  //     next({ name: routesNames.login })
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (isAuthRoute) {
  //     next()
  //   } else {
  //     next({ name: routesNames.login })
  //   }
  // }
  next()
}
