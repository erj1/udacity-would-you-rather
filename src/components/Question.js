import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";


class Question extends Component {

  render() {

    const { author, question } = this.props;

    return (
      <Link to={`/questions/${question.id}`} className="box is-clickable">
        <article className="media">
          <figure className="media-left">
            <p className="image is-96x96">
              <img className="is-rounded" src={author.avatarURL} alt={`Avatar of ${author.name}`}/>
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="subtitle is-5"><strong>{author.name}</strong> <small>asks:</small></p>
              <p className="title is-3 is-capitalized">Would you rather {question.optionOne.text} or &hellip;</p>
            </div>
          </div>
        </article>
      </Link>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  const author = users[question.author];
  return { question, author };
}

export default connect(mapStateToProps)(Question);
