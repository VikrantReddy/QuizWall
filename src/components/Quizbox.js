import React, { useState } from "react";
import Quizcard from "./Quizcard.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/button";
import Container from "react-bootstrap/Container";

function Quizbox() {
  const DATA = [
    {
      question: "foo",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 1",
    },
    {
      question: "bar",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 1",
    },
    {
      question: "baz",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 1",
    },
    {
      question: "foo",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 4",
    },
    {
      question: "bar",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 1",
    },
    {
      question: "baz",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 3",
    },
    {
      question: "foo",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 3",
    },
    {
      question: "bar",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 1",
    },
    {
      question: "baz",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 4",
    },
    {
      question: "foo",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 3",
    },
    {
      question: "bar",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 2",
    },
    {
      question: "baz",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 2",
    },
    {
      question: "foo",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 2",
    },
    {
      question: "bar",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 2",
    },
    {
      question: "baz",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 3",
    },
    {
      question: "foo",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 1",
    },
    {
      question: "bar",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 3",
    },
    {
      question: "baz",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 2",
    },
    {
      question: "foo",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 4",
    },
    {
      question: "bar",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans: "Option 1",
    },
  ];
  const [clicked, setClicked] = useState(-1);

  const onClick = (e) => {
    e.preventDefault();
    let index = parseInt(e.target.value);
    setClicked(index);
  };

  const answered = () => {
    setTimeout(() => {
      setClicked(-1);
    }, 1200);
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Quizbox</h1>
      <Row>
        {DATA.map((val, index) => {
          if (clicked < 0) {
            return (
              <Col key={index} className="mt-3" lg={3} md={4} sm={6}>
                <Button className="h-100 p-5" value={index} onClick={onClick}>
                  {index}
                </Button>
              </Col>
            );
          }
        })}
      </Row>
      {clicked >= 0 && <Quizcard data={DATA[clicked]} callback={answered} />}
    </Container>
  );
}

export default Quizbox;
