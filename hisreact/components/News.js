import React from "react";
import {useNavigate} from "react-router-dom";

const News=()=>{
    const navigate=useNavigate()
    const [fruit, setFruit] = React.useState('')
    const mystyle={
        height:'5vh',
        width:'15vw',
        backgroundColor:'green',
        color:'tomato',
        borderRadius:'25px',
        boxShadow:'2px 2px 2px 2px gray'
    }
  
    return(
        <div>
            <h3 style={{paddingLeft:'3vw'}}>最新消息</h3>    
            <hr/>       
            <input type="text" placeholder="Enter Fruit Name" onChange={(e)=>setFruit(e.target.value)}/><br /> 
            <button onClick={()=>{fruit===""?alert("請輸入水果名稱"):navigate(`/Product/${fruit}`)}} style={mystyle}>芒果買一送一，欲購從速</button>
        </div>
    )
};

export default News;