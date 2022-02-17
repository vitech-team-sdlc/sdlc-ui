import { httpService } from '@/services'
import { authStore } from '@/views/auth/auth.store'

class OrganizationService {
  getOrganizations () {
    return httpService.get('/user/organization', {
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`
      }
    })
  }
}

export const organizationService = new OrganizationService()
