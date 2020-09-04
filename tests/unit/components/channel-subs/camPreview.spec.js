import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify';
import CamPreview from '@/components/channel-subs/CamPreview.vue'

let wrapper

describe('CamPreview.vue', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
    const localVue = createLocalVue()
    const vuetify = new Vuetify({})

    wrapper = shallowMount(CamPreview, {
      localVue,
      vuetify
    })
  })

  it('should be vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
