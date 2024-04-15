import React from "react"
import { Component } from "react"

class MyProps extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Apple',
            price:0,
            desc:'含有大量的膳食纖維及維他命C',
            origin:'南投'
        }
    }
    render(){
        return(
        <div>
            <h3>Welcom to {this.props.subject} (props的應用)</h3>

            <p>{this.state.name},每公斤<span style={{color:"red"}}>{this.state.price}</span>元,{this.state.desc}</p>

            {/* 
            <button onClick={ ()=>{
                qty>=10?
                setQty(10):
                setQty(qty+1)} }>按一下，提高售價</button> */}

            <button onClick={ ()=>{
                this.state.price>=100?
                this.setState({price:100}):
                this.setState( {price:this.state.price+10} ) }
            }>按一下，提高售價</button>

            <button onClick={ ()=>{
                this.state.price<=0 ?
                this.setState( {price:0} ):
                this.setState( {price:this.state.price-10} ) }
            }>按一下，降低售價</button>
            </div>
        )
    }

}export default MyProps;

class YourProps extends Component{
    render(){
        return(
            <>
                <p>產地:{this.props.origin}</p>
                <a href="https://www.moa.gov.tw/">農業部</a>
            </>
        )
    }
}