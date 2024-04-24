import React from "react";

import YourMemo from "./YourMemo";
import MyUseCallback from "./MyUseCallback";
import MyUseMemo from "./MyUseMemo";

const  OtherHook=()=>{
    return(
        <div style={{paddingLeft:'3vw'}}>
            <h3>Other Hook</h3>
            <hr />
            <YourMemo />

            <hr />
            <MyUseCallback />

            <hr />
            <MyUseMemo />
       </div>
    );
}

export default OtherHook;