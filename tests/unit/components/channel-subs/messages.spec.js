import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify';
import Messages from '@/components/channel-subs/Messages.vue'

let wrapper

describe('Messages.vue', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
    const localVue = createLocalVue()
    const vuetify = new Vuetify({})

    wrapper = shallowMount(Messages, {
      localVue,
      vuetify
    })
  })

  it('should be vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
