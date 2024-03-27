<script setup>
</script>

<template>
    <div>
        <h1>Products</h1>
        <div>

            <!--接收參數的頁面-->
            <!--2.query-->
            當季水果:{{ this.$route.query.fruit }}
            ,訂購數量:{{ this.$route.query.qty }}
         
                    
        </div>
    </div>
</template>

<style scoped>
    div{
        padding: 2.0vw;
    }
</style>