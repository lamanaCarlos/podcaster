import React, { useState } from "react";
import { Table, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PodCastMedia = (props) => {
  return (
    <Container>
      <Card
        style={{
          borderTopColor: "transparent",
          margin: "20px",
          borderImage: "linear-gradient(white, grey) 0 100%",
          boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.3)",
        }}
      >
        <Card.Body>
          <div
            dangerouslySetInnerHTML={{
              __html: !!props.data ? props.data.descrp : "",
            }}
          />

          <embed src={!!props.data ? props.data.url : ""} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PodCastMedia;
