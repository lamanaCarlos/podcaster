import React, { useState } from "react";
import { Row, Col, Container, Image, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PodCastCard = (props) => {
  const navigate = useNavigate();
  const handleClick = (id) => {};
  return (
    <Card
      style={{
        borderTopColor: "transparent",
        textAlign: "center",
        margin: "20px",
        borderImage: "linear-gradient(white, grey) 0 100%",
        boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
      onClick={() =>
        navigate("/podcast/" + props.details.id.attributes["im:id"])
      }
    >
      <Card.Body>
        <Image
          style={{
            height: "7rem",
          }}
          roundedCircle
          src={props.details["im:image"][2].label}
        ></Image>
        <Card.Title>{props.details.title.label}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Author: {props.details["im:artist"].label}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default PodCastCard;
