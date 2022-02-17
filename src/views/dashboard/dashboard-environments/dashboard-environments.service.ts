import { httpService } from '@/services'
import { authStore } from '@/views/auth/auth.store'
import { ITemplate } from '@/views/dashboard/dashboard-environments/dashboard-environments.types'

class DashboardEnvironmentsService {
  getListOfTemplates (): Promise<ITemplate[]> {
    return httpService.get('/templates', {
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`
      }
    })
  }
}

export const dashboardEnvironmentsService = new DashboardEnvironmentsService()
