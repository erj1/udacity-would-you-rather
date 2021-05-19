import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";


class Question extends Component {

  render() {

    const { question, user } = this.props;

    return (
      <Link to={`/questions/${question.id}`} className="box is-clickable">
        <article className="media">
          {user &&
          <figure className="media-left">
            <p className="image is-96x96">
              <img className="is-rounded" src={user.avatarURL} alt={`Avatar of ${user.name}`}/>
            </p>
          </figure>
          }
          <div className="media-content">
            <div className="content">
              <p className="subtitle is-5"><strong>{user && user.name}</strong> <small>asks:</small></p>
              <p className="title is-3 is-capitalized">Would you rather {question && question.optionOne.text} or &hellip;</p>
            </div>
          </div>
        </article>
      </Link>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  const user = question ? users[question.author] : null;
  return { question, user };
}

export default connect(mapStateToProps)(Question);
