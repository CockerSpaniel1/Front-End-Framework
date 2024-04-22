import React from "react"
import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import News from "./News"
import Product from "./Product"
import Header from "./Header"
import Service from "./Service"
import Error from "./Error"

const MyRouter=(props)=>{

    let mystyle={
        color:"black"
    };

    return(
        <BrowserRouter>
        
        <nav>
            <div>
                {/* <Link to="/" className="link-to">Home</Link>
                <Link to="/About" className="link-to">About</Link>
                <Link to="/News" className="link-to">News</Link>
                <Link to={`/Product/${props.fruit}`}  className="link-to">Product</Link>
                <Link to="/Service" className="link-to">Service</Link> */}
                
                <NavLink to="/" className="link-to" style={({isActive})=>isActive?mystyle:undefined}>Home</NavLink>
                <NavLink to="/About" className="link-to" style={({isActive})=>isActive?mystyle:undefined}>About</NavLink>
                <NavLink to="/News" className="link-to" style={({isActive})=>isActive?mystyle:undefined}>News</NavLink>
                <NavLink to={`/Product/${props.fruit}`}  className="link-to" style={({isActive})=>isActive?mystyle:undefined}>Product</NavLink>

                <NavLink to="/Service" className="link-to" style={({isActive})=>isActive?mystyle:undefined}>Service</NavLink>
                </div>
        </nav>

        <Header/>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/News" element={<News />} />
            <Route path="/Product/:fruitName" element={<Product />} />
            <Route path="/Service" element={<Service />} />
            <Route path="*" element={<Error />} />
        </Routes>
        </BrowserRouter>
    )
} 
export default MyRouter;