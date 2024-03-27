<script setup>
import MyCom from './components/MyCom.vue';
import {RouterView,RouterLink} from "vue-router";
import Header from './components/Header.vue';
</script>

<template>
  <!-- <MyCom/> -->
  <div>
    <nav>
      <RouterLink to="/" class="navLink">HOME</RouterLink>
      <RouterLink to="/about" class="navLink">ABOUTS</RouterLink>
      <RouterLink :to="{name:'news', 
      params:{headlines:'mango onsale',price: 50}}" class="navLink">NEWS</RouterLink>

      <!-- <RouterLink to="/products" class="navLink">PRODUCTS</RouterLink> -->
      <router-link :to="{path:'/products', query:{fruit:'mango',qty:99}}">PRODUCT</router-link>
      <RouterLink to="/orderdb" class="navLink">ORDERDB</RouterLink>
    </nav>
    
  </div>
<Header/>
<RouterView/>
</template>

<style scoped>
 link{padding:5px;}
</style>
