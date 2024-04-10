import React from "react";
import { Component } from "react";

class MyProps extends Component{ //繼承Component

    constructor(props){ //建構子(式)
        super(props);   //呼叫上(父)類別的建構子
    }

    render() {       
        return(
            <div>
                <h3>Welcome to {this.props.subject} (props 的應用)</h3>
            </div>
        )        
    }
}

export default MyProps;