import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { get } from "lodash";
import Container from "react-bootstrap/Container";
import { Card, Carousel, Button, Image, Row, Col } from "react-bootstrap";
import { GET_ITEM_DESCRIPTION } from "../API";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addItemsToCart } from "../actions/cart";
import { PlusCircle } from "react-bootstrap-icons";
import ReactStars from "react-stars";

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: {},
      addedToCart: false,
    };
  }

  componentDidMount() {
    const { pathname = "" } = this.props.history.location;
    const productId = pathname.replace("/description/", "");
    const URL = GET_ITEM_DESCRIPTION(productId);
    axios
      .get(URL)
      .then((res) => {
        this.setState({
          desc: res.data[0],
        });
      })
      .catch((err) => {
        this.setState({
          desc: {},
        });
      });
  }

  addToCart = () => {
    const { desc = {} } = this.state;
    this.props.addItemsToCart(desc);
    this.setState({
      addedToCart: true,
    });
  };

  render() {
    const { desc = {}, addedToCart = false } = this.state;
    // const { cartStore = [] } = this.props;
    const {
      name = "",
      brand = "",
      images = [],
      description = "",
      pricing = 0,
      reviews,
    } = desc;
    const rating = get(reviews, "overallRating", 0);
    const numberOfReviews = get(reviews, "numberOfReviews", 0);
    return (
      <div className="pt-4">
        <Container>
          <h2>{name}</h2>
          <h5>Sold by: {brand}</h5>
          <Row>
            <Col xs={7}>
              <Carousel className="mt-2">
                {images.map((image, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <Image
                        src={image}
                        rounded
                        className="product-desc-image"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
            <Col xs={5}>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <h6>Reviews:</h6>
                <ReactStars
                  count={5}
                  value={rating}
                  edit={false}
                  size={24}
                  color2={"#ffd700"}
                />
                <h6>{numberOfReviews} have reviewed this product</h6>
                <h6>Buy Now for {pricing}$</h6>
                {!addedToCart && (
                  <Button
                    variant="primary"
                    className="d-flex align-items-center"
                    onClick={this.addToCart}
                  >
                    Add to Cart
                    <PlusCircle className="mx-2" />
                  </Button>
                )}
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </div>
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
      addItemsToCart,
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDescription)
);
