import React from "react";
import {useState, useEffect} from "react";

const YourUseEffect=()=>{
    const [count,setCount] = useState(0);
    const [calc, setcalc] = useState( ()=>{return 0;});
    
    const myData={
        code:200,
        msg:"",
        info:{
            id:count,
            name:"曾友前",
            age:20
        }
    }

    useEffect(
        ()=>{
            console.log("Hello, Good Evening!!");
        }
    );
    useEffect(
        ()=>{
            console.log("[]", myData);
        }, []
    );
    useEffect(
        ()=>{
            console.log("[count]", myData);
        }, [count]
    );
    useEffect(
        ()=>{
            console.log("巴度夭");
        }, ['a', 'b']
    );

    return(
        <div>
            <h3 style={{paddingLeft:'3vw'}}></h3>            
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>CALC</button>
            <p>{calc}</p>

        </div>
    )
};

export default YourUseEffect;