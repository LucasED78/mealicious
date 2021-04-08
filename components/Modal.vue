<template>
  <transition name="modal">
    <div class="modal__overlay" @click="onClick">
      <div class="modal w-8/12 h-4/5 bg-white p-4 mt-16">
        <div class="modal__header flex justify-between">
          <slot name="header" />

          <font-awesome-icon
            class="icon text-red-600 cursor-pointer text-xl"
            :icon="['fa', 'times-circle']"
            @click="onCloseButtonClick"
          />
        </div>

        <div class="modal__body">
          <slot name="body" />
        </div>

        <div class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    emitAll (name: string) {
      let vm = this.$parent

      while (vm) {
        vm.$emit(name)
        vm = vm.$parent
      }
    },
    onClick () {
      this.emitAll('backdropClick')
    },
    onCloseButtonClick () {
      this.emitAll('closeClick')
    }
  }
})
</script>

<style scoped>
  .modal__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .modal {
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .modal::-webkit-scrollbar {
    display: none;
  }

  .modal-enter-active, .modal-leave-active {
    transition: opacity .5s
  }
  .modal-enter, .modal-leave-to {
    opacity: 0
  }
</style>
