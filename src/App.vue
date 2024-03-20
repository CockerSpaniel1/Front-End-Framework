<script setup>
import MyCom from './components/MyCom.vue';
import {RouterView,RouterLink} from "vue-router";
</script>

<template>
  <!-- <MyCom/> -->
  <div>
    <nav>
      <RouterLink to="/" class="navLink">HOME</RouterLink>
      <RouterLink to="/about" class="navLink">ABOUTS</RouterLink>
      <RouterLink to="/news" class="navLink">NEWS</RouterLink>
      <RouterLink to="/products" class="navLink">PRODUCTS</RouterLink>
    </nav>
    
  </div>
<RouterView/>
</template>

<style scoped>
 link{padding:5px;}
</style>
