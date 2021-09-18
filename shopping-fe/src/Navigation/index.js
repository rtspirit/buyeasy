import React, { Component } from "react";
import "./navigation.css";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Bag } from "react-bootstrap-icons";
import { connect } from "react-redux";

const ROUTES = [
  { displayName: "Home", url: "/" },
  { displayName: "Deal of the day", url: "/dealoftheday" },
  { displayName: "Top Deals", url: "/topdeals" },
  // { displayName: "Top Brands", url: "/topbrands" },
];
class Navigation extends Component {
  goToPage = (route) => {
    this.props.history.push(route);
  };

  goToCart = () => {
    this.props.history.push("/cart");
  };

  goToLogin = () => {
    this.props.history.push("/login");
  };

  goToSignUp = () => {
    this.props.history.push("/signup");
  };

  logout = () => {
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    const { cartStore } = this.props;
    const { items = [] } = cartStore;
    const username = localStorage.getItem("shopping-app-user-name");
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand
              onClick={() => this.goToPage("/")}
              className="pointer"
            >
              BuyEasy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {ROUTES.map((route) => {
                  return (
                    <Nav.Link
                      onClick={() => this.goToPage(route.url)}
                      key={route.displayName}
                    >
                      {route.displayName}
                    </Nav.Link>
                  );
                })}
              </Nav>
              <Nav className="align-items-center">
                {username && (
                  <NavDropdown
                    title={username ? username : ""}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item onClick={() => this.logout()}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
                {!username && (
                  <>
                    <Button
                      variant="secondary"
                      className="d-sm-flex align-items-center"
                      onClick={() => this.goToLogin()}
                    >
                      Login
                    </Button>
                    <Button
                      variant="secondary"
                      className="d-sm-flex align-items-center mx-2"
                      onClick={() => this.goToSignUp()}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
                <Nav.Link>
                  <Button
                    variant="primary"
                    className="d-sm-flex align-items-center"
                    onClick={() => this.goToCart()}
                  >
                    Cart
                    <Bag className="mx-sm-2" />
                    {items.length > 0 ? items.length : ""}
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartStore: state.cart,
  };
};

export default withRouter(connect(mapStateToProps, null)(Navigation));
