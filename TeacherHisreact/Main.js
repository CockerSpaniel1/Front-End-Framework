import React from "react";
import MyState from "./MyState"; 
import MyProps from "./MyProps";

export default function Main(){
    const mystyle={
        paddingLeft:'3vw',
        color:'gray'
    }

    const currentFruit=['Mango','Watermelon','Banana','龍眼','芭樂'];
    const d=new Date();
    const myMonth=d.getMonth() +1; // 1 月傳回 0

    return(
        <main style={mystyle}>
        <p style={{color:'tomato'}}>Let's go, take a fruit journey</p>

        <p>現在是 {myMonth} 月 | 當季賀呷水果：{currentFruit.map((e)=>(<li>{e}</li>))}</p>

        <p>Visitors can taste the fresh fruits of the season in Taiwan and experience the fun of fruit picking. Let us visit the gardens all over Taiwan.</p>

        <div>
            <MyState />
            <MyProps subject="Taiwan Fruit Stand"/>
        </div>

        </main>
    )
}