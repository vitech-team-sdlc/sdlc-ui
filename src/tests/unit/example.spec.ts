import { shallowMount } from '@vue/test-utils'
import Login from '@/views/auth/Login.vue'

describe('Login page', () => {
  it('renders title message', () => {
    const msg = 'Link your Github account to Salo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam ante, feugiat ac rhoncus quis, auctor vel mauris.  Morbi sed ipsum eget risus pharetra interdum eget eu odio. Mauris sit amet risus ut velit luctus consectetur vitae at metus.  Autenticate with GitHub'
    const wrapper = shallowMount(Login)
    expect(wrapper.text()).toMatch(msg)
  })
})
