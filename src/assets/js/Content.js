import React, {Component} from 'react';
import {Card, Badge} from 'react-bootstrap';
import styled from 'styled-components';
import { Parallax } from "react-parallax";
import Plx from 'react-plx';

import '../../App.scss';
import data from '../js/projectmap.json';

const CardText = styled.div({
    zIndex: 7,
    transform: "translate3d(100px,250px,0)",
    transition: "transform 350ms ease",
    opacity: 0,
});

const DisplayOver = styled.div({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: 6,
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
});

const Hover = styled.div({
    cursor: "pointer",
    [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(63,146,191,0.5)",
    },
    [`:hover ${CardText}`]: {
    transform: "translate3d(100px,200px,0)",
    opacity: 1,
    },
});

const scrollDelay = [
    {
        start: '50vh',
        duration: '30vh',
        easing: 'easeInQuad',
        properties: [
          {
            startValue: 0,
            endValue: -15,
            unit: 'vh',
            property: 'translateY',
          },
        ],
      },

];

export default class Content extends Component {
    render() {
        const projectfeed = data.map((data) => {

            return (
                <Hover>
                    <Plx
                        className='contentscroll'
                        parallaxData={ scrollDelay }
                    >
                        <Card key= {data.id} id="post">
                            <Parallax bgImage={data.imgUrl} strength={150}>
                                <Card.Body className="post">
                                    <DisplayOver>
                                        <CardText>
                                            <Card.Title><a href={data.behanceUrl}>{data.title}</a></Card.Title>
                                            <Card.Text>
                                                {/*TODO: fix responsiveness of card width*/}
                                                <h2><Badge variant="success">{data.tags}</Badge></h2>
                                            </Card.Text>
                                        </CardText>
                                    </DisplayOver>

                                </Card.Body>
                            </Parallax>
                        </Card>
                    </Plx>
                </Hover>
            )
        })

        return( <div>{projectfeed}</div> )
    }
}
