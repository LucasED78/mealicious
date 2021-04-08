<template>
  <div class="flex flex-col justify-center md:justify-start items-center h-screen relative">
    <div class="flex flex-col items-center mx-auto md:h-1/2">
      <h2 class="text-5xl font-bold my-3 sm:my-7">
        Mealicious
      </h2>

      <h1 class="text-5xl sm:text-6xl text-center font-bold text-red-700">
        SEARCH FOR YOUR <span class="block">FAVORITE RECIPES</span>
      </h1>
      <div class="absolute -left-48 img hidden md:block">
        <img :src="require(`~/assets/watermelon.png`)" class="w-8/12">
      </div>
    </div>
    <div class="flex justify-center items-start w-full md:h-1/2 md:bg-red-600">
      <div class="inline-flex w-10/12 md:w-5/12 justify-between my-4">
        <search-bar v-model="input" class="w-full mr-2" />
        <button
          class="text-xs xs:text-base bg-red-800 p-1 xs:px-4 w-3/12 h-auto uppercase text-white tracking-wider font-medium"
          @click="onButtonClick"
        >
          search
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      input: ''
    }
  },
  methods: {
    onButtonClick () {
      this.$router.push({
        path: '/home',
        query: {
          search: this.input
        }
      })
    }
  }
})
</script>

<style scoped>
  .img {
    top: 50%;
    transform: translateY(-50%);
  }
</style>
