<template>
  <transition name="default">
    <div class="shimmer" />
  </transition>
</template>

<style scoped>
  .shimmer {
    background: linear-gradient(90deg, rgba(231,231,231,1) 0%, rgba(255,255,255,1) 50%, rgba(231,231,231,1) 100%);
    animation: shimmer 1s linear 1s infinite;
    background-position: 0 0;
    background-size: 1000px 1000px;

    @keyframes shimmer {
      0% {
        background-position: 0% 0;
      }

      100% {
        background-position: 100% 0;
      }
    }
  }
</style>
