// import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules'
// import { store } from '@/store/create-store'
// // import { authService } from '@/services'
// import { TNullableField, ILoginForm, TUser } from '@/types'
//
// @Module
// class AuthStore extends VuexModule {
//   token = localStorage.getItem(authService.tokenLocalStorageName) || ''
//   userId = Number(localStorage.getItem(authService.userIdLocalStorageName))
//   user: TNullableField<TUser> = null
//
//   @Mutation
//   SET_LOGIN_INFO ({ token, id }: { token: string; id: number }) {
//     this.token = token
//     this.userId = id
//     localStorage.setItem(authService.tokenLocalStorageName, token)
//     localStorage.setItem(authService.userIdLocalStorageName, String(id))
//   }
//
//   @Mutation
//   SET_USER (user: TUser) {
//     this.user = user
//   }
//
//   @Action
//   async login (loginForm: ILoginForm) {
//     const { token, id } = await authService.login(loginForm)
//     this.SET_LOGIN_INFO({ token, id })
//   }
//
//   @Action
//   async getUserProfile () {
//     const user = await authService.getUserById(this.userId)
//     this.SET_USER(user)
//   }
// }
//
// export const authStore = new AuthStore({ store, name: 'AuthStore' })
