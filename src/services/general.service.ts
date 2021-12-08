import { httpService } from '@/services'
import { IExampleInterface } from '@/types'

class GeneralService {
  getSomeData (): Promise<IExampleInterface> {
    return httpService.get('/some-url')
  }

  getAccessToken (code: string): Promise<any> {
    return httpService.post('/oauth/access_token', {}, {
      params: {
        code: JSON.parse(code),
        provider: 'GitHub'
      }
    })
  }
}

export const generalService = new GeneralService()
