<script setup>

</script>

<template>
    <div>
        <h1>News</h1>
        <div>芒果季開跑: {{ this.$route.params.headlines }}</div>
        <div>價格: {{ this.$route.params.price }}</div>
    </div>

</template>

<style scoped>
    div {padding:2vw;}
</style>