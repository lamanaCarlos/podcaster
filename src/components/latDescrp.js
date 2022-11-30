import React from "react";
import { Card, Image } from "react-bootstrap";

const LatDescrp = (props) => {
  const generalData = JSON.parse(localStorage.getItem("data")).feed.entry;
  const podCastData = generalData.find(
    (el) => el.id.attributes["im:id"] == props.data.results[0].collectionId
  );

  return (
    <Card
      style={{
        borderTopColor: "transparent",
        textAlign: "center",
        margin: "20px",
        borderImage: "linear-gradient(white, grey) 0 100%",
        boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.3)",
      }}
    >
      <Card.Body>
        <Image
          style={{
            height: "12rem",
          }}
          rounded
          src={podCastData["im:image"][2].label}
        ></Image>
        <Card.Title>{podCastData.title.label}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          by: {podCastData["im:artist"].label}
        </Card.Subtitle>
        <Card.Text> {podCastData.summary.label}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LatDescrp;
