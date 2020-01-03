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

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: null,
            message: null,
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
                    ? 'Minimum number of characters not met'
                    : '';
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }

    render() {
        const {errors} = this.state;

        return (<Container>
            <h2>Don't be a stranger
                <Emoji symbol="🙋‍♀️"/></h2>
            <br/>
            <Form onSubmit={this.handleSubmit}>
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
            //TODO: Message for successful message submission
            //TODO: Protection from spam
            //TODO: Routing of message to personal inbox
    }
}

export default Contact;
