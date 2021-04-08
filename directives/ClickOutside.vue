<script lang="ts">
import Vue from 'vue'

type ElementWithClickOutside = HTMLElement & {
  clickOutsideEvent: (event: Event) => void
}
export default Vue.directive('click-outside', {
  bind (el, binding, vnode) {
    const element = el as ElementWithClickOutside

    element.clickOutsideEvent = function (event) {
      if (!(element === event.target || element.contains(event.target as Node))) {
        const context = vnode?.context as {[key: string]: any}

        if (context) {
          context[binding.expression as string](event)
        }
      }
    }
    document.body.addEventListener('click', element.clickOutsideEvent)
  },
  unbind (el) {
    document.body.removeEventListener('click', (el as ElementWithClickOutside).clickOutsideEvent)
  }
})
</script>
