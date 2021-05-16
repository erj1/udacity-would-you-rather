import React, { Component } from "react";
import { connect } from "react-redux";
import Divider from "./Divider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";


class QuestionDetails extends Component {

  state = {
    selectedOption: "" // either optionOne or optionTwo
  }

  selectOption = (option) => {
    this.setState(() => ({
      selectedOption: option
    }));
  }

  renderAuthorDetails() {

    const { author } = this.props;

    if (author) {
      return (
        <div className="media">
          <figure className="media-left">
            <p className="image is-96x96">
              <img src={author.avatarURL} alt={`Avatar of ${author.name}`}/>
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="subtitle is-5"><strong>{author.name}</strong> <small>asks:</small></p>
              <p className="title is-1 is-capitalized">Would you rather &hellip;</p>
            </div>
          </div>
        </div>
      );
    }
  }

  renderOption(option) {
    const { question } = this.props;
    const { selectedOption } = this.state;
    const classNames = ['button', 'is-large', 'is-fullwidth', 'is-capitalized py-6']
    const selectedClassNames = ['is-active', 'is-primary', 'is-light']

    return question && (
      <div className="block" key={option}>
        <button
          className={(selectedOption === option ? classNames.concat(selectedClassNames) : classNames).join(' ')}
          onClick={() => this.selectOption(option)}
        >
          {selectedOption === option && (
            <span className="icon is-medium">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          )}
          <span>{ question[option].text }</span>
        </button>
      </div>
    )
  }

  render() {
    const { author } = this.props;
    return author && (
      <div>
        <div className="block">
          { this.renderAuthorDetails() }
        </div>
        <div className="block">
          { this.renderOption('optionOne') }
          <Divider title="or" />
          { this.renderOption('optionTwo') }
          <div className="block">
            <button className="button is-primary is-large is-fullwidth">Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users, questions}, {id, authedUser}) {
  const question = questions ? questions[id] : null;
  const author = users && question ? users[question.author] : null;

  return {
    author,
    question,
  }
}

export default connect(mapStateToProps)(QuestionDetails);
