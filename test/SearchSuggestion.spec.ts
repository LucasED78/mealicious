import { mount, Wrapper } from '@vue/test-utils'
import SearchSuggestion from '@/components/SearchSuggestion.vue'

describe('SearchSuggestion', () => {
  let wrapper: Wrapper<any>

  beforeAll(() => (wrapper = mount(
    SearchSuggestion, {
      propsData: {
        suggestions: [
          'test',
          'test 2'
        ]
      },
      stubs: {
        FontAwesomeIcon: true
      }
    }
  )))

  test('should render a list of suggestions', () => {
    const elements = wrapper.findAll('li')

    expect(elements.length).toBeTruthy()
  })

  test('should emit a click event', async () => {
    const element = wrapper.find('li')

    await element.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().clickSuggestion).toBeTruthy()
  })

  test('should emit a close event', async () => {
    wrapper.find('[data-testid="icon"]').vm.$emit('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().removeSuggestion).toBeTruthy()
  })
})
