import React, { Component } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Cart2, Trash } from "react-bootstrap-icons";
import PaypalExpressBtn from "react-paypal-express-checkout";
import "./customStyles.css";
import { bindActionCreators } from "redux";
import { removeItemsFromCart, emptyCart } from "../actions/cart";
import Alert from "react-bootstrap/Alert";
import { withRouter } from "react-router-dom";

const client = {
  sandbox:
    "AeGdQCqJE6GG_w6VL4PuEy3VQE3QmKytm9bwGaNl6o-n1NVXs0WglOseDRqJi8ZGDdRlIr_uqoIgRZjG",
  production: "",
};

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentDone: false,
      paymentError: false,
      paymentInfo: {},
    };
  }

  componentDidMount() {
    const isAuthenticatedUser = localStorage.getItem("shopping-app-user-token");
    if (!isAuthenticatedUser) {
      this.props.history.push("/login");
    }
  }

  onSuccess = (payment) => {
    this.setState({
      paymentDone: true,
    });
    this.props.emptyCart();
    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  };

  onCancel = (data) => {
    // User pressed "cancel" or close Paypal's popup!
    console.log("The payment was cancelled!", data);
    this.setState({
      paymentError: true,
    });
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  };

  onError = (err) => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log("Error!", err);
    this.setState({
      paymentError: true,
    });
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  };

  removeFromCart = (item) => {
    this.props.removeItemsFromCart(item);
  };

  render() {
    const { cartStore } = this.props;
    const { paymentDone = false, paymentError = false } = this.state;
    const total_bill = cartStore.items
      .map((item) => item.pricing)
      .reduce((acc, val) => acc + val, 0);
    return (
      <>
        <Container className="mt-2">
          {paymentDone && (
            <Alert variant="success">
              <h4>Success !!!</h4>
              <Alert.Link href="http://paypal.com">
                Payment done through Paypal
              </Alert.Link>
            </Alert>
          )}
          {paymentError && (
            <Alert variant="danger">
              <h5>Something went wrong !!! Payment has not been processed</h5>
            </Alert>
          )}
          {cartStore.items.length > 0 && (
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3>Shopping Cart:</h3>
                  <h5>Checkout for {total_bill}$</h5>
                </div>
                <div>
                  <PaypalExpressBtn
                    client={client}
                    currency={"USD"}
                    total={total_bill}
                    onError={this.onError}
                    onSuccess={this.onSuccess}
                    onCancel={this.onCancel}
                  />
                </div>
              </div>
              {cartStore.items.map((item, index) => {
                return (
                  <Row key={index}>
                    <Card className="my-2">
                      <Container>
                        <Row className="d-md-flex align-items-center">
                          <Col xs={5}>
                            <Card.Img
                              variant="top"
                              src={item.images[0]}
                              className="shopping-cart-img"
                            />
                          </Col>
                          <Col xs={7}>
                            <Card.Body>
                              <Card.Title>{item.name}</Card.Title>
                              <Card.Text>{item.description}</Card.Text>
                            </Card.Body>
                            <Button
                              variant="primary"
                              className="d-sm-flex align-items-center"
                              onClick={() => this.removeFromCart(item)}
                            >
                              Remove from cart
                              <Trash />
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                      <Card.Footer>
                        <small className="text-muted">
                          {item.reviews.overallRating}
                          {item.reviews.numberOfReviews} people reviewed this
                          item
                        </small>
                      </Card.Footer>
                    </Card>
                  </Row>
                );
              })}
            </div>
          )}
          {cartStore.items.length === 0 && (
            <div className="noItemsInBag">
              <h4>
                No items in your bag
                <Cart2 className="mx-4" />
              </h4>
            </div>
          )}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartStore: state.cart,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      removeItemsFromCart,
      emptyCart,
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
);
