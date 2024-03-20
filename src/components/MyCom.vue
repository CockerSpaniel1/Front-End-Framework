<script setup>
    import {ref} from 'vue';
    import FruitSpring from "./FruitSpring.vue"
    import FruitSummer from "./FruitSummer.vue"
    import FruitTaiwan from './FruitTaiwan.vue';

    const season="這個季節尚賀甲的水果 香蕉";
    const monthOnSale = "Banana";

    const name = ref("");
    const price = ref(0);
    const qty = ref(0);

    const isVisible =ref(false);

    const fruitVisible=()=>{
        isVisible.value = !isVisible.value;
    }

</script>

<template>
    <h1>Welcome to Kaohsiung fruit Stand</h1>
    <hr>
    <h3>{{ season }}</h3>
    <p>本月特推水果: {{ monthOnSale }}</p>
    <p>本月特推水果: <span v-html="monthOnSale"></span></p>

    <input type="text" placeholder="Enter Fruit Name" v-model="name" />
    <input type="number" placeholder="Enter Fruit Price"  v-model="price"/>
    <input type="number" placeholder="Enter Fruit Qty"  v-model="qty"/>
    
    <p>{{ name || null }}</p>
    <p>{{ price || null }}</p>
    <p>{{ qty || null }}</p>
    <p>total: {{  price* qty }}</p>
    <!-- // v-on:click -->
    <button @click="fruitVisible">The Currently displayed fruit is :{{ isVisible? "Spring Fruit, Strawberry": " Summer Fruit , Lichi"}}</button>


    <!-- v-if vs. v-show -->
    <!-- v-show style=none; -->
    <FruitSpring v-if="isVisible"/>
    <FruitSummer v-if="!isVisible"/>
    <FruitTaiwan />
</template>

<style scoped>
    input {
        display:block;
    }

    img {
        width:30%;
        border-radius: 25px;
    }

</style>