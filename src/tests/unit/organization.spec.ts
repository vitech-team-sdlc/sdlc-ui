import { shallowMount } from '@vue/test-utils'
import Organization from '@/views/organization/Organization.vue'

describe('Organization page', () => {
  it('renders title message', () => {
    const msg = 'Please choose organization for instalation'
    const wrapper = shallowMount(Organization)
    expect(wrapper.text()).toMatch(msg)
  })
})
