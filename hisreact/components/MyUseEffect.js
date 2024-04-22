import React from "react";
import {useState, useEffect} from "react";

const MyUseEffect=()=>{
    const [count,setCount] = useState(0);
    const [calc, setcalc] = useState(0);

    useEffect(
        ()=>{
            setcalc(count*2);
            console.log("calc=",calc);
        }, [count]
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

export default MyUseEffect;