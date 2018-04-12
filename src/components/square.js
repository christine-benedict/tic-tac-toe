import React, {Component} from 'react'
import '../App.css';


class Square extends Component{
    render(){
        return(
            <div id="square" onClick={this.props.clicky}>
                <h1>{this.props.xOrO}</h1>
            </div>
        )
    }
}

export default Square
