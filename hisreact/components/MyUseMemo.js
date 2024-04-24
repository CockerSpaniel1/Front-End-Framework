import React from "react";
import {useState, useMemo} from "react";

const MyUseMemo=()=>{
    const [count, setCount] = useState(0)
    const [qty, setQty] =useState([])
    
    const addCount=()=>{
        setCount((c)=>c+1)
    }
    const addQty=()=>{
        setQty((q)=>[...q, "新增數量"]);
    }

    return(
        <div>
            <p></p>
            <button onClick={addQty}>新增數量</button>
            {qty.map((q,index)=>{
                return <p key={index}>{q}</p>
            })}
        </div>
        )
    }
    export default MyUseMemo;


