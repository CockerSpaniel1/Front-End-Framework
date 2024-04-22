import React from "react";
import { useState,useEffect } from "react";

const  YourUseEffect=()=>{

    const [count,setCount]=useState(0);
    const [calc,setCalc]=useState(()=>{return 0;});

    const myData={
        code:200,
        msg:'成功',
        info:{
            id:count,
            name:'曾友前',
            age:20
        }
    };

    //每一之都會執行
    useEffect(
        ()=>{
            console.log("Hello,Good Evening!!")
        }
    )
  
    //只執行程式第一次render 時,按下按鈕時,不再執行
    useEffect(
        ()=>{
            console.log('[]',myData);
        },[]
    );


    //按下按鈕,會被執行,因count 的值有變動
    useEffect(
        ()=>{
            console.log('[count]',myData);
        //    console.log('[calc]',myData); //只執行一次,因為按下按鈕時,calc的值沒有變動 
        },
        [count]
        //[calc]
    );


    //['a','b'] 與count 無關,按下按鈕,不再執行
    useEffect(
        ()=>{
            console.log("哈...., 巴度夭...");
        },['a','b']
    );

    return(
        <div style={{paddingLeft:'3vw'}}>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>CALC</button>
            <p>{calc}</p>
       </div>
    );
}

export default YourUseEffect;