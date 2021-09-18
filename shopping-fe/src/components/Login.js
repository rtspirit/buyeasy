import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { LOGIN_URL } from "../API";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailID: "",
      password: "",
    };
  }

  goToSignUp = () => {
    this.props.history.push("/signup");
  };

  inputEmailID = (value) => {
    this.setState({ emailID: value });
  };

  inputPassword = (value) => {
    this.setState({ password: value });
  };

  login = () => {
    const { emailID, password } = this.state;
    const URL = LOGIN_URL();
    axios
      .post(URL, { email: emailID, password })
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
      <Container className="pt-4">
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => this.inputEmailID(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => this.inputPassword(e.target.value)}
            />
          </Form.Group>
          <div
            className="d-sm-flex text-decoration-underline cursor-pointer"
            onClick={() => this.goToSignUp()}
          >
            <h6>No account ? Click here to Sign Up!</h6>
          </div>
          <Button variant="primary" type="submit" onClick={this.login}>
            Sign In
          </Button>
        </div>
      </Container>
    );
  }
}

export default withRouter(Login);
