import { shallowMount } from '@vue/test-utils'
import Login from '@/views/auth/Login.vue'

describe('Login page', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Login 👋🏼'
    const wrapper = shallowMount(Login)
    expect(wrapper.text()).toMatch(msg)
  })
})
