import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Button from "react-bootstrap/button";
function Option(props) {
  return (
    <Container>
      <Row>
        <Button
          className="h-100 p-5"
          value={props.value}
          onClick={props.onSelect}
        >
          {props.value}
        </Button>
      </Row>
    </Container>
  );
}

export default Option;
