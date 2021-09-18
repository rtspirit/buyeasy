import React, { Component } from "react";
import CountDownTimer from "./CountDownTimer";
import { Badge } from "react-bootstrap";
// import Banner from "./Banner";
import "../App.css";
import Body from "./Body";
import Form from "./form";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import DescInAccordion from "./DescInAccordion";
import Footer from "./Footer";

function DealOfTheday() {
  var dateVariable = new Date();
  var currentHour = dateVariable.getHours();
  var currenttMinute = dateVariable.getMinutes();
  var currentSeconds = dateVariable.getSeconds();

  const hoursMinSecs = {
    hours: 23 - currentHour,
    minutes: 59 - currenttMinute,
    seconds: 59 - currentSeconds,
  };
  var dayOfWeek = new Date().toLocaleDateString("en-us", { weekday: "long" });

  return (
    <div>
      <div className="container">
      <div>
        <p></p>
      </div>

      <div className="widthSetting">
        <AccessTimeIcon style={{ fontSize: 15 }} />
        &nbsp;
        Time left
        <div className="widthLeft">
          {" "}
          <h2>Hurry..! It's {dayOfWeek}'s</h2>
          <h3><b>DEAL of the DAY</b></h3>
          <h6>
            <p>Terms and conditions apply*. Limited stock</p>
          </h6>
        </div>
        <div className="widthRightt">
          <Badge className="timerBadge" bg="dark">
            <p></p>
            
            <CountDownTimer hoursMinSecs={hoursMinSecs} />
          
          </Badge>
        </div>
      </div>
      <div className="Items">
        <Body />
      </div>

      <Form />
      {/* <DescInAccordion /> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DealOfTheday;
