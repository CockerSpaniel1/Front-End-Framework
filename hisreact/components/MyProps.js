import React from "react"
import { Component } from "react"

class MyProps extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(<div>
            <h3>Welcom to {this.props.subject} </h3>
        </div>
        )
    }

}

export default MyProps;