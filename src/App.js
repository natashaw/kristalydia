import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tween, Timeline, Controls} from 'react-gsap';
import Plx from 'react-plx';
import './App.scss';

import { Sidebar } from './assets/js/Sidebar';

import welcome from './assets/img/welcome.gif';

const Homepage = () => (<Container fluid>
    <Row id="header">
        {/* logo */}
        <Col id="containers">
            <Tween from={{
                    opacity: 0,
                    y: -32
                }} to={{
                    opacity: 1,
                    y: 0
                }} duration={1} delay={1}>
                <a href="#"><div className="logo"/></a>
            </Tween>
        </Col>
    </Row>
    <Row id="animation">
        {/* welcome gif */}
        <Col id="containers">
            <Tween from={{
                    opacity: 0,
                    y: -32
                }} to={{
                    opacity: 1,
                    y: 0
                }} duration={1}>
                <div className="welcomeGif">
                    <img src={welcome}/>
                </div>
            </Tween>
        </Col>
    </Row>
    <Row>
        <Col id="containers">
            <Tween from={{
                    opacity: 0,
                    y: 0
                }} to={{
                    opacity: 1,
                    y: 30
                }} duration={0.5}
                delay={2}
                repeat={-1}
                yoyo={true}
            >
                <div className="scrollButton"/>
            </Tween>
        </Col>
    </Row>
</Container>);

class App extends Component {
    render() {
        return (
            <div>
                <Homepage/>
                <Sidebar/>
            </div>
        );
    }
}

export default App;
