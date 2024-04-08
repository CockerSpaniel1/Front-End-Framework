/*
//方法1
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1>Welcome to Taiwan Fruit Stand</h1>
        <hr />
        <h3>Let's go, take a fruit journey</h3>
        <p>Visitors can taste the fresh fruits of the season in Taiwan and experience the fun of fruit picking. Let us visit the gardens all over Taiwan.</p>
        <p>In botany, a fruit is the seed-bearing structure in flowering plants that is formed from the ovary after flowering.</p>
    </div>
);*/

/*
//方法2
ReactDOM.render(
    <div>
        <h1>Welcome to Taiwan Fruit Stand</h1>
        <hr />
        <h3>Let's go, take a fruit journey</h3>
        <p>Visitors can taste the fresh fruits of the season in Taiwan and experience the fun of fruit picking. Let us visit the gardens all over Taiwan.</p>
        <p>In botany, a fruit is the seed-bearing structure in flowering plants that is formed from the ovary after flowering.</p>
    </div>,
    document.getElementById('root'),
    // function(){
    //     alert('芒果熱賣中，預購從速');
    // }

    ()=>{
        alert('芒果熱賣中，預購從速');
        document.getElementById('root').style.color='green';
        document.getElementById('root').style.backgroundColor='lightgray';
        document.getElementById('root').style.padding='1.25rem';
    }
);*/

/*
//方法3
const productPage=(
    <div>
        <h1 style={{color:'tomato'}}>Welcome to Taiwan Fruit Stand</h1>
        <hr />
        <nav>
            <ul style={{listStyleType:'none',display:'inline-flex',backgroundColor:'lightgreen',padding:'1.25rem',fontSize:'1.25rem'}}>
                <li style={{margin:'5px'}}>Home</li>
                <li style={{margin:'5px'}}>News</li>
                <li style={{margin:'5px'}}>Product</li>
                <li style={{margin:'5px'}}>Service</li>
            </ul>
        </nav>
        <h3>Let's go, take a fruit journey</h3>
        <p>Visitors can taste the fresh fruits of the season in Taiwan and experience the fun of fruit picking. Let us visit the gardens all over Taiwan.</p>
        <p>In botany, a fruit is the seed-bearing structure in flowering plants that is formed from the ovary after flowering.</p>
        
    </div>
);

//Element 為object
console.log(productPage);   //object
ReactDOM.render(productPage,document.getElementById('root'),
()=>{
    //alert('芒果熱賣中，預購從速');
    document.getElementById('root').style.color='green';
    document.getElementById('root').style.backgroundColor='lightgray';
    document.getElementById('root').style.padding='1.25rem';
}
);
*/

//方法4
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
            <h1 style={mystyle}>Welcome to Taiwan Fruit Stand</h1>
            <hr />
            <h3 style={yourstyle}>Let's go, take a fruit journey</h3>
            <p style={hisstyle}>Visitors can taste the fresh fruits of the season in Taiwan and experience the fun of fruit picking. Let us visit the gardens all over Taiwan.</p>
            <p>In botany, a fruit is the seed-bearing structure in flowering plants that is formed from the ovary after flowering.</p>
        </div>
    );
};

const MyContent=()=>{
    return(
        <div>
            <p style={hisstyle}>Fruits are the means by which flowering plants (also known as angiosperms) disseminate their seeds. Edible fruits in particular have long propagated using the movements of humans and animals in a symbiotic relationship that is the means for seed dispersal for the one group and nutrition for the other; in fact, humans and many animals have become dependent on fruits as a source of food.</p>
            <p>Consequently, fruits account for a substantial fraction of the world's agricultural output, and some (such as the apple and the pomegranate) have acquired extensive cultural and symbolic meanings.</p> 
            <img style={myimg} src='images/fruit2/1.jpg' />
        </div>
    )
};

const hisstyle={
    color:'red',
    border:'3px red solid',
    padding:'1.25rem',
};

const myimg={
    width:'25%',
    borderRadius:'50%',
};

const page=(
    <>
    <MyHeader />
    <MyContent />
    </>
);


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <div>
    //    <MyHeader />
    //     <MyContent />
    // </div>

    page    
);
