import React from "react";

const UserScore = (props) => {
  const { className, user } = props;
  const totalQuestions = user.questions.length || 0;
  const totalAnswers = Object.keys(user.answers).length || 0;

  return (
      <article className={className ? `media box ${className}` : 'media box'}>
        <figure className="media-left">
          <p className="image is-128x128">
            <img className="is-rounded" src={user.avatarURL} alt={`Avatar of ${user.name}`}/>
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p className="is-size-2 mb-1 has-text-centered">{user.name}</p>
            <div className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading mb-0">Questions Answered</p>
                  <p className="title has-text-weight-light">{ totalAnswers }</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading mb-0">Questions Asked</p>
                  <p className="title has-text-weight-light">{ totalQuestions }</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading mb-0">Total Score</p>
                  <p className="title is-bold has-text-primary-dark">{ totalQuestions + totalAnswers }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
  );

}

export default UserScore;
