import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap';

import logo from '../assets/logo.svg';

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)

export const NavigationBar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
            <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            {' Ime Kristalydia'}
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="contact">
                        <Emoji symbol="👋"/> say hello
                    </Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
    </Navbar>
)
