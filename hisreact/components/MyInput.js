import React from "react";

const MyInput=()=>{
    const [fruit,setFruit] = React.useState('');
    const [price,setPrice] = React.useState(0);
    const [qty,setQty] = React.useState(0);
    const [total, setTotal] = React.useState(0);

    function showFruit(e){
        setFruit(e.target.value)
    }

    return(
        <div>
            <input type="text" placeholder="Enter Fruit" onChange={showFruit} />
            <span>{fruit}</span><br/>

            <input type="number" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)} />
            <span>{price}</span><br/>

            <input type="number" placeholder="Enter qty" onChange={(e)=>setQty(e.target.value )} />
            <span>{qty}</span><br/>
            
            <button onClick={()=>setTotal(price*qty)}>Order</button>
            <span>總計:{total}</span>


        </div>
    )
} export default MyInput;