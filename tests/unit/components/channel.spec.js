import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify';
import Channel from '@/components/Channel.vue'

let wrapper

describe('Channel.vue', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
    const localVue = createLocalVue()
    const vuetify = new Vuetify({})

    wrapper = shallowMount(Channel, {
      localVue,
      vuetify
    })
  })

  it('should be vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should call filter method', () => {
    const mockFilter = jest.spyOn(wrapper.vm, 'filterchoice')

    wrapper.vm.$on('send-user-type', mockFilter)
    wrapper.vm.$emit('send-user-type')

    expect(mockFilter).toHaveBeenCalled()
  })
})
