import React, { Component } from 'react';
import Square from './components/square'
import './App.css';
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            board: ['','','','','','','','','',],
            userTurn: 'X',
            counter: 1
        }
    }

    userMark(element, position){

        let {board, userTurn} = this.state
        if(element === '') {
            // update content of square
             board[position] = userTurn

            // change user turn
            userTurn === 'X' ? userTurn = 'O' : userTurn = 'X'

        }
        this.setState({
            board: board,
            userTurn: userTurn,
            counter: this.state.counter + 1
        })


        //console.log(this.state.counter);

        }
        // console.log("topleft is: " + squares.topleft)
        // console.log("sq att: " + squares.attribute);
        // console.log("userturn: " + userTurn);
        //console.log(this.state.topright)

    //     if ((squares.topleft !== '' && squares.topleft === squares.topmid && squares.topleft === squares.topright) || (squares.topleft !== '' && squares.topleft === squares.midleft && squares.topleft === squares.botleft)){
    //             alert(squares.topleft + ' wins!')
    //             window.location.reload()
    //         }
    //     if( ( squares.midmid !== '' && squares.midleft === squares.midmid && squares.midleft === squares.midright) || (squares.midmid !== '' && squares.topleft === squares.midmid && squares.midmid === squares.botright) || (squares.midmid !== '' && squares.topright === squares.midmid && squares.midmid === squares.botleft) || (squares.midmid !== '' && squares.topmid === squares.midmid && squares.midmid === squares.botmid) )  {
    //             alert(squares.midmid + ' wins!')
    //             window.location.reload()
    //         }
    //     if( (squares.botright!== '' && squares.botleft === squares.botmid && squares.botleft === squares.botright) || (squares.botright !== '' && squares.botright === squares.midright && squares.botright === squares.topright) ) {
    //             alert(squares.botright + ' wins!')
    //             window.location.reload()
    //         }
    //         console.log({squares});
    //
    //
    //     if(this.state.counter === 9 ){
    //     alert("No winner! Try again....")
    //     window.location.reload()
    //     }



    //
    // winCondition(event){
    //     console.log("CHANGING");
    //
    //         }


//onMouseOver={this.winCondition.bind(this)}

    render() {
        let {board} = this.state
        let squares = board.map( (element,index) =>{
            return(
                <Square xOrO={element} clicky = {this.userMark.bind(this, element, index)}/>
            )
        })


        return (
          <div className="App">
            <h1> Tic-tac-toe </h1>
            <div id="Board" > { squares } </div>



          </div>
        );
    }
}

export default App;
