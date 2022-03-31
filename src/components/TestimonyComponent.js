import React from "react";
import { Card } from "react-bootstrap";
import { Fade } from "react-reveal";
import Mom from "../Img/Mom.png"
import BlueArt from "../Img/BlueArt.jpg"

function Testimony() {
    return (
  <div id="testimony" style={{
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundImage: {BlueArt}
  }}>
    <Fade left>
    <Card style={{
         width: "18rem",
         boxShadow: "0 8px 17px 0 rgba(0,0,0,0.2)"
         }}>
      <Card.Img variant="top" src={Mom} />
      <Card.Body>
        <Card.Title style={{
            textAlign: "center"
        }}>My Mom</Card.Title>
        <Card.Text style={{
            textAlign: "center"
        }}>
          "He is so smart and handsome and fixes my computer all the time!"
        </Card.Text>
      </Card.Body>
    </Card>
    </Fade>
  </div>
)
}

export default Testimony;
