import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { SIGN_UP_URL } from "../API";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
    };
  }

  inputName = (value) => {
    this.setState({ name: value });
  };

  inputPassword = (value) => {
    this.setState({ password: value });
  };

  inputEmail = (value) => {
    this.setState({ email: value });
  };

  signUpWithData = () => {
    const { name, email, password } = this.state;
    const URL = SIGN_UP_URL();
    axios
      .post(URL, { name, email, password })
      .then((res) => {
        // send the values in user store
        localStorage.setItem("shopping-app-user-token", res.data.token);
        localStorage.setItem("shopping-app-user-name", res.data.user.name);
        localStorage.setItem("shopping-app-user-email", res.data.user.email);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("error");
      });
  };

  render() {
    return (
      <Container className="my-4">
        <h3>Sign up for a new account!</h3>
        <div>
          <Form.Text className="text-muted">
            We'll never share your data with anyone else.
          </Form.Text>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => this.inputName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email"
              onChange={(e) => this.inputEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => this.inputPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Re-enter Password</Form.Label>
            <Form.Control type="password" placeholder="Re-enter Password" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.signUpWithData}>
            Sign Up
          </Button>
        </div>
      </Container>
    );
  }
}

export default SignUp;
