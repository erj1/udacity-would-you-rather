import React from 'react';
import Questions from "./Questions";

const PastQuestions = (props) => {
  if (props.questions.length === 0) {
    return (
      <article className="message is-warning">
        <div className="message-body has-text-warning-dark">
          <div className="block">
            <p className="is-size-1 is-info">Answer Those Questions!</p>
            <p className="mb-2">It doesn't look like you have answered any questions so far.</p>
            <p><strong>Go out there and answer those questions</strong></p>
          </div>
        </div>
      </article>
    )
  }

  return <Questions questions={props.questions} />

}

export default PastQuestions;
