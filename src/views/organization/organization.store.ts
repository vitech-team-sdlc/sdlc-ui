import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules'
import { store } from '@/store/create-store'
import { TNullableField } from '@/types'
import { organizationService } from '@/views/organization/organization.service'

@Module
class OrganizationStore extends VuexModule {
  organizations: TNullableField<any> = null

  @Mutation
  SET_ORGANIZATIONS (payload: any) {
    this.organizations = payload
  }

  @Action
  async getOrganizations () {
    const response = await organizationService.getOrganizations()
    this.SET_ORGANIZATIONS(response)
  }
}

export const organizationStore = new OrganizationStore({ store, name: 'OrganizationStore' })
