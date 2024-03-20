<script setup>

const imgInfo=[
"蘋果 含有大量的膳食纖維及維他命C",
"香蕉 富含膳食纖維中的果膠，可促進腸蠕動",
"葡萄 營養豐富，含有多種礦物質",
"西瓜 香甜多汁，被稱為「夏季瓜果之王」",
"芒果 富含大量的維生素C，抗氧化及美膚",
"草莓 擁有豐富的維生素C",
"荔枝 原生自中國南方的亞熱帶水果",
"龍眼 色澤晶瑩、肉質鮮嫩、甜美爽口",
"柑橘 秋末冬初正是臺灣柑橘成熟季節",
"巴樂 含豐富維生素C，低熱量、高纖維、水分高",
"鳳梨 果肉中的酵素能解油膩、助消化、降血壓",
"桃子 果皮光澤具彈性、絨毛綿密，果實飽滿",
"櫻桃 中醫古籍稱「滋潤皮膚」、「令人好顏色，美態」"
]

</script>

<template>
    <!-- v-for -->
    <div v-for="(img) in imgInfo" class="fruitTxt" >
        <p>{{ img }}</p>
    </div>
</template>

<style scoped>

    .fruitTxt{
        font-size: larger;
        animation: imgInfo 1s ease-in-out;
    }

    @keyframes imgInfo{
        0%{
            opacity: 0;
            transform: translateY(30);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

</style>