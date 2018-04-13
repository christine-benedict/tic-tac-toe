import React, {Component} from 'react'

//component that displays score count
class Outcome extends Component{
    render(){
        return(
            //displays list of wins for X & Y and ties:
            // takes argument from app.js render/return section
            <div>X Wins: {this.props.x}<br/>
            O Wins: {this.props.y}<br/>
            Ties: {this.props.tie}<br/>
            </div>
        )
    }
}

export default Outcome
