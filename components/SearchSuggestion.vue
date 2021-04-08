<template>
  <ul class="suggestions p-2 bg-white">
    <transition-group name="list">
      <li
        v-for="suggestion in suggestions"
        :key="suggestion"
        class="cursor-pointer flex justify-between text-xs text-gray-600 my-1"
        @click.self="$emit('clickSuggestion', suggestion)"
      >
        {{ suggestion }}

        <font-awesome-icon
          :icon="['fa', 'times']"
          class="text-gray-400"
          data-testid="icon"
          @click="$emit('removeSuggestion', suggestion)"
        />
      </li>
    </transition-group>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    suggestions: {
      type: Array as PropType<Array<string>>,
      default: () => []
    }
  }
})
</script>

<style scoped>
  .suggestions {
    border-radius: 0 0 10px 10px;
  }
</style>
