//方法1
// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <div>
    //     <h1>welcomte to Taiwan Fruit Stand</h1>
    //     <p>In botany, a fruit is the seed-bearing structure in flowering plants that is formed from the ovary after flowering.

    //     Fruits are the means by which flowering plants (also known as angiosperms) disseminate their seeds. Edible fruits in particular have long propagated using the movements of humans and animals in a symbiotic relationship that is the means for seed dispersal for the one group and nutrition for the other; in fact, humans and many animals have become dependent on fruits as a source of food. Consequently, fruits account for a substantial fraction of the world's agricultural output, and some (such as the apple and the pomegranate) have acquired extensive cultural and symbolic meanings.
    //     </p>
//     </div>)

//方法2-----------------------------------------------------------------------------------
// ReactDOM.render(
//     <div>
//         <h1>welcomte to Taiwan Fruit Stand</h1>
//         <p>In botany, a fruit is the seed-bearing structure in flowering plants that is formed from the ovary after flowering.</p>
//     </div>,
//     document.getElementById('root'),
//     // function(){
//     //     alert('芒果熱賣中')
//     // }
//     ()=>{
//         alert('芒果熱賣中，預購從速')
//         document.getElementById('root').style.color = "green";
//         document.getElementById('root').style.backgroundColor = "lightgrey"
//     }
// )

//方法3----------------------------------------------------------------------------------
// const productPage=(
//     <div >
//          <h1 style={{color:'tomato'}}>welcomte to Taiwan Fruit Stand</h1>
//          <p>In botany, a fruit is the seed-bearing structure in flowering plants that is formed from the ovary after flowering.</p>
//          <nav>
//             <ul style={{listStyleType:'none', display:'inline-flex',backgroundColor:'lightgreen', padding:'1.25rem'}}>
//                 <li style={{margin:'5px'}} >Home</li>
//                 <li style={{margin:'5px'}}>News</li>
//                 <li style={{margin:'5px'}}>Product</li>
//                 <li style={{margin:'5px'}}>Service</li>
//             </ul>
//          </nav>
//          <p>In common language usage, "fruit" normally means the fleshy seed-associated structures (or produce) of plants that typically are sweet or sour and edible in the raw state, such as apples, bananas, grapes, lemons, oranges, and strawberries. In botanical usage, the term "fruit" also includes many structures that are not commonly called "fruits", such as nuts, bean pods, corn kernels, tomatoes, and wheat grains.
//         </p>
//     </div>
// );

// console.log(productPage);
// ReactDOM.render(
//     productPage,
//     document.getElementById('root'),
//     ()=>{
//             document.getElementById('root').style.color = "green";
//             document.getElementById('root').style.backgroundColor = "lightgrey";
//             document.getElementById('root').style.padding = "1.25rem";

//         }

// )

//方法4----------------------------------------------------------------------------------
const MyHeader=()=>{
    const mystyle={
        color:'gold',
        backgroundColor:'tomato',
        padding:'1.5rem',
        fontSize:'1.75rem'
    };
    const yourstyle={
        color:'green',
    };
    return(
        <div>
          <h1 style={mystyle}>welcomte to Taiwan Fruit Stand</h1>
          <h3 style={yourstyle}>Let's go, take a fruit journey</h3>
          <p style={hisstyle}>In botany, a fruit is the seed-bearing structure in flowering plants that is formed from the ovary after flowering.</p>
          

          </div>
    )
}

const hisstyle={
    color:'red',
    border:'1px red solid',
}

const MyContent=()=>{
    return(
        <div>
            <p style={hisstyle}>In common language usage, "fruit" normally means the fleshy seed-associated structures (or produce) of plants that typically are sweet or sour and edible in the raw state, such as apples, bananas, grapes, lemons, oranges, and strawberries. In botanical usage, the term "fruit" also includes many structures that are not commonly called "fruits", such as nuts, bean pods, corn kernels, tomatoes, and wheat grains.</p>
            <img src="apple.jpg" style={myimg} />
        </div>
    )
};

const myimg={
    width:'25%',
    borderRadius:'50%'
};

const page=(
    <>
        <MyHeader />
        <MyContent/>
    </>
)

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <div>
    //     <MyHeader />
    //     <MyContent/>
    // </div>
    page
);

