<script setup>

</script>

<template>
    <div><h1>Products</h1>
    <div>當季水果:{{this.$route.query.fruit }}</div>
    <div>數量:{{this.$route.query.qty }}</div>
    </div>

</template>

<style scoped>
    div {padding:2vw;}
</style>