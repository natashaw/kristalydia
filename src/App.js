import React, {Component} from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import {Tween, Timeline, Controls} from 'react-gsap';
import styled from 'styled-components';
import './App.scss';

import logo from './assets/img/logo.png';
import one from './assets/img/one.png';
import two from './assets/img/two.png';


const TweenStyled = styled.div`
    .section {
        height: 100vh;
    }

    .mario {
        transition: width 0.3s ease-out;
        width: 200px;
        height: 100px;
        top: 500px;
        position: absolute;
        background-image: url(${one});
        background-size: 200px

        &.hello{
            left: 400px;
            position: absolute;
            width: 200px;
            height: 200px;
            background-image: url(${two});
            background-size: 200px
        }
    }
`;

const TweenComponent = () => (
    <TweenStyled>
        <div className="section" />
        <div id="trigger" />
        <Controller>
            <Scene
                triggerElemet="#trigger"
                duration={150}
                offset={50}
                indicators={true}
            >
            {(progress) => (
                <Timeline
                    target={
                        <div className="mario"></div>
                    }
                    repeat={0}
                    duration={10}
                    totalProgress={progress}
                    paused
                >
                    <Tween
                        from={{ x: '0px'}}
                        to={{ x: '400px'}}
                        ease="Linear.easeOut"
                    />
                    <Tween
                        to={{ opacity: 0 }}
                        ease="Strong.easeOut"
                        delay={0.1}
                    />
                </Timeline>
            )}
            </Scene>
            <div id="trigger1" />
            <Scene
                triggerElemet="#trigger1"
                offset={-280}
                classToggle={['.mario', 'hello']}
                indicators={true}
            >
                <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                >
                    <div className="mario"></div>
                </Tween>
            </Scene>
        </Controller>
        <div className="section" />

    </TweenStyled>
);

class App extends Component {
    render() {
        return (
            <TweenComponent />
        );
    }
}

export default App;
