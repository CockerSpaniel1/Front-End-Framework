import React from "react";
import { useState,useMemo } from "react";


/*

React useMemo Hook 傳回一個已被記憶的值，
將記憶視為一個快取的值，可以不用重新計算。
*/
const  MyUseMemo=()=>{
    const [count,setCount]=useState(0);
    const [qty,setQty]=useState([]);
    //const consuming=timeConsuming(count);
    const consuming=useMemo(()=>timeConsuming(count),[count]);

    const addCount=()=>{
        setCount((c)=>c+1);
    }

    const addQty=()=>{
        setQty((q)=>[...q,"新增數量"]);
    }

    return(
        <div>
            <p>My UseMemo</p>
            <button onClick={addQty}> 新增數量 </button>     
            {qty.map((q,index)=>{
                return <p key={index}>{q}</p>;
            })}
            <hr />
            Count:{count}
            <button onClick={addCount}>ADD</button>
            <p>耗時的計算</p>
            {consuming}                 
       </div>
    );
}

export default MyUseMemo;

const timeConsuming=(n)=>{
    console.log("Zzz.....");
    let i=0;
    while(i<1000000000){
        i++;
    }
    return n;
};