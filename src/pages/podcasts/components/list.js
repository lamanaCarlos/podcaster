import React, { useState } from "react";
import { Row, Col, Container, InputGroup, Form } from "react-bootstrap";
import PodCastCard from "./card";

const List = (props) => {
  const [filterList, setFilterList] = useState(
    !!props.data ? [...props.data.entry] : []
  );
  const search = (evt) => {
    setFilterList(
      props.data.entry.filter(
        (ele) =>
          ele.title.label
            .toLowerCase()
            .indexOf(evt.target.value.toLowerCase()) != -1
      )
    );
  };
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 8 }}>
          <InputGroup>
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <Form.Control
              onChange={search}
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </Col>
      </Row>
      <br />
      <Row xs={2} md={4} lg={6} className="g-4">
        {filterList.map((el) => {
          return <PodCastCard details={el} />;
        })}
      </Row>
    </Container>
  );
};

export default List;
