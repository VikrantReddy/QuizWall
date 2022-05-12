import React from "react";
import { Container, Button } from "react-bootstrap/";

function StartScreen(props) {
  return (
    <Container
      style={{ backgroundColor: "black", minHeight: "80vh", width: "80%" }}
      className="p-auto"
    >
      <Button
        className="mt-5"
        onClick={() => {
          props.setStarted(true);
        }}
      >
        Start
      </Button>
    </Container>
  );
}

export default StartScreen;
