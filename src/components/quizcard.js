import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import styled from "styled-components";

function quizcard(props) {
  return (
    <Container className="mt-5">
      <Row>
        <QuestionCol className="p-5" lg={6} md={12}>
          <h3>{props.question}</h3>
        </QuestionCol>
        <QuestionCol lg={6} md={12}>
          <Row>
            {props.options.map((option) => {
              return (
                <Col className="mt-3" lg={6} md={6}>
                  <Button className="p-5">{option}</Button>
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
