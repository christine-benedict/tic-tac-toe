import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            topleft: '',
            topmid: '',
            userTurn: 'X',
        }
    }

    userMark(event){
        const attribute = event.target.id
        this.setState({[attribute]: this.state.userTurn})
    }

    newPlayer(event){
        console.log(this.state.userTurn);
        if (this.state.userTurn === 'X'){
            console.log("If userturn is X");
        this.setState({userTurn: 'O'})
        } else {
        this.setState({userTurn: 'X'})

        }
    }

    render() {
        return (
          <div className="App">
            <p> Tic-tac-toe </p>
            <Grid onClick={this.newPlayer.bind(this)} className = "grid">
                <Row className="linedrow">
                    <Col onClick={this.userMark.bind(this)} className = "col" id="topleft" xs={4} md={4}>{this.state.topleft}</Col>
                    <Col onClick={this.userMark.bind(this)} className = "midcol" id="topmid" xs={4} md={4}> {this.state.topmid}</Col>
                    <Col className = "col" id="topright" xs={4} md={4}> </Col>
                </Row>
                <Row className="linedrow">
                    <Col className = "col" id="topleft" xs={4} md={4}> </Col>
                    <Col className = "midcol" id="topmid" xs={4} md={4}> </Col>
                    <Col className = "col" id="topright" xs={4} md={4}> </Col>
                </Row>
                <Row className="row">
                    <Col className = "col" id="topleft" xs={4} md={4}> </Col>
                    <Col className = "midcol" id="topmid" xs={4} md={4}> </Col>
                    <Col className = "col" id="topright" xs={4} md={4}> </Col>
                </Row>
            </Grid>



          </div>
        );
    }
}

export default App;
