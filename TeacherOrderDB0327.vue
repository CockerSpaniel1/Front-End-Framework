<script setup>

import {db } from '../firebase/config';
import { collection,getDocs,addDoc, getDoc,doc,updateDoc,deleteDoc } from 'firebase/firestore';
import{ref,onMounted} from 'vue'

onMounted(async()=>{
    const fruitColl=collection(db,'Fruit');//取得Fruit 集合
    const fruitDoc=await getDocs(fruitColl); //取得Fruit 集合的所有文件
    const fruitList=fruitDoc.docs.map(doc=>doc.data()); //取得每一筆文件,指定給fruitList
    console.log(fruitList);
    console.log(fruitList[0]);
    console.log(fruitList[1]);
    console.log(fruitList[2]);
});


const fruits=ref([]);
const fruitName=ref('');
const fruitPrice=ref('');
const fruitQty=ref('');
const fruitID=ref('');

onMounted(async()=>{
    const fruitColl=collection(db,'Fruit');//取得Fruit 集合
    const fruitDoc=await getDocs(fruitColl); //取得Fruit 集合的所有文件

    //...展開運算子(spread operator) ,陣列合併
    //早前會用concat 語法來合併陣列
    fruitDoc.forEach((fruit)=>{
        fruits.value.push({...fruit.data(),id:fruit.id})
    })
});

//新增資料
const addData=async()=>{
    await addDoc(collection(db,'Fruit'),{
        name:fruitName.value,
        price:fruitPrice.value,
        qty:fruitQty.value
    }).then(()=>{
        alert('新增資料ok');
        fruitName.value='';
        fruitPrice.value='';
        fruitQty.value='';
    })
}

//搜尋資料
const searchData=async()=>{
    const docRef=doc(db,'Fruit',fruitID.value)
    const docSnap=await getDoc(docRef);
    //判斷文件是否存在
    if(docSnap.exists()){
        var data=docSnap.data();
        fruitName.value=data['name'];
        fruitPrice.value=data['price'];
        fruitQty.value=data['qty'];
    }
}

//更新資料
const updateData=async()=>{
    const docRef=doc(db,'Fruit',fruitID.value);
    await updateDoc(docRef,{
        name:fruitName.value,
        price:fruitPrice.value,
        qty:fruitQty.value
    }).then(function(){
        alert("編號：" +fruitID.value + ' 水果修改完成!!');
        fruitName.value='';
        fruitPrice.value='';
        fruitQty.value='';
        fruitID.value='';
    })
}

//刪除資料
const deleteData=async()=>{
    await deleteDoc(doc(db,'Fruit',fruitID.value))
        .then(()=>{
            alert('編號：' + fruitID.value + " 水果已刪除!!");
        });
}

</script>

<template>
    <div style="float: left;">
        <h1>OrderDB</h1>
        <hr />    
        <div v-for="f in fruits" :key="f.id">
            <span style="color: red;">{{ f.id }}</span>
            <pre>
               {{ JSON.stringify(f,null,6) }} 
            </pre>
            <hr />
        </div>  
    </div>

    <div style="float: left;">
        <input type="text" placeholder="enter fruit id" v-model="fruitID">
        <button @click="searchData">SEARCH</button>
        <hr />

        <input type="text" placeholder="enter fruit name" v-model="fruitName">
        <input type="number" placeholder="enter fruit price" v-model="fruitPrice">
        <input type="number" placeholder="enter fruit qty" v-model="fruitQty">
        <button @click="addData">ADD</button>
        <button @click="updateData">UPDATE</button>
        <button @click="deleteData">DELETE</button>
    </div>
</template>

<style scoped>
    div{
        padding: 2.0vw;
    }

    input{
        display: block;
    }

</style>