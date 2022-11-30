import React, { useState } from "react";
import { Container, Navbar, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Navbar>
      <Container>
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          {" "}
          <b>Podcaster</b>
        </span>
        {!props.loading ? <Spinner animation="border" role="status" /> : ""}
      </Container>
    </Navbar>
  );
};

export default Header;
