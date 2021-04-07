import Modal from '@/components/Modal.vue'
import { mount, Wrapper } from '@vue/test-utils'

describe('Modal', () => {
  let wrapper: Wrapper<any>

  beforeAll(() => {
    const headerSlot = '<div class="header">header</div>'
    const bodySlot = '<div class="body">body</div>'
    const footerSlot = '<div class="footer">footer</div>'

    wrapper = mount(Modal, {
      slots: {
        header: headerSlot,
        body: bodySlot,
        footer: footerSlot
      },
      stubs: {
        FontAwesomeIcon: true
      }
    })
  })

  test('should render correctly the slots', () => {
    const headerText = wrapper.find('.header').text()
    const bodyText = wrapper.find('.body').text()
    const footerText = wrapper.find('.footer').text()

    expect(headerText).toBe('header')
    expect(bodyText).toBe('body')
    expect(footerText).toBe('footer')
  })
})
