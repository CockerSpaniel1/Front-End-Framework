import React from "react";
import MyUseEffect from "./MyUseEffect";
import YourUseEffect from "./YourUseEffect";
import HisUseEffect from "./HisUseEffect";

const Service=()=>{
    return(
        <div>
            <h3 style={{paddingLeft:'3vw'}}>我是Service Page</h3>        
            <hr/>    
            <MyUseEffect/>
            <hr/> 
            <YourUseEffect/>
            <hr/> 
            <HisUseEffect/>
        </div>
    )
};

export default Service;