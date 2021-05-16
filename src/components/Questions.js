import React from 'react';
import Question from "./Question";

const Questions = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.questions && props.questions.map(question => (
        <Question key={question} id={question} />
      ))}
    </div>
  )
}

export default Questions;
