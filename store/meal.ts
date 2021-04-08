import { GetterTree, ActionTree, MutationTree } from 'vuex'
import mapIngredientsAndMeasures from '~/utils/mapIngredientsAndMeasures'

export interface Meal {
  idMeal: string,
  strMeal: string,
  strCategory: string,
  strArea: string,
  strInstructions: string,
  strMealThumb: string,
  strTags: string,
  strYoutube: string,
  ingredientsAndMeasures: string[][],
}

export const state = () => ({
  meals: [] as Meal[],
  loading: false,
  history: [] as string[]
})

export type MealState = ReturnType<typeof state>

export const getters: GetterTree<MealState, MealState> = {
  meals: state => state.meals,
  loading: state => state.loading,
  history: state => state.history
}

export const mutations: MutationTree<MealState> = {
  CHANGE_MEALS: (state, meals: Meal[]) => (state.meals = meals),
  CHANGE_LOADING: (state, loading: boolean) => (state.loading = loading),
  ADD_HISTORY: (state, input: string) => {
    state.history = [...state.history.filter(data => data !== input), input]
  },
  REMOVE_HISTORY: (state, input: string) => (state.history = state.history.filter(data => data !== input))
}

export const actions: ActionTree<MealState, MealState> = {
  async fetchAll ({ commit }) {
    commit('CHANGE_LOADING', true)
    const { data } = await this.$axios.get('/search.php?f=b')
    const { meals } = data

    commit('CHANGE_MEALS', meals ? mapIngredientsAndMeasures(data.meals as Meal[]) : [])
    commit('CHANGE_LOADING', false)
  },
  async fetchMealsByName ({ commit }, name: string) {
    commit('CHANGE_LOADING', true)
    const { data } = await this.$axios.get(`/search.php?s=${name}`)
    const { meals } = data

    commit('CHANGE_MEALS', meals ? mapIngredientsAndMeasures(data.meals as Meal[]) : [])
    commit('CHANGE_LOADING', false)
  }
}
