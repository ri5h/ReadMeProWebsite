import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import ReadMeCard from "./ReadMeCard";

function ReadMeGrid({ readmelist }) {
  console.log(readmelist);
  return (
    <Container>
      <Row>
        {readmelist.map((readme) => (
          <ReadMeCard readme={readme} key={readme.name} />
        ))}
      </Row>
    </Container>
  );
}

export default ReadMeGrid;
