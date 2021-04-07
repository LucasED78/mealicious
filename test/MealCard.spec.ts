import { mount, Wrapper } from '@vue/test-utils'
import MealCard from '~/components/MealCard.vue'

describe('MealCard', () => {
  let wrapper: Wrapper<any>
  const props = {
    imageUrl: 'url',
    name: 'French Fries',
    area: 'British',
    category: 'meal'
  }

  beforeAll(() => (wrapper = mount(
    MealCard, {
      propsData: props,
      stubs: {
        FontAwesomeIcon: true
      }
    }
  )))

  test('should render correctly all meals info', () => {
    const imageUrl = wrapper.find('img').attributes('src')
    const name = wrapper.find('[data-testid="name"]').text()
    const categoryText = wrapper.find('[data-testid="category"]').props('text')
    const areaText = wrapper.find('[data-testid="area"]').props('text')

    expect(imageUrl).toBe(props.imageUrl)
    expect(name).toBe(props.name)
    expect(categoryText).toBe(props.category)
    expect(areaText).toBe(props.area)
  })

  test('should emit the click event', async () => {
    wrapper.find('article').trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().click).toBeTruthy()
  })
})
