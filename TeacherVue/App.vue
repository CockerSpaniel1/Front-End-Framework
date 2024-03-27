<script setup>
import MyCom from './components/MyCom.vue';
import { RouterView,RouterLink } from 'vue-router';
import Header from './components/Header.vue';

</script>

<template>
  <!-- <MyCom /> -->
  <div>
      <nav>
        <RouterLink to="/" class="navLink">HOME</RouterLink>
        <RouterLink to="/about" class="navLink" >ABOUTS</RouterLink>
        <!-- <RouterLink to="/news" class="navLink" >NEWS</RouterLink>       -->
        <!--傳送參數的頁面-->
        <!--1.命名的路由,類似post-->
        <!-- <RouterLink :to="{name:'news',params:{headlines:'mango onsale'}}" class="navLink" >NEWS</RouterLink> -->
        <RouterLink :to="{name:'news',params:{headlines:'mango onsale',price:50}}" class="navLink" >NEWS</RouterLink>

        <!-- <RouterLink to="/products"  class="navLink">PRODUCTS</RouterLink> -->

        <!--2.帶查詢參數,網址/products?fruit=mango,類似get-->        
        <RouterLink :to="{path:'/products',query:{fruit:'mango',qty:120}}" class="navLink">PRODUCTS</RouterLink>
        <RouterLink to="/orderdb" class="navLink" >ORDER</RouterLink>
      </nav>
  </div>
  <Header />
  <RouterView />
</template>

<style scoped>

</style>
