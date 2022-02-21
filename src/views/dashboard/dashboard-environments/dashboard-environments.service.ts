import { httpService } from '@/services'
import { authStore } from '@/views/auth/auth.store'
import { ITemplate, ITemplateCreate } from '@/views/dashboard/dashboard-environments/dashboard-environments.types'

class DashboardEnvironmentsService {
  getListOfTemplates (): Promise<ITemplate[]> {
    return httpService.get('/templates', {
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`
      }
    })
  }

  createNewInstallation (organization: string, payload: ITemplateCreate): Promise<ITemplateCreate[]> {
    return httpService.post(`/salo/${organization}`, payload, {
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`
      }
    })
  }
}

export const dashboardEnvironmentsService = new DashboardEnvironmentsService()
