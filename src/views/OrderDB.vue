<script setup>
import {db} from "../firebase/config"
import {collection, getDocs, addDoc,getDoc, doc,updateDoc,deleteDoc} from "firebase/firestore"
import {ref,onMounted} from "vue"


onMounted(async()=>{ 
    const fruitColl = collection(db, "Fruit")
    const fruitDoc = await getDocs(fruitColl)
    const fruitList = fruitDoc.docs.map(doc=>doc.data());
    console.log(fruitList)
})

const fruits= ref([])
const fruitName = ref("");
const fruitPrice = ref("");
const fruitQty = ref("");
const fruitID = ref("");

onMounted(async()=>{
    const fruitColl = collection(db, "Fruit")
    const fruitDoc = await getDocs(fruitColl)

    fruitDoc.forEach((fruit)=>{
        fruits.value.push({...fruit.data(),id:fruit.id})
    })
});

const addData = async()=>{
    await addDoc(collection(db, "Fruit"),{
        name:fruitName.value,
        price:fruitPrice.value,
        qty:fruitQty.value,
    }).then(()=>{
        alert("新增資料OK")
        fruitName.value = "";
        fruitPrice.value = "";
        fruitQty.value = "";
    })
}
const searchData = async()=>{
    const docRef = doc(db, "Fruit", fruitID.value)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
        var data = docSnap.data()

        fruitName.value = data["name"];
        fruitPrice.value = data["price"];
        fruitQty.value = data["qty"];
    }
}
const updateData = async()=>{
    const docRef = doc(db, "Fruit", fruitID.value)
    await updateDoc(docRef, {
        name:fruitName.value,
        price:fruitPrice.value,
        qty:fruitQty.value,
    }).then(function(){
        alert("編號:" + fruitID.value + "水果修改完成!!")
        fruitName.value = "";
        fruitPrice.value = "";
        fruitQty.value = "";
        fruitID.value = "";
    })
}

const deleteData = async()=>{
    const docRef = doc(db, "Fruit", fruitID.value)
    await deleteDoc(docRef)
    .then(()=>{
        alert("編號:" + fruitID.value + "水果已刪除!!")
    })
}
</script>



<template>
    <div style="float:left">
        <h1>OrderDB</h1>
        <hr>
        <div v-for="f in fruits":key="f.id">
            <span style="color:red">{{ f.id }}</span>
            <pre>
                {{ JSON.stringify(f, null , 6) }}
            </pre>
        </div>

    </div>
    <div style="float:left">
            <input type="text" placeholder="Enter Fruit id" v-model ="fruitID">
            <button @click="searchData">SEARCH</button>
            <hr>
            <input type="text" placeholder="Enter Fruit name" v-model ="fruitName">
            <input type="text" placeholder="Enter Fruit price" v-model ="fruitPrice">
            <input type="text" placeholder="Enter Fruit qty" v-model ="fruitQty">
            <button @click="addData">ADD</button>
            <button @click="updateData">UPDATE</button>
            <button @click="deleteData">DELETE</button>

    </div>
</template>

<style scoped>
    div {padding:2vw;}
    input{display:block}
</style>
