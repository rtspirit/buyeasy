import React from "react";
import { GET_FEW_ITEMS_URL } from "../API";
import axios from "axios";
import { Row, Card, Col, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./customStyles.css";
import Footer from "./Footer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    axios
      .get(GET_FEW_ITEMS_URL(80))
      .then((res) => {
        if (res.data) {
          this.setState({
            items: res.data,
          });
        }
      })
      .catch((err) => {
        this.setState({
          items: [],
        });
      });
  }

  goToDescription = (productId) => {
    this.props.history.push(`/description/${productId}`);
  };

  render() {
    const { items = [] } = this.state;
    return (
      <div>
        <Container>
          <Row className="justify-content-evenly">
            {items.map((item) => {
              return (
                <Card
                  key={item["_id"]}
                  className="p-2 mt-4"
                  style={{
                    width: "18rem",
                    height: "22rem",
                    cursor: "pointer",
                  }}
                  onClick={() => this.goToDescription(item["_id"])}
                >
                  <Card.Img
                    variant="top"
                    src={item.images[0]}
                    className="home-image"
                  />
                  <Card.Body>
                    <Card.Title>
                      <h6
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {item.name}
                      </h6>
                    </Card.Title>
                    <Card.Text className="d-flex align-items-start align-items-center">
                      Price:{item.pricing}$
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
        {/* <div className="bg-dark mt-sm-3 p-sm-4">
          <Row>
            <Col sm>
              <h2 className="link-light logo">
                <p>
                  <span className="text-primary">Buy</span>
                  <span className="text-warning">Easy</span>
                </p>
              </h2>
              <p className="link-light">Your search ends here!!!</p>
            </Col>
            <Col sm>
              <div className="col-md m-3">
                <div className="ftco-footer-widget mb-5 ml-md-5">
                  <h2 className="ftco-heading-2 link-light">My Easy Buy</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                        View and Rewards
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                        Special Offers
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                        Sign in or Created account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm>
              <div className="col-md m-3">
                <div className="ftco-footer-widget mb-5 ml-md-5">
                  <h2 className="ftco-heading-2 link-light">Credit Cards</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                        Apply for Easy card
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                        Credit Cards Offers
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                        Make Payment through Discover Card
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm>
              <div className="col-md m-3">
                <div className="ftco-footer-widget mb-5 ml-md-5">
                  <h2 className="ftco-heading-2 link-light">
                    Orders and Returns
                  </h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                        Order status
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                        Shipping, Delivery & Store pickups
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                        Returns and Exchange rules
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm>
              <div className="col-md m-3">
                <div className="ftco-footer-widget mb-2 ml-md-2">
                  <h2 className="ftco-heading-2 link-light">Contact Us</h2>
                  <div className="block-23 mb-3">
                    <span className="glyphicon glyphicon-map-marker"></span>
                    <span className="text"> 101 Dude St. Mountain View,</span>
                    <a href="#">
                      <span className="glyphicon glyphicon-earphone"></span>
                      <span className="text"> +2 392 3929 210</span>
                    </a>
                    <a href="#">
                      <span className="glyphicon glyphicon-envelope"></span>
                      <span className="text"> info@buyeasy.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(Home);
