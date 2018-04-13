import React, { Component } from 'react';
import Square from './components/square'
import './App.css';

var done = false

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            board: ['','','','','','','','',''],
            userTurn: 'X',
            counter: 0
        }
    }

    userMark(element, position){
        done = false
        let { board, userTurn, counter } = this.state
        if( element === '' ) {
            // update content of square
             board[position] = userTurn
            // change user turn
            userTurn === 'X' ? userTurn = 'O' : userTurn = 'X'
            counter = counter + 1
            // console.log(counter);
            // console.log(board[0]);
            this.winCondition(board)
            if (done === true){
                board = ['','','','','','','','','']
                userTurn = 'X'
                counter = 0
            }
        }
        this.setState({
            board: board,
            userTurn: userTurn,
            counter: counter

        })
    }

    winCondition(board){
        let winners = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]

        for(let i=0; i<winners.length; i++){
            const [a,b,c] = winners[i]
            if( board[a] !== '' && board[a] === board[b] && board[a] === board[c] ){
                alert( board[a] + " wins!")
                done = true
                break
            } else if ( i === 7 && !board.includes('')){
                alert("No Winner :(.. try again..")
                done = true
            }
        }
        return done
    }

    render(){
        let { board } = this.state
        let squares = board.map( (element,index)=>{
            return(
                <Square key={index} xOrO={element} clicky = {this.userMark.bind(this, element, index)}/>
            )
        })

        return (
          <div className="App">
            <h1> Tic-tac-toe </h1>
            <div id="Board" > { squares } </div>
          </div>
        )
    }
}



export default App;
