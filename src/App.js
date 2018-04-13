import React, { Component } from 'react';
//initializes our components
import Outcome from './components/outcome'
import Square from './components/square'
import ResetButton from './components/resetbutton'
import './App.css';

//initialize variable to track end of game cases
var done = false
//initializes an array to hold the values from our winCondition function
//outcome will hold the value of var 'done' and  the states of all three counters
var things = []

class App extends Component {
    constructor(props){
        super(props)
        //defines our state variables
        this.state = {
            //our blank board before any moves
            board: ['','','','','','','','',''],
            //variable to track whose turn it is
            userTurn: 'X',
            //keeps track of how many times each mark has won or tied
            xCounter: 0,
            yCounter: 0,
            tieCounter: 0
        }
    }

    //function to be run on the click of a square
    //element is the individual item contained in the square
    //position is the index of that square from the mapped board array
    userMark(element, position){
        //ensure done var is reset after a win condition is met
        done = false
        //deconstructs our state items so we can use them as variables in our function
        let { board, userTurn, xCounter, yCounter, tieCounter } = this.state
        //checks if a square is blank
        if( element === '' ) {
            // update content of square with the mark of the current userTurn
             board[position] = userTurn
            // change user turn
            userTurn === 'X' ? userTurn = 'O' : userTurn = 'X'
            //run winCondition function to check if someone won
            this.winCondition(board, xCounter, yCounter, tieCounter)
            // things[0] is "done" varaible
            //checks to see if the game is over
            if (things[0] === true){
                //if so, resets board and userTurn
                board = ['','','','','','','','','']
                userTurn = 'X'
            }
        }
        //modifies state with current values
        this.setState({
            board: board,
            userTurn: userTurn,
            xCounter: things[1],
            yCounter: things[2],
            tieCounter: things[3],

        })
    }

    //check to see if someone won or tied the game
    winCondition(board, xCounter, yCounter, tieCounter){
        //array of winning square indices
        let winners = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]
        //compares the winning square indices to the current board state
        for(let i=0; i<winners.length; i++){
            //breaking up each winning combination into three variables
            const [a,b,c] = winners[i]
            //checking that the first position checked isn't blank
            //seeing if the first position value is equal to the values at the next two indices
            if( board[a] !== '' && board[a] === board[b] && board[a] === board[c] ){
                //telling which mark won
                alert( board[a] + " wins!")
                //telling the game it is over
                done = true
                //increasing the X win counter by 1 if the winner was X
                if ( board[a] === 'X'){
                    xCounter++
                } else {
                    //increasing O counter by 1 if the winner was O
                    yCounter++
                }
                //breaking out of the loop if there was a winner
                break
            //checking to see if board is full (a tie)
            } else if ( i === 7 && !board.includes('')){
                alert("No Winner :(.. try again..")
                //telling the game it is over
                done = true
                //increasing tie counter by 1
                tieCounter++
            }
        }
        //putting all our winning outcomes into one array so we can return it
        things = [done, xCounter, yCounter, tieCounter]
        //passing this back to the userMark function
        return things
    }
    //makes a function to reset the game scores
    resetIt(){
        window.location.reload()
    }



    render(){
        //deconstructs the board so we can map over it
        let { board } = this.state
        //maps over the board array and places a Square component in each index
        let squares = board.map( (element,index)=>{
            return(
                //passes the Square component an element to display and a funtion to use on click
                <Square key={index} xOrO={element} clicky = {this.userMark.bind(this, element, index)}/>
            )
        })

        return (
          <div className="App">
            <h1> Tic-tac-toe </h1>
            <div id="Board" > { squares } </div>
        <br/>
        <h3> Scoreboard: </h3>
            <Outcome x={this.state.xCounter} y= {this.state.yCounter} tie={this.state.tieCounter}/>
            <br/>
            <ResetButton clickit = {this.resetIt.bind(this)}/>
          </div>
        )
    }
}



export default App;
