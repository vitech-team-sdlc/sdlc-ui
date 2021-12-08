// import { NavigationGuard } from 'vue-router'
// // import { authStore } from '@/views/auth/auth.store'
// import { routesNames } from '@/router/route-names'
//
// async function getProfile () {
//   await authStore.getUserProfile()
// }
//
// export const routeGuard: NavigationGuard = async (
//   to,
//   from,
//   next
// ) => {
//   const isAuthenticated = !!authStore.token
//   const userExists = !!authStore.user
//   const isAuthRoute = to.path.includes(routesNames.auth)
//
//   if (isAuthenticated) {
//     if (!userExists) {
//       await getProfile()
//     }
//
//     if (isAuthRoute) {
//       next({ name: routesNames.organization })
//     } else {
//       next()
//     }
//   } else {
//     if (isAuthRoute) {
//       next()
//     } else {
//       next({ name: routesNames.login })
//     }
//   }
//   next()
// }
