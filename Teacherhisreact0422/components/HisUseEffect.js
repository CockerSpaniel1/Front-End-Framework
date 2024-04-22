import React from "react";

const  HisUseEffect=()=>{
    const [data,setData]=React.useState([]);

    React.useEffect(function(){
        fetch('https://apiservice.mol.gov.tw/OdService/download/A17000000J-030243-YTl')
        .then(res=>res.json())
        .then(d=>setData(d))
        console.log('擷取資料....',data);
    },[data]
);

    const element=data.map((d,index)=>(
        <div key={index} className="about-div">
            <p>{d.年度}<br /><span style={{color:'red'}}>{d.經濟成長率}</span></p>
        </div>
    ));

    return(
        <div>
            <h4>Fetch Data</h4>
            {element}

            <pre>
                {JSON.stringify(data,null,6)}
            </pre>
       </div>
    );
}

export default HisUseEffect;