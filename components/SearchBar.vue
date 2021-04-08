<template>
  <transition name="default">
    <div v-click-outside="onClickOutside" class="search bg-white relative" :class="{'rounded-md': suggestions.length && showSuggestions}">
      <div class="flex items-center relative">
        <input
          v-model="localValue"
          class="w-full text-gray-800 p-2 rounded-md"
          :placeholder="placeholder"
          :class="{ 'has-suggestions': suggestions.length }"
          @click="showSuggestions = true"
        >

        <font-awesome-icon
          class="absolute right-3 text-gray-500"
          :icon="['fa', 'search']"
        />
      </div>

      <transition name="default">
        <search-suggestion
          v-if="suggestions.length && showSuggestions"
          date-testid="suggestions"
          :suggestions="suggestions"
          class="w-full z-10"
          @clickSuggestion="$emit('clickSuggestion', $event); showSuggestions = false"
          @removeSuggestion="$emit('removeSuggestion', $event);"
        />
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import VueClickOutside from '@/directives/ClickOutside.vue'
import SearchSuggestion from './SearchSuggestion.vue'
export default Vue.extend({
  components: { SearchSuggestion },
  directives: {
    VueClickOutside
  },
  props: {
    input: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    suggestions: {
      type: Array as PropType<Array<string>>,
      default: () => []
    }
  },
  data () {
    return {
      showSuggestions: false
    }
  },
  computed: {
    localValue: {
      get (): string {
        return this.input
      },
      set (value: string) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    onClickOutside () {
      this.showSuggestions = false
    }
  }
})
</script>

<style scoped>
  .search {
    box-shadow: 0px 0px 3px 0px rgb(158, 158, 158);
    transition: all .5s;
  }

  input {
    outline: none;
    box-shadow: 0px 0px 3px 0px rgb(158, 158, 158);
  }

  ::placeholder {
    color: #6b7280;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #6b7280;
  }

  ::-ms-input-placeholder {
    color: #6b7280;
  }

  .has-suggestions {
    box-shadow: none;
  }
</style>
