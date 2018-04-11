import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
class App extends Component {

    render() {
        return (
          <div className="App">
            <p> Tic-tac-toe </p>
            <Grid className = "grid">
                <Row className="linedrow">
                    <Col className = "col" id="topleft" xs={6} md={4}> </Col>
                    <Col className = "midcol" id="topmid" xs={6} md={4}> </Col>
                    <Col className = "col" id="topright" xs={6} md={4}> </Col>
                </Row>
                <Row className="linedrow">
                    <Col className = "col" id="topleft" xs={6} md={4}> </Col>
                    <Col className = "midcol" id="topmid" xs={6} md={4}> </Col>
                    <Col className = "col" id="topright" xs={6} md={4}> </Col>
                </Row>
                <Row className="row">
                    <Col className = "col" id="topleft" xs={6} md={4}> </Col>
                    <Col className = "midcol" id="topmid" xs={6} md={4}> </Col>
                    <Col className = "col" id="topright" xs={6} md={4}> </Col>
                </Row>
            </Grid>



          </div>
        );
    }
}

export default App;
