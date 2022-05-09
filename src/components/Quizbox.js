import React from "react";
import Quizcard from "./Quizcard.js";

function Quizbox() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Quizbox</h1>
      <Quizcard
        question={"What is the first month of the year"}
        options={["January", "February", "March", "April"]}
        ans={"January"}
      />
    </div>
  );
}

export default Quizbox;
