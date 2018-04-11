import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            squares: {
                topleft: '',
                topmid: '',
                topright: '',
                midleft: '',
                midmid: '',
                midright: '',
                botleft: '',
                botmid: '',
                botright: ''
            },
            userTurn: 'X',
        }
    }

    userMark(event){
        const attribute = event.target.id
        //console.log(this.state.topleft)

        let {squares, userTurn} = this.state
        if( squares[attribute] === '') {
            // update content of square
            squares[attribute] = userTurn

            // change user turn
            // TODO: Change this to a turnary
            if (userTurn === 'X'){
                userTurn = "O"
            } else {
                userTurn = "X"
            }
        }
        this.setState({
            squares: squares,
            userTurn: userTurn
        })
        // console.log("topleft is: " + squares.topleft)
        // console.log("sq att: " + squares.attribute);
        // console.log("userturn: " + userTurn);
        //console.log(this.state.topright)

        if ((squares.topleft !== '' && squares.topleft === squares.topmid && squares.topleft === squares.topright) || (squares.topleft !== '' && squares.topleft === squares.midleft && squares.topleft === squares.botleft)){
                alert(squares.topleft + ' wins!')
                window.location.reload()
            }
        if(( squares.midmid !== '' && squares.midleft === squares.midmid && squares.midleft === squares.midright) || (squares.midmid !== '' && squares.topleft === squares.midmid && squares.midmid === squares.botright) || (squares.midmid !== '' && squares.topright === squares.midmid && squares.midmid === squares.botleft) || (squares.midmid !== '' && squares.topmid === squares.midmid && squares.midmid === squares.botmid)){
                alert(squares.midmid + ' wins!')
                window.location.reload()
            }
        if(squares.botleft !== '' && squares.botleft === squares.botmid && squares.botleft === squares.botright){
                alert(squares.botleft + ' wins!')
                window.location.reload()
            }
    }

    //
    // winCondition(event){
    //     console.log("CHANGING");
    //
    //         }


//onMouseOver={this.winCondition.bind(this)}

    render() {
        let {squares} = this.state
        return (
          <div className="App">
            <p> Tic-tac-toe </p>
            <Grid className = "grid" >
                <Row className="linedrow">
                    <Col onClick={this.userMark.bind(this)} className = "col" id="topleft" xs={4} md={4}>{this.state.squares.topleft}</Col>
                    <Col onClick={this.userMark.bind(this)} className = "midcol" id="topmid" xs={4} md={4}> {squares.topmid}</Col>
                    <Col onClick={this.userMark.bind(this)} className = "col" id="topright" xs={4} md={4}> {squares.topright}</Col>
                </Row>
                <Row className="linedrow">
                    <Col onClick={this.userMark.bind(this)} className = "col" id="midleft" xs={4} md={4}>{squares.midleft} </Col>
                    <Col onClick={this.userMark.bind(this)} className = "midcol" id="midmid" xs={4} md={4}> {squares.midmid} </Col>
                    <Col onClick={this.userMark.bind(this)} className = "col" id="midright" xs={4} md={4}> {squares.midright}</Col>
                </Row>
                <Row className="row">
                    <Col onClick={this.userMark.bind(this)} className = "col" id="botleft" xs={4} md={4}> {squares.botleft}</Col>
                    <Col onClick={this.userMark.bind(this)} className = "midcol" id="botmid" xs={4} md={4}> {squares.botmid}</Col>
                    <Col onClick={this.userMark.bind(this)} className = "col" id="botright" xs={4} md={4}>{squares.botright} </Col>
                </Row>
            </Grid>



          </div>
        );
    }
}

export default App;
