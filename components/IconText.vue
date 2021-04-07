<template>
  <div class="flex items-center">
    <div class="flex-1 mr-1 icon" data-testid="icon">
      <slot />
    </div>

    <div class="flex-1 text">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>
