import React from "react";
import { memo } from "react";


/*
開發網站時，通常會讓子元件依附父元件state或 event,
在父元件宣告state,event ,利用props 將state,event 傳送給子元件
當使用React.memo()包裝函數組件時，會記住組件的渲染結果，只有組件的props 發生變化時,才會re-render。
*/ 

const MyMemo=memo(({qty,addQty})=>{
    console.log("...子元件渲染");
    return(
        <div>
            <p>My Memo</p>
            <button onClick={addQty}>~~增加訂購數量~~</button>
            {qty.map((q,index)=>{
                return <p key={index}>{q}</p>
            })}
       </div>
    );
});

export default MyMemo;