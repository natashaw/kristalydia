import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tween} from 'react-gsap';
import {useMediaQuery} from 'react-responsive';

import './App.scss';

import {Sidebar} from './assets/js/Sidebar';
import {SidebarMobile} from './assets/js/SidebarMobile';
import Content from './assets/js/Content';

import welcome from './assets/img/illustration1.svg';
import brackets from './assets/img/brackets.svg';


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1200 })
    return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1199 })
  return isMobile ? children : null
}

class App extends Component {
    constructor(props) {
        super(props);
    }

    _handleScrollToContents = () => {
        window.scrollTo({
            top: this.refs.contents.clientHeight+450,
            behavior: 'smooth'
        })
    }

    render() {
        return (
            <div>
                {/* LANDING SCREEN */}
                <Container fluid>
                <Row id="header">
                    {/* logo */}
                    <Col id="containers" style={{ flexDirection: "row" }}>
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
                            {/* TODO: remove inline styling and set width-height to fit screen size */}
                            <div className="welcomeGif" style={{ width: '100vw', height: '60vh' }}>
                                <img src={welcome}/>
                            </div>
                            <div style={{ display: 'inherit', alignSelf: 'center', width: '350px', marginRight: '1vw' }}>
                                <img src={brackets}/>
                            </div>
                        </Tween>
                    </Col>
                </Row>
                <Row ref="contents">
                    <Col id="containers" style={{ marginBottom: '30vh' }}>
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
                            <div className="scrollButton" onClick={this._handleScrollToContents}/>
                        </Tween>
                    </Col>
                </Row>
                {/* beginning of portfolio content feed */}
                <Row>
                    <Col id="containers" style={{ paddingLeft: '10%', paddingRight: '8%' }}>
                        <Content/>
                    </Col>
                </Row>
            </Container>
                <Desktop>
                    <Sidebar/>
                </Desktop>
                <Mobile>
                    <SidebarMobile/>
                </Mobile>
            </div>
        );
    }
}

export default App;
