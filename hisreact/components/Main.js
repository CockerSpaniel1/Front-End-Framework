import React from "react";

export default function Main(){
    const mystyle={
        paddingLeft: "3vw",
        color:'gray'
    }
const currentFruit =["Mango","Watermelon","Banana","Longan", "Guava"]
const d = new Date();
const myMonth =d.getMonth()+1

    return(
        <main style={mystyle}>
            <p style={{color:"tomato"}}>Let's go, take a fruit journey</p>
            <p>現在是 {myMonth} | 當季水果 {currentFruit.map((e)=>(<li>{e}</li>))}</p>
            <p>Visitors can taste the fresh fruits of the season in Taiwan and experience the fun of fruit picking. Let us visit the gardens all over Taiwan.
            </p>
        



        </main>
    )
}