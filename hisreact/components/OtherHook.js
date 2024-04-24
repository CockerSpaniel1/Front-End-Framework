import MyUseCallback from "./MyUseCallback";
import YourMemo from "./YourMemo";
import MyUseMemo from "./MyUseMemo"

const OtherHook=()=>{
    return (
        <div>
            <h3>OtherHook</h3>
            <hr/>
            <YourMemo/>
            <hr/>
            <MyUseCallback/>
            <hr/>
            <MyUseMemo/>
        </div>
    )
}
export default OtherHook;