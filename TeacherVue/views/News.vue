<script setup>
</script>

<template>
    <div>
        <h1>News</h1>

        <!--接收參數的頁面-->
        <!--1.param-->
        <div>
            茫果祭開跑:{{ this.$route.params.headlines }}
            ,每顆價格：{{ this.$route.params.price }}
            
        </div>
    </div>
</template>

<style scoped>
    div{
        padding: 2.0vw;
    }
</style>