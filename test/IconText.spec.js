import IconText from '@/components/IconText.vue'
import { mount } from '@vue/test-utils'

describe('IconText', () => {
  test('should render the text correctly', () => {
    const wrapper = mount(IconText, {
      propsData: {
        text: 'This is an icon text'
      }
    })

    const text = wrapper.find('.text').text()

    expect(text)
      .toBe('This is an icon text')
  })

  test('should render the icon correctly', () => {
    const wrapper = mount(IconText, {
      propsData: {
        text: 'This is an icon text'
      },
      slots: [
        '<img src="#" />'
      ]
    })

    const icon = wrapper.find('img')

    expect(icon)
      .toBeTruthy()
  })
})
