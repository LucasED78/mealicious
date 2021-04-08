import { mount, Wrapper } from '@vue/test-utils'
import SearchBar from '@/components/SearchBar.vue'

describe('SearchBar', () => {
  let wrapper: Wrapper<any>

  beforeAll(() => (wrapper = mount(
    SearchBar, {
      stubs: {
        FontAwesomeIcon: true
      }
    }
  )))

  test('should emit a input event', async () => {
    wrapper.find('input').setValue('test')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().input).toBeTruthy()
  })
})
