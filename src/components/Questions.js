import React from 'react';
import Question from "./Question";
import { Link } from "react-router-dom";

const Questions = (props) => {
  if (props.questions.length === 0) {
    return (
      <article className="message is-primary">
        <div className="message-body has-text-primary-dark">
          <div className="block">
            <p className="is-size-1 is-info">Congratulations!</p>
            <p>You have answered all of the available questions.</p>
          </div>
          <Link to="/questions/new" className="button is-primary">Create Your Own Questions</Link>
        </div>
      </article>
    )
  }

  return (
    props.questions && props.questions.map(question => (
      <Question key={question} id={question} />
    ))
  )

}

export default Questions;
