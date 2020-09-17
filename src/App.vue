<template>
  <div id="q-app">
    <transition name="slide" mode="out-in">
       <router-view :key="this.$route.path" />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }
</style>
