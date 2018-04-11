import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            topleft: '',
            topmid: '',
            topright: '',
            midleft: '',
            midmid: '',
            midright: '',
            botleft: '',
            botmid: '',
            botright: '',
            userTurn: 'X',
        }
    }

    userMark(event){
        const attribute = event.target.id
        if( this.state[attribute] == '') {
            this.setState({[attribute]: this.state.userTurn})
            if (this.state.userTurn === 'X'){
                this.setState({userTurn: 'O'})
            } else {
                this.setState({userTurn: 'X'})
            }
        }
    }


    render() {
        return (
          <div className="App">
            <p> Tic-tac-toe </p>
            <Grid className = "grid">
                <Row className="linedrow">
                    <Col onClick={this.userMark.bind(this)} className = "col" id="topleft" xs={4} md={4}>{this.state.topleft}</Col>
                    <Col onClick={this.userMark.bind(this)} className = "midcol" id="topmid" xs={4} md={4}> {this.state.topmid}</Col>
                    <Col onClick={this.userMark.bind(this)} className = "col" id="topright" xs={4} md={4}> {this.state.topright}</Col>
                </Row>
                <Row className="linedrow">
                    <Col onClick={this.userMark.bind(this)} className = "col" id="midleft" xs={4} md={4}>{this.state.midleft} </Col>
                    <Col onClick={this.userMark.bind(this)} className = "midcol" id="midmid" xs={4} md={4}> {this.state.midmid} </Col>
                    <Col onClick={this.userMark.bind(this)} className = "col" id="midright" xs={4} md={4}> {this.state.midright}</Col>
                </Row>
                <Row className="row">
                    <Col onClick={this.userMark.bind(this)} className = "col" id="botleft" xs={4} md={4}> {this.state.botleft}</Col>
                    <Col onClick={this.userMark.bind(this)} className = "midcol" id="botmid" xs={4} md={4}> {this.state.botmid}</Col>
                    <Col onClick={this.userMark.bind(this)} className = "col" id="botright" xs={4} md={4}>{this.state.botright} </Col>
                </Row>
            </Grid>



          </div>
        );
    }
}

export default App;
