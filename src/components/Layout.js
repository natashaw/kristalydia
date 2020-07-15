import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
//TODO: styling of background, parallax etc goes here
  <Container>
    {props.children}
  </Container>
)
