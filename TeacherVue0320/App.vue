<script setup>
import MyCom from './components/MyCom.vue';
import { RouterView,RouterLink } from 'vue-router';

</script>

<template>
  <!-- <MyCom /> -->
  <div>
      <nav>
        <RouterLink to="/" >HOME</RouterLink>
        <RouterLink to="/about" >ABOUTS</RouterLink>
        <RouterLink to="/news" >NEWS</RouterLink>
        <RouterLink to="/products" >PRODUCTS</RouterLink>
      </nav>
  </div>

  <RouterView />
</template>

<style scoped>

</style>
