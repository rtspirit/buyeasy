import { initial } from "lodash";
import React, { Component } from "react";
import "../App.css";
import { Card, Row, Grid, Col, Button } from "react-bootstrap";
import CountDownTimer from "./CountDownTimer";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import StarRating from "./StarRating";

function Body() {
  var dateVariable = new Date();
  var currentHour = dateVariable.getHours();
  var currenttMinute = dateVariable.getMinutes();
  var currentSeconds = dateVariable.getSeconds();

  var Saving = Math.floor(Math.random() * (50 - 10) + 10);

  const hoursMinSecs = {
    hours: 23 - currentHour,
    minutes: 59 - currenttMinute,
    seconds: 59 - currentSeconds,
  };

  return (
    <div>
      <h4>Bonus Deals of the day</h4>
      <Row xs={4} md={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src="https://picsum.photos/id/0/200/300"
                style={{ maxHeight: "400px", width: "auto" }}
                alt="Product image"
              />
              <Card.Body>
                <Card.Title>Product {idx}</Card.Title>
                <Card.Text>
                  Information about the product <br />
                  Price: $ {Math.floor(
                    Math.random() * (999 - 100) + 100
                  )}.00 <br />
                  Saving: ${Math.floor(Math.random() * (50 - 10) + 10)}
                  <br />
                  Rating
                  <StarRating />
                  <br />
                  <AccessTimeIcon style={{ fontSize: 15 }} />
                  Deal ends in <CountDownTimer hoursMinSecs={hoursMinSecs} />
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Body;
