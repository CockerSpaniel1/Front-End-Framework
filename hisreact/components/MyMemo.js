import {memo} from "react";

const MyMemo=memo(({qty, addQty})=>{
    console.log("...子元件渲染")
    return(
        <div>
            <p>My Memo</p>
            <button onClick={addQty}>增加訂購數量</button>
            {qty.map( (q, index) => {
                return <p key={index}>{q}</p>
                    }
                )
            }
        </div>
    )
});
export default MyMemo;