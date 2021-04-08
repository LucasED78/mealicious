<template>
  <div class="flex justify-center mb-10">
    <div>
      <h1 class="text-2xl mb-2 font-bold text-center">
        We haven't found anything that matches your search :(
      </h1>

      <ul>
        <li>
          Review your ortography
        </li>

        <li class="my-2">
          Use less or more generic words
        </li>

        <li>
          If you still stuck, try our suggestions:

          <a
            v-for="(suggestion, index) in suggestions"
            :key="`${suggestion}-${index}`"
            class="text-indigo-500"
            href="#"
            @click="$emit('click', suggestion)"
          >{{ suggestion }}, </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    suggestions: {
      type: Array as PropType<Array<string>>,
      default: () => [
        'tomatoes', 'bread', 'chicken'
      ]
    }
  }
})
</script>
