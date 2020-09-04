import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify';
import Wrapper from '@/components/Wrapper.vue'

let wrapper

describe('Wrapper.vue', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
    const localVue = createLocalVue()
    const vuetify = new Vuetify({})

    wrapper = shallowMount(Wrapper, {
      localVue,
      vuetify
    })
  })

  it('should be vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should load note', () => {
    const note = wrapper.find('.error--text')
    expect(note.exists()).toBe(true)
  })
})
