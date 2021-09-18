import React from "react";
import { GET_FEW_ITEMS_URL } from "../API";
import axios from "axios";
import { Row, Card, Container, Badge } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./customStyles.css";
import Footer from "./Footer";

class TopDeals extends React.Component {
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
            items: res.data.filter((item) => item.dealOfTheDay),
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
                    <div className="d-sm-flex align-items-sm-center">
                      <Badge pill bg="success" className="bg-success">
                        Few pieces left
                      </Badge>
                      <p style={{ margin: "0px 10px" }}>
                        Price:{item.pricing}$
                      </p>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
      <Footer></Footer>
      </div>
    );
  }
}
export default withRouter(TopDeals);
