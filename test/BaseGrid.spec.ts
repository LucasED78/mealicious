import { mount, Wrapper } from '@vue/test-utils'
import BaseGrid from '@/components/BaseGrid.vue'

describe('BaseGrid', () => {
  let wrapper: Wrapper<any>

  beforeAll(() => (wrapper = mount(
    BaseGrid, {
      slots: {
        default: '<div class="content"></div>'
      }
    }
  )))

  test('should render a base grid content correctly', () => {
    expect(wrapper.find('.content')).toBeTruthy()
  })
})
