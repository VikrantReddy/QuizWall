import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import styled from "styled-components";
import Option from "./Option.js";
import { keyframes } from "styled-components";

function quizcard(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {
      props.callback();
    }, 30000);
  });
  const onSelect = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    let val = e.target.value;
    if (val === props.data.ans) {
      e.target.style.backgroundColor = "green";
    } else {
      e.target.style.backgroundColor = "red";
    }
    props.callback();
  };
  return (
    <Container className="mt-5">
      <Row>
        <TimerBar>
          <ProgressBar></ProgressBar>
        </TimerBar>
      </Row>
      <Row>
        <QuestionCol
          style={{ backgroundColor: "lightblue" }}
          className="h-100 p-5"
          lg={6}
          md={12}
        >
          <h3>{props.data.question}</h3>
        </QuestionCol>
        <QuestionCol lg={6} md={12}>
          <Row>
            {props.data.options.map((option) => {
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

const TimerBar = styled.div`
  min-height: 10px;
  min-width: 100%;
  background-color: grey;
  padding: 0;
  margin: 5% 0%;
`;

const breatheAnimation = keyframes`
 0% { height: 10px; width: 0%; }
 100% { height: 10px; width: 100% }
`;

const ProgressBar = styled.div`
  height: 10px;
  max-width: 100%;
  justify-content: flex-start;
  background-color: lightgreen;
  animation-name: ${breatheAnimation};
  animation-duration: 30s;
  animation-iteration-count: 1;
`;

export default quizcard;
