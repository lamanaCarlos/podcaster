import React from "react";
import { Table, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PodCastTable = (props) => {
  const navigate = useNavigate();
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
          <b>Episodes: {props.data.length}</b>{" "}
        </Card.Body>
      </Card>
      <Table
        striped
        style={{
          borderTopColor: "transparent",
          margin: "20px",
          borderImage: "linear-gradient(white, grey) 0 100%",
          boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.3)",
        }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((el) => {
            return (
              <tr
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigate(
                    "/podcast/" +
                      props.podcast.collectionId +
                      "/episode/" +
                      el.url.split("id=")[1]
                  )
                }
              >
                <td>
                  <span>{el.title}</span>
                </td>
                <td>
                  {el.date.getDate() +
                    "/" +
                    (el.date.getMonth() + 1) +
                    "/" +
                    el.date.getFullYear()}
                </td>
                <td>{el.duration}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default PodCastTable;
