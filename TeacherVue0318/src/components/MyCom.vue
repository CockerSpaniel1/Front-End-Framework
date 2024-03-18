
<!--
<script setup>  
稱為糖語法(Syntactic Sugar),在程式語言中,加入某種語法,此語法對程式的功能不會有影響,但方便程式設計師使用
因程式變得更簡節,且可讀性高  
-->
<script setup>
import {ref} from 'vue'; 
import FruitSpring from './FruitSpring.vue';
import FruitSummer from './FruitSummer.vue';

const season='這個季節尚賀呷的水果的香蕉';
const monthOnSale='Banana';

// const name='';   //變數對應的資料為靜態的
// const price=0;
// const qty=0;

const name=ref(''); //變數對應的資料為動態的
const price=ref(0);
const qty=ref(0);

</script>

<template>
    <h1>Welcome to Kaohsiung Fruit Stand</h1>   
    <hr />

    <!--資料單向綁定,最基本的資料綁定形式是使{{ 雙大括號 }}-->
    <h3>{{ season }}</h3>
    <p>本月特推水果：{{ monthOnSale }}</p><!--using text interpolation 在本中插入-->
    <p>本用特推水果：<span v-html="monthOnSale"></span></p><!--using v-html directive ,使用v-html 來指出 -->


    <!--資料雙向綁定,資料有改變,畫面會隨之改變-->
    <input type="text" placeholder="Enter Fruit Name" v-model="name" />
    <input type="number" placeholder="Enter Fruit Price" v-model="price" />
    <input type="number" placeholder="Enter Fruit Qty" v-model="qty" />
    <p>{{name || null}}</p>
    <p>{{price || null }}</p>
    <p>{{ qty || null }}</p>
    <p>總計為 {{ price*qty }} 元</p>

    <hr />
    <FruitSpring />
    <FruitSummer />
</template>

<!--scoped 屬性之作用，是避免父元件的CSS樣式影響子元件的CSS 樣式-->
<style scoped>
    input{
        display: block;
    }
</style>