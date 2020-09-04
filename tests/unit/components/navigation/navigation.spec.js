import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify';
import Nav from '@/components/nav/Nav.vue'

let wrapper

describe('Nav.vue', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
    const localVue = createLocalVue()
    const vuetify = new Vuetify({})

    wrapper = shallowMount(Nav, {
      localVue,
      vuetify
    })
  })

  it('should be vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
