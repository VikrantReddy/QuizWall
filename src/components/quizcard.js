import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import styled from "styled-components";
import Option from "./Option.js";

function quizcard(props) {
  const onSelect = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    let val = e.target.value;
    if (val === props.ans) {
      e.target.style.backgroundColor = "green";
    } else {
      e.target.style.backgroundColor = "red";
    }
  };
  return (
    <Container className="mt-5">
      <Row>
        <QuestionCol
          style={{ backgroundColor: "lightblue" }}
          className="h-100 p-5"
          lg={6}
          md={12}
        >
          <h3>{props.question}</h3>
        </QuestionCol>
        <QuestionCol lg={6} md={12}>
          <Row>
            {props.options.map((option) => {
              return (
                <Col key={option} className="mt-3" lg={6} md={6}>
                  <Option value={option} onSelect={onSelect} />
                </Col>
              );
            })}
          </Row>
        </QuestionCol>
      </Row>
    </Container>
  );
}

const QuestionCol = styled(Col)`
  text-align: center;
  align-self: center;
`;

export default quizcard;
