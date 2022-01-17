import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules'
import { store } from '@/store/create-store'
import { authService } from '@/services'
import { TNullableField } from '@/types'
import { getCookie } from '@/helpers'
import { ITokenAccess } from '@/views/auth/auth.types'

@Module
class AuthStore extends VuexModule {
  refreshToken = localStorage.getItem(authService.refreshTokenLocalStorageName) || ''
  accessToken = getCookie(authService.accessTokenCookiesName) || ''
  user: TNullableField<any> = null

  @Mutation
  SET_LOGIN_INFO (payload: ITokenAccess) {
    this.accessToken = payload.access_token
    this.refreshToken = payload.refresh_token

    document.cookie =
      `${authService.accessTokenCookiesName}=${payload.access_token};expires=${new Date(payload.expiry)}`
    localStorage.setItem(authService.refreshTokenLocalStorageName, this.accessToken)
  }

  @Mutation
  SET_USER (user: any) {
    this.user = user
  }

  @Action
  // async login (loginForm: ILoginForm) {
  //   const { token, id } = await authService.login(loginForm)
  //   this.SET_LOGIN_INFO({ token, id })
  // }

  @Action
  async getAccessTokenFromCode (code: string) {
    const response = await authService.getAccessToken(code)
    this.SET_LOGIN_INFO(response)
  }

  async getRefreshTokenFromCode (code: string) {
    const response = await authService.getRefreshToken(code)
    this.SET_LOGIN_INFO(response)
  }

  @Action
  async getUser () {
    const response = await authService.getUser()
    this.SET_USER(response)
  }
}

export const authStore = new AuthStore({ store, name: 'AuthStore' })
