import React from "react";
import MyMemo from "./MyMemo";

const  MyUseCallback=()=>{
    console.log("父元件渲染");

    const [count,setCount]=React.useState(0);
    const[qty,setQty]=React.useState([]);

    const addCount=()=>{
        setCount((c)=>c+1);
    };

    const addQty=React.useCallback(
        ()=>{
            setQty((q)=>[...q,"新增數量"]);
        },[qty]
    );


    return(
        <div style={{paddingLeft:'3vw'}}>
            <h3>UseCallback</h3>

            {/* 掛上MyMemo 子元件,具有2屬性 */}
            <MyMemo qty={qty} addQty={addQty} />

                <div>
                    <p>count: {count}</p>
                    <button onClick={addCount}> ADD count</button>
                </div>
       </div>
    );
}

export default MyUseCallback;