import React, {Component} from 'react';
import {Tween, Timeline} from 'react-gsap';
import anime from 'animejs';

import '../../App.scss';

export class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseX: 0,
            mouseY: 0
        }
    }

    _onMouseMove = (e) => {
        const height = this.refs.menuSVG.clientHeight;
        const y = (e.nativeEvent.pageY-height/2);

        this.setState({ mouseY: y })

        // console.log(e.nativeEvent);
    }

    _onMouseEnter = (e) => {
        var tl = anime.timeline({
            duration: 800
        });

        tl
        .add({
            targets: '.sideblob',
            d: [{ value: 'M200 0 C120 300 120 300 200 600 Z', duration: 790, easing: 'easeInElastic(2, 0.5)' }],
            direction: 'normal'
        })
        .add({
            targets: '.sbtn',
            opacity: 1
        });

        // console.log(e.nativeEvent.pageX);
    }

    _onMouseLeave = (e) => {
        var tl = anime.timeline({
            duration: 800
        });

        tl
        .add({
            targets: '.sbtn',
            opacity: 0
        })
        .add({
            targets: '.sideblob',
            d: [{ value: 'M200 0 C200 300 200 300 200 600 Z', duration: 790, easing: 'easeOutExpo' }],
            direction: 'normal'
        }, '-=700');

        // console.log(e.nativeEvent.pageX);
    }

    _clickBarOpen = (e) => {
        var tl = anime.timeline({
            duration: 1300
        });

        tl
        .add({
            targets: '.sbtn',
            duration: 50,
            opacity: 0
        })
        .add({
            targets: '.overlay',
            d: [
                { value: "M 300 0 C 200 50 350 150 350 150 C 400 200 500 250 500 500 C 500 750 700 700 700 800 C 700 950 400 950 400 1000 L 0 1000 L 0 0 Z", duration: 400, easing: 'easeInElastic(2, 2)'},
                { value: "M 3000 0 C 3000 50 3000 100 3000 150 C 3000 300 3000 300 3000 450 C 3000 500 3000 500 3000 550 C 3000 800 3000 900 3000 1000 L 0 1000 L 0 0 Z", duration: 600, easing: 'easeInElastic(2, 2)' }
            ],
            direction: 'normal'
        })
        .add({

        })
        .add({
            targets: '.exitblob',
            duration: 100,
            opacity: 1,
            easing: 'easeInQuad'
        });
    }

    _clickBarClose = (e) => {
        var tl = anime.timeline({
            duration: 1300
        });

        tl
        .add({
            targets: '.exitblob',
            duration: 100,
            opacity: 0,
            easing: 'easeOutQuad'
        })
        .add({
            targets: '.overlay',
            d: [
                { value: "M 300 0 C 200 50 350 150 350 150 C 400 200 500 250 500 500 C 500 750 700 700 700 800 C 700 950 400 950 400 1000 L 0 1000 L 0 0 Z", duration: 400, easing: 'easeOutElastic(2, 2)'},
                { value: "M 0 0 C 0 50 0 100 0 150 C 0 300 0 400 0 500 C 0 600 0 700 0 800 C 0 900 0 950 0 1000 L 0 1000 L 0 0 Z", duration: 600, easing: 'easeOutElastic(2, 2)' }
            ],
            direction: 'normal'
        })
        .add({
            targets: '.sbtn',
            duration: 50,
            opacity: 1
        });
    }

    render() {
        const {mouseY} = this.state;
        const followMouse = { 'top': mouseY }

        return(

            <div id="MenuBulge" onMouseMove={this._onMouseMove}>
                <svg className="left" viewBox="0 0 200 600" width="200px" height="600px"
                    ref="menuSVG"
                    style={followMouse}
                    >
                    <g>
                        <path className="sideblob" d="M200 0 C200 300 200 300 200 600 Z"></path>
                    </g>
                </svg>

                <svg width="auto" height="100%" style={{ transform: `rotateX(180deg)` }}>
                    <path className="overlay" d="M 0 0 C 0 50 0 100 0 150 C 0 300 0 400 0 500 C 0 600 0 700 0 800 C 0 900 0 950 0 1000 L 0 1000 L 0 0 Z"></path>
                </svg>

                <div className="burgers" style={{ display: 'block' }}
                    style={followMouse}
                    onMouseEnter={this._onMouseEnter}
                    onMouseLeave={this._onMouseLeave}
                    >
                    <div className="left">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 15" style={{ transform: `matrix(1, 0, 0, 1, 20, 300)`, display: 'block' }}>
                            <path className="sbtn" d="M689.48,376.38c0,.14-.22,0-.22.18s.19.07.28.06l.67,0a9.8,9.8,0,0,1,2.34-.14c.07,0,.09.2.17.24s.2-.15.33,0c.05.61-.56.27-.64.77-.35.07-.87,0-1,.4-1.37.11-2.52.92-3.82.6a8.77,8.77,0,0,1-2.57.14c-.45,0-.9.08-1.34,0-.08,0-.13-.12-.19-.12a14.89,14.89,0,0,0-1.67.09c-.33,0-.59.12-.95.1s-1.05.06-1.67.09c-.31,0-.62-.12-.92-.07-.06,0-.13.11-.2.12s-.1-.06-.17-.06-.1.11-.14.12c-.19,0-.43,0-.64,0a4.81,4.81,0,0,1-.75,0,2,2,0,0,1-.56-.13c-.07,0-.13-.14-.19-.18s-.14,0-.2,0c-.26-.11-.45-.5-.75-.37-.09-.1-.16-.25-.28-.3a.79.79,0,0,1,.22-.48c0-.22-.13-.34-.08-.48.28-.16.52.1.75,0s.33-.39.53-.29c.08-.06.11-.24.2-.3.35.11.73-.1,1.14-.1.14,0,.28.12.42.13s.06-.11.08-.12a3.19,3.19,0,0,1,.56,0c.24,0,.72.07,1.09.08a11.88,11.88,0,0,1,2.09-.09c.31-.2.81,0,1.2-.1s.87.09,1.31.08C685.79,376.25,687.55,376.3,689.48,376.38Z" transform="translate(-674 -376)" fillRule="evenodd"></path>
                            <path className="sbtn" d="M692.08,383.38c0,.26-.12,0-.17.07s.05.59-.07.58a2.62,2.62,0,0,0-.92.13c-.12.11.1,0,0,.24s-.38,0-.63.08-.68.34-1,.21c0,.26.1.08.14.16a18.09,18.09,0,0,1-3.31.11c-.13,0-.27-.11-.4-.1s-.31.23-.46.24-.61-.11-.91-.11c-.56,0-1.13.29-1.69.29a6.74,6.74,0,0,0-.91,0s-.1-.08-.14,0a1.63,1.63,0,0,0-.06.23s-.09-.26-.14-.28-.34.18-.49.12a2.18,2.18,0,0,0-.71-.3,6.06,6.06,0,0,0-1.57,0,4.76,4.76,0,0,1-1.12.31,3.28,3.28,0,0,0-1.54.08c-.18.08-.37.36-.55.34s-.35-.51-.57-.15c-.17-.39-.17-.54-.39-.34,0-.8.2-.67.3-1a6,6,0,0,1,.21-.91,2.82,2.82,0,0,0,1-.58c.23-.19.31-.15.6-.08.08,0,.14-.16.23-.18.25-.05.52.22.77.2s.29-.2.43-.25.17.1.26.07.08-.21.12-.21.24.13.37.1.26-.24.4-.26.54.19.82.21c.6,0,1.23,0,1.85,0a14.32,14.32,0,0,0,2.92-.33,8.05,8.05,0,0,0,1,0,16.56,16.56,0,0,1,2.4,0,5.91,5.91,0,0,1,3,.67C691.55,382.84,691.85,382.75,692.08,383.38Z" transform="translate(-674 -376)" fillRule="evenodd"></path>
                            <path className="sbtn" d="M693.05,389.21c0,.2-.13,0-.18.06s.06.44-.07.44a3.83,3.83,0,0,0-1,.09c-.13.09.11,0,0,.18s-.4,0-.66.06a2.3,2.3,0,0,1-1.09.16c0,.19.11.06.15.12a26.87,26.87,0,0,1-3.5.08c-.14,0-.28-.08-.42-.08s-.32.17-.49.18c-.32,0-.64-.08-1-.09-.59,0-1.19.22-1.78.21-.34,0-.67,0-1,0,0,0-.11-.06-.15,0a1,1,0,0,0-.06.17s-.09-.19-.15-.21-.36.13-.51.09a2.87,2.87,0,0,0-.75-.23,9,9,0,0,0-1.66,0,6.7,6.7,0,0,1-1.18.24,4.84,4.84,0,0,0-1.63.06c-.19.06-.39.27-.58.26s-.37-.38-.6-.11c-.18-.29-.18-.4-.42-.26,0-.6.21-.5.32-.75a3.47,3.47,0,0,1,.22-.68,3.47,3.47,0,0,0,1.09-.43.74.74,0,0,1,.63-.06c.09,0,.15-.12.24-.14.26,0,.55.17.81.15s.31-.15.46-.19.18.08.27,0,.08-.15.12-.16.26.1.39.07.28-.18.43-.19a6.62,6.62,0,0,1,.87.16c.63,0,1.3,0,2,0a21.09,21.09,0,0,0,3.08-.25c.34,0,.69.07,1,0a24.61,24.61,0,0,1,2.53,0,8.43,8.43,0,0,1,3.22.5C692.48,388.81,692.8,388.74,693.05,389.21Z" transform="translate(-674 -376)" fillRule="evenodd"></path>
                        </svg>

                        <div className="hitarea left" onClick={this._clickBarOpen} style={{ height: 60, width: 60, transform: `matrix(1, 0, 0, 1, 0, 277)`, display: 'block'}}/>
                    </div>
                </div>

                <div className="exitblob" onClick={this._clickBarClose}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="64" height="64"
                        viewBox="0 0 26 26">
                        <path className="exitblob" d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"></path>
                    </svg>
                </div>
            </div>



        )
    }
}
