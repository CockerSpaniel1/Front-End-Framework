<script setup>
    import {ref} from 'vue';
    import FruitSpring from "./FruitSpring.vue"
    import FruitSummer from "./FruitSummer.vue"

    const season="這個季節尚賀甲的水果 香蕉";
    const monthOnSale = "Banana";

    const name = ref("");
    const price = ref(0);
    const qty = ref(0);

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

    <FruitSpring/>
    <FruitSummer/>
</template>

<style scoped>
    input {
        display:block;
    }
</style>