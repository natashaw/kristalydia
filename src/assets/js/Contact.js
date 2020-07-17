import React, {Component} from 'react';
import {Button, Container, Form} from 'react-bootstrap';

import '../../App.scss';

const Emoji = props => (<span className="emoji" role="img" aria-label={props.label
        ? props.label
        : ""} aria-hidden={props.label
        ? "false"
        : "true"}>
    {props.symbol}
</span>)

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
}

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            message: '',
            errors: {
                fullName: '',
                email: '',
                message: ''
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'fullName':
                errors.fullName = value.length < 2
                    ? "Text is too short"
                    : '';
                break;
            case 'email':
                errors.email = validEmailRegex.test(value)
                    ? ''
                    : 'Please enter a valid e-mail address';
                break;
            case 'message':
                errors.message = value.length < 10
                    ? 'Message is too short'
                    : '';
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    };

    render() {
        const { fullName, email, message, errors } = this.state;

        return (<Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 405.9 62" enable-background="new 0 0 405.9 62" style={{ position: 'relative', width: '40vh' }}>
            	<g>
            		<path d="M61.5,49.5c83.5-0.9,167.1-3.1,250.7-1.5c22.7,0.4,45.7,0.9,68.3-1.7c1.4-0.2,1.4-2.3,0-2.2C340.6,48.6,300,45,260,44.9
            		c-41.9,0-83.9,1.2-125.9,1.7c-24.2,0.3-48.4,0.5-72.7,0.7C60.1,47.4,60.1,49.6,61.5,49.5L61.5,49.5z"/>

            		<path d="M14.1,36.9c0.3,18.3,41.7,10.4,32.7-10.6c-3.4-7.8-12.9-11.8-21-10.3C14.9,18.1,14.2,27.8,14.1,36.9
            		c0,1.4,2.2,1.4,2.2,0c0.1-6.4-0.4-14.2,6.3-17.6c5.7-2.9,13.7-1.3,18.4,2.7c7.5,6.4,5.4,16.2-2.9,20.5c-6,3-21.6,4.8-21.8-5.6
            		C16.2,35.5,14,35.5,14.1,36.9z"/>

            		<path d="M23.5,28.2c1.4,0,1.4-2.2,0-2.2C22.1,26.1,22.1,28.2,23.5,28.2L23.5,28.2z"/>

            		<path d="M34.1,26.5c1.4,0,1.4-2.2,0-2.2C32.7,24.3,32.7,26.5,34.1,26.5L34.1,26.5z"/>

            		<path d="M24.6,36.5c4.8,1.9,9.9,0.9,13.8-2.3c1.1-0.9-0.5-2.4-1.5-1.5c-3.4,2.8-7.7,3.3-11.7,1.8C23.9,33.8,23.3,36,24.6,36.5
            		L24.6,36.5z"/>
            	</g>
            </svg>
            <div className="sidebarTitle">don't be a stranger, say hello!</div>
            <br/><br/>
            <Form name="contact" onSubmit={this.handleSubmit} data-netlify="true" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <Form.Group>
                    <Form.Label>Your Name< /Form.Label>
                        <Form.Control type="text" name="fullName" placeholder="First Name Last Name" required="required" isInvalid={errors.fullName} onChange={this.handleChange}/>
                        <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="text" name="email" placeholder="lorem@ipsum.com" required="required" isInvalid={errors.email} onChange={this.handleChange}/>
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" rows="5" required="required" isInvalid={errors.message} onChange={this.handleChange}/>
                        <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>)
            //TODO: Routing of message to personal inbox
    }
}

export default Contact;
