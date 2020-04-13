import React, {Component} from 'react';
import anime from 'animejs';
import Contact from '../js/Contact';

import '../../App.scss';

export class Sidebar extends Component {
    constructor(props) {
        {/*TODO: FIX sidebar disappearing after scrolling down the page*/}
        super(props);
        this.state = {
            mouseX: 0,
            mouseY: 0
        }
    }

    _onMouseMove = (e) => {
        const height = this.refs.menuSVG.clientHeight;
        const y = (e.nativeEvent.clientY-height/2);

        this.setState({ mouseY: y })

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
            targets: '.contactform',
            right: '12%',
            easing: 'easeInElastic(3, 2)',
            opacity: 1

        })
        .add({
            targets: '.logoSidebar',
            opacity: 1,
            top: '15%',
            duration: 100
        })
        .add({
            targets: '.links',
            right: '12%',
            easing: 'linear',
            duration: 200,
            opacity: 1

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
            targets: '.links',
            right: '24%',
            easing: 'linear',
            duration: 200,
            opacity: 0

        })
        .add({
            targets: '.logoSidebar',
            opacity: 0,
            top: '20%',
            duration: 100
        })
        .add({
            targets: '.contactform',
            right: '24%',
            duration: 300,
            easing: 'easeInExpo',
            opacity: 0

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
            <div id="SiteWrapper" onMouseMove={this._onMouseMove}>
                <div id="MenuBulge" >
                    <svg className="sidebar" viewBox="0 0 200 600" width="200px" height="600px"
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

                    <div id="burgers" className="sbtn" style={{ display: 'block' }}
                        style={followMouse}
                        onMouseEnter={this._onMouseEnter}
                        onMouseLeave={this._onMouseLeave}
                        >
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.5 80.8" style={{ transform: `matrix(1, 0, 0, 1, 10, 280)`, display: 'block' }} enable-background="new 0 0 83.5 80.8">
                                <g id="Layer_1">
                            	<g>
                            		<g>
                            			<path fill="#59C9E7" d="M65.6,25.5c-3.5,2.9-4.2,10.5-6.4,13.8c-3.6,5.4-10.9,7-17.4,6.6c-11-0.7-33.3-7.6-31.6,10.1
                            				c1.1,11.9,18.1,18.7,27.7,20.5c7.1,1.4,14.6,1.8,21.3-1c5.2-2.2,9.5-6.2,12.9-10.7c3.7-4.8,6.8-10.3,7.3-16.3
                            				c0.4-5.1-2.8-23-9.8-24C67.9,24.2,66.6,24.6,65.6,25.5z"/>
                            		</g>
                            		<g>
                            			<g>
                            				<path d="M54,3.8C46.3,1.1,37.9,0.6,30,3c-7.5,2.3-13.5,7.6-18.4,13.6c-8.4,10.2-11.8,29-3.5,40.2c8.4,11.3,26,15.9,39.5,14.7
                            					C62.3,70,76.1,56.1,78.4,41.5C81,25.1,68.5,9.6,54,3.8c-1.9-0.8-2.8,2.3-0.9,3.1C69.2,13.3,81,32.5,72.4,49.1
                            					C68.5,56.6,61.9,64,53.8,66.8c-8.2,2.9-17.9,1.4-26-1.1C20.6,63.5,13,59.5,9.2,52.7C5.1,45.1,6.6,35,9.1,27.1
                            					c2.4-7.5,9.6-14.8,16.3-18.7c8.3-4.8,18.8-4.5,27.7-1.5C55.1,7.6,56,4.5,54,3.8z"/>
                            			</g>
                            		</g>
                            		<g>
                            			<path fill="#FFFFFF" d="M65.3,39c0-11.4,0-22.4-14.4-21.8c-7.4,0.3-14.8,0.6-22.1,0.9c-8.8,0.4-9.6,6.4-10.3,14.1
                            				c-0.4,4.1-0.5,8.6,0,12.7c0.3,3.2,2,5.9,3.8,8.5c0.3,0.5,0.7,1,1.2,1.4c0.5,0.4,1.1,0.7,1.7,1c1.3,0.6,2.6,1.1,3.9,1.6
                            				c-2.6-2.3-4.9-12.7,1.2-11.6c9,1.7,18.3,2.1,27.4,1c2.5-0.3,5.3-0.9,6.7-3C65.2,42.6,65.3,40.7,65.3,39z"/>
                            			<g>
                            				<path d="M67.1,39c0-7.1,0.5-16.8-6.2-21.3c-3.8-2.6-8.5-2.4-12.8-2.2c-6.9,0.3-14.2,0-21,1c-9.1,1.3-10.2,9.9-10.7,17.6
                            					c-0.4,6-0.6,12.3,2.5,17.7c2.5,4.4,5,5.7,9.6,7.5c1.8,0.7,3-1.9,1.8-3.1c-1-1.1-1.6-2.6-1.9-4.1c-0.6-2.9-0.2-4.6,3-4.1
                            					c5.9,0.9,11.9,1.5,17.9,1.3C57.5,49.2,66.9,49.2,67.1,39c0.1-2.4-3.6-2.4-3.7,0c-0.1,6.1-4.9,6.1-9.5,6.4
                            					c-3.7,0.3-7.3,0.3-11,0.1c-3.8-0.2-7.6-0.7-11.4-1.3c-1.5-0.2-3-0.6-4.4,0.2c-4.9,2.5-2.5,11.2,0.5,14.3c0.6-1,1.2-2.1,1.8-3.1
                            					c-4.7-1.8-7.8-4.5-9.1-9.7c-1.1-4.3-0.5-9.4-0.2-13.8c0.3-3.2,0.4-7.5,2.7-10c2.9-3.1,8.4-2.3,12.3-2.5
                            					c4.6-0.2,9.2-0.4,13.8-0.6c3.6-0.1,7.7-0.4,10.6,2.2c4.6,4,3.8,12.2,3.8,17.7C63.4,41.4,67.1,41.4,67.1,39z"/>
                            			</g>
                            		</g>
                            		<g>
                            			<g>
                            				<g>
                            					<path d="M31,29.2c3.2-1.3,8.6-0.3,12-0.4c3.9,0,7.8,0,11.7-0.1c2.1,0,2.1-3.2,0-3.2c-4.5,0-9,0-13.5,0.1
                            						c-3.7,0-8.3-0.7-11.8,0.8C27.5,27.2,29.1,30,31,29.2L31,29.2z"/>
                            				</g>
                            			</g>
                            			<g>
                            				<g>
                            					<path d="M31,38.7c3.2-1.3,8.6-0.3,12-0.4c3.9,0,7.8,0,11.7-0.1c2.1,0,2.1-3.2,0-3.2c-4.5,0-9,0-13.5,0.1
                            						c-3.7,0-8.3-0.7-11.8,0.8C27.4,36.8,29.1,39.5,31,38.7L31,38.7z"/>
                            				</g>
                            			</g>
                            			<g>
                            				<g>
                            					<path d="M30.1,34.1c8.2,0,16.4,0,24.5,0c2.1,0,2.1-3.2,0-3.2c-8.2,0-16.4,0-24.5,0C28.1,30.9,28.1,34.1,30.1,34.1L30.1,34.1z"
                            						/>
                            				</g>
                            			</g>
                            		</g>
                            	</g>
                            </g>
                            </svg>

                            <div className="hitarea" onClick={this._clickBarOpen} style={{ height: 60, width: 60, transform: `matrix(1, 0, 0, 1, 0, 270)`, display: 'block'}}/>
                        </div>
                    </div>

                </div>

                <div className="exitblob" onClick={this._clickBarClose}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="64" height="64"
                        viewBox="0 0 26 26">
                        <path className="exitblob" d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"></path>
                    </svg>
                </div>

                <div className="logoSidebar" />

                <div className="contactform" style={{ position: 'fixed' }}><Contact /></div>

                <div className="links" style={{ position: 'fixed', bottom: '24%' }}>
                    <a href="https://www.instagram.com/imeisime/">Instagram</a>
                    <a href="https://www.instagram.com/imeisime/">Also Instagram</a>
                </div>
            </div>



        )
    }
}
