<template>
  <modal>
    <div slot="header" class="text-red-600 mb-3 text-lg" data-testid="name">
      {{ meal.strMeal }}
    </div>

    <div slot="body">
      <img
        :src="meal.strMealThumb"
        :alt="`image for meal ${meal.strMeal}`"
        class="w-6/12 max-h-64 mx-auto rounded-md my-2"
        data-testid="image"
      >

      <div v-if="ingredientWithMeasure.length" class="my-3">
        <p class="mb-2">
          <font-awesome-icon :icon="['fa', 'book']" class="mr-0.3 text-red-600" />

          <span class="text-xl text-red-600">
            Ingredients
          </span>
        </p>

        <div class="grid md:grid-cols-3 xs:grid-cols-1">
          <p v-for="ing in ingredientWithMeasure" :key="ing" class="my-1" data-testid="ingredients">
            {{ ing }}
          </p>
        </div>
      </div>

      <div class="mt-4">
        <p class="mb-2">
          <font-awesome-icon :icon="['fa', 'book']" class="mr-0.3 text-red-600" />

          <span class="text-xl text-red-600">
            Instructions
          </span>
        </p>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="mt-2 my-1" data-testid="instructions" v-html="instructionWithNewLine" />
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Meal } from '~/store/meal'
export default Vue.extend({
  props: {
    meal: {
      type: Object as PropType<Meal>,
      required: true
    }
  },
  computed: {
    ingredientWithMeasure () {
      return this.meal.ingredientsAndMeasures.map((data) => {
        const [ingredient, measure] = data

        return `${measure ?? ''} ${ingredient ?? ''}`
      })
    },
    instructionWithNewLine () {
      return this.meal.strInstructions.replace(/\r\n/, '<br><br>')
    }
  }
})
</script>
