import React from "react"
import {useState} from "react"

const MyState=()=>{
    const [qty,setQty] = useState(0);

    return(
        <div>
            <h3>Taiwan Fruit Stand (state的應用)</h3>
            <hr/>
            <p style={{width:"20%", textAlign:"center"}}>{qty}</p>

            <button onClick={ ()=>{qty>=10?setQty(10):setQty(qty+1)} }>按一下，增加訂單數量</button>
            <button onClick={ ()=>{qty<=0?setQty(0):setQty(qty-1)} }>按一下，減少訂單數量</button>
        </div>
    )
}
export default MyState;