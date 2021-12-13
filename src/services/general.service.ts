import { httpService } from '@/services'
import { IExampleInterface } from '@/types'

class GeneralService {
  getSomeData (): Promise<IExampleInterface> {
    return httpService.get('/some-url')
  }
}

export const generalService = new GeneralService()
