import React from "react";
import { Accordion, Card, Row, Col, Button } from "react-bootstrap";

function DescInAccordion() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Daily deals at Best Buy.</Accordion.Header>
          <Accordion.Body>
            Where every day is a one-day sale. When you shop the Best Buy Deal
            of the Day, or sign up for our daily e-mails, you'll find fantastic
            prices on tech from every corner of our site. For example, if you're
            shopping for laptop deals, we have incredible offers on powerful
            laptops that will get you ready for work or play and leave money in
            your pocket for cool accessories too. Although these amazing deals
            rotate every day, we always have more than one sale a day going on.
            We even have sales on whole categories of products and deals
            tailored for a particular audience, such as deals for students to
            help you or someone you know head off to college with the tech they
            need to succeed.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default DescInAccordion;
