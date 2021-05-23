import React from 'react';
import Question from "./Question";

const Questions = (props) => {
  return (
    props.questions.map(question => (
      <Question key={question} id={question} />
    ))
  );

}

export default Questions;
