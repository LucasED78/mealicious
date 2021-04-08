<template>
  <article @click="onClick">
    <img :src="imageUrl" alt="meal image">
    <div class="flex justify-between items-center p-2">
      <div data-testid="name">
        {{ limitedName }}
      </div>

      <div class="flex mt-2">
        <icon-text :text="category" class="mr-4" data-testid="category">
          <font-awesome-icon :icon="['fa', 'book']" />
        </icon-text>

        <icon-text :text="area" data-testid="area">
          <font-awesome-icon :icon="['fa', 'globe']" />
        </icon-text>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import IconText from './IconText.vue'

export default Vue.extend({
  components: {
    IconText
  },
  props: {
    name: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    limitedName () {
      const name = this.name as string

      return name.length > 15
        ? `${name.substr(0, 15)}...`
        : name
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }

  }
})
</script>

<style scoped>
  article {
    box-shadow: 0px 0px 5px 0px rgb(158, 158, 158);
    border-radius: 10px;
    transition: all .5s;
    cursor: pointer;
  }

  article:hover {
    box-shadow: 0px 0px 16px 0px rgba(231,231,231,1)
  }

  img {
    width: 100%;
    height: 300px;
    border-radius: 10px 10px 0 0;
  }
</style>
