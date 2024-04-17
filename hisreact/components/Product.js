import React from "react";
import {useParams} from "react-router-dom";

const Product=()=>{
    let {fruitName} = useParams();
    
    return(
        <div>
            <h3 style={{paddingLeft:'3vw'}}>台灣水果</h3>  
            <hr/>
            <p>{fruitName}</p>
            

        </div>
    )
};

export default Product;