import { httpService } from '@/services'
import { IExampleInterface } from '@/types'

class ExampleGeneralService {
  getSomeData (): Promise<IExampleInterface> {
    return httpService.get('/some-url')
  }
}

export const exampleGeneralService = new ExampleGeneralService()
