import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify';
import Switches from '@/components/channel-subs/Switches.vue'

let wrapper

describe('Switches.vue', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
    const localVue = createLocalVue()
    const vuetify = new Vuetify({})

    wrapper = shallowMount(Switches, {
      localVue,
      vuetify
    })
  })

  it('should be vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
