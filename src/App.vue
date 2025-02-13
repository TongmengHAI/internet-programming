<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderItem from '@/components/HeaderItem.vue';

</script>

<template>
  <div class="container" style="max-width: 1440px; margin: auto;">
    <HeaderItem />

    <RouterView />
  </div>

</template>

<script scoped>
  export default {
    components: {
      HeaderItem
    }
  }
</script>

<style scoped>
  .container {
    padding: 0 20%;
  }
</style>
