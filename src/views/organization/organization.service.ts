import { httpService } from '@/services'
import { authStore } from '@/views/auth/auth.store'

class OrganizationService {
  getOrganizations () {
    return httpService.get('/api/organization', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'X-SA10-Token': authStore.accessToken,
        'X-SA10-Provider': 'GitHub'
      }
    })
  }
}

export const organizationService = new OrganizationService()
