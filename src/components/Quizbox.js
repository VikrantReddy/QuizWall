import React from "react";
import Quizcard from "./Quizcard.js";

function Quizbox() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Quizbox</h1>
      <Quizcard
        question={"Question"}
        options={["Option 1", "Option 2", "Option 3", "Option 4"]}
      />
      {/* <Quizcard />
      <Quizcard />
      <Quizcard /> */}
    </div>
  );
}

export default Quizbox;
