<template>
  <div class="w-10/12 mx-auto">
    <search-bar
      v-model="input"
      class="w-8/12 my-10 mx-auto"
      placeholder="search your meal"
      :input="input"
      :suggestions="history"
      @clickSuggestion="search($event); input = $event"
      @removeSuggestion="removeSuggestion($event); input = ''"
    />

    <meal-modal
      v-if="showModal"
      :meal="selectedMeal"
      @backdropClick="showModal = false"
      @closeClick="showModal = false"
    />
    <base-grid v-if="meals.length && !isLoading">
      <meal-card
        v-for="meal in meals"
        :key="meal.idMeal"
        :image-url="meal.strMealThumb"
        :name="meal.strMeal"
        :area="meal.strArea"
        :category="meal.strCategory"
        @click="selectedMeal = meal; showModal = !showModal"
      />
    </base-grid>

    <transition name="default">
      <empty-search
        v-if="!meals.length && !isLoading"
        @click="search($event); input = $event"
      />
    </transition>

    <base-grid v-if="isLoading">
      <shimmer
        v-for="n in 30"
        :key="n"
        class="w-full h-96 rounded-md"
      />
    </base-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MealState } from '~/store/meal'
import MealCard from '~/components/MealCard.vue'
import SearchBar from '~/components/SearchBar.vue'
import debounce from '~/utils/debounce'
import EmptySearch from '~/components/EmptySearch.vue'
import { mealsStoreConstants } from '~/utils/constants'

export default Vue.extend({
  components: {
    MealCard,
    SearchBar,
    EmptySearch
  },
  data () {
    return {
      input: '',
      selectedMeal: null,
      showModal: false,
      debounce: () => {}
    }
  },
  computed: {
    meals () {
      return (this.$store.state.meal as MealState).meals
    },
    isLoading () {
      return (this.$store.state.meal as MealState).loading
    },
    history () {
      return (this.$store.state.meal as MealState).history
    }
  },
  created () {
    this.debounce = this.$watch('input', debounce((value: string) => {
      if (value.length === 0) {
        return this.fetchAll()
      }

      this.search(value)
      this.$store.commit(mealsStoreConstants.ADD_HISTORY, value)
    }, 500))

    this.input = this.$route.query.search as string ?? ''

    if (this.input) { this.$store.commit(mealsStoreConstants.CHANGE_LOADING, true) }
  },
  methods: {
    removeSuggestion (value: string) {
      this.$store.commit(mealsStoreConstants.REMOVE_HISTORY, value)
    },
    fetchAll () {
      this.$store.dispatch(mealsStoreConstants.FETCH_ALL)
    },
    search (name: string) {
      this.$store.dispatch(mealsStoreConstants.FETCH_BY_NAME, name)
    }
  }
})
</script>
