import React, { useState } from "react";
import Quizbox from "./Quizbox.js";
import { Container } from "react-bootstrap/";
import StartScreen from "./StartScreen.js";

function Gamescreen() {
  const [started, setStarted] = useState(false);
  return (
    <Container>
      {started ? <Quizbox /> : <StartScreen setStarted={setStarted} />}
    </Container>
  );
}

export default Gamescreen;
