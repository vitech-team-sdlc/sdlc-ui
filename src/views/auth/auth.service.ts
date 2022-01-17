import { httpService } from '@/services'
import { ITokenAccess } from '@/views/auth/auth.types'
import { authStore } from '@/views/auth/auth.store'

class AuthService {
  accessTokenCookiesName = 'access_token'
  refreshTokenLocalStorageName = 'refresh_token'

  getAccessToken (code: string): Promise<ITokenAccess> {
    return httpService.post('/oauth/access_token', undefined, {
      params: {
        code: JSON.parse(code),
        provider: 'GitHub'
      }
    })
  }

  getRefreshToken (code: string): Promise<ITokenAccess> {
    return httpService.post('/oauth/refresh_token', undefined, {
      params: {
        refresh_token: code,
        provider: 'GitHub'
      }
    })
  }

  getUser (): Promise<any> {
    return httpService.get('/api/user', {
      headers: {
        'X-SA10-Token': authStore.accessToken,
        'X-SA10-Provider': 'GitHub',
        'X-SA10-Org': 'vitech-team-sdlc'
      }
    })
  }
}

export const authService = new AuthService()
