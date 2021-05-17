import React, { Component } from "react";
import { connect } from "react-redux";
import Divider from "./Divider";
import OptionResult from "./OptionResult";
import OptionQuestion from "./OptionQuestion";


class QuestionDetails extends Component {

  state = {
    selectedOption: "" // either optionOne or optionTwo
  }

  handleSubmit = (e) => {
    const { selectedOption } = this.state;
    e.preventDefault();

    if (selectedOption !== "") {
      console.log(`User Selected: ${selectedOption}`);
    }
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
    const optionText = this.props.question[option].text;
    const { selectedOption } = this.state;

    return (
      <OptionQuestion
        handleSelect={() => this.selectOption(option)}
        optionText={optionText}
        isSelected={ selectedOption === option }
      />
    )

  }

  votePercentage = (optionVoteTotal, totalVotes) => (
    optionVoteTotal > 0 ? ((optionVoteTotal / totalVotes) * 100).toFixed(0) : 0
  );

  renderAnsweredQuestion() {
    const { optionOne, optionTwo } = this.props.question;
    const optionOneVotes = optionOne.votes.length;
    const optionTwoVotes = optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    return (
      <div className="block">
        <OptionResult percentage={ this.votePercentage(optionOneVotes, totalVotes) } text={ optionOne.text } />
        <Divider title="or" />
        <OptionResult percentage={ this.votePercentage(optionTwoVotes, totalVotes) } text={ optionTwo.text } />
      </div>
    )
  }

  renderUnansweredQuestion() {
    const { question } = this.props;
    const { selectedOption } = this.state;
    return (
      <div className="block">
        { this.renderOption('optionOne') }
        <Divider title="or" />
        { this.renderOption('optionTwo') }
        <div className="block">
          <button
            className="button is-primary is-large is-fullwidth"
            type="submit"
            disabled={selectedOption === ""}
            onClick={this.handleSubmit}
          >Submit</button>
        </div>
      </div>
    );
  }

  render() {
    const { author, hasAnswer } = this.props;
    return author && (
      <div>
        <div className="block">
          { this.renderAuthorDetails() }
        </div>
        {
          hasAnswer
          ? this.renderAnsweredQuestion()
          : this.renderUnansweredQuestion()
        }
      </div>
    )
  }
}

function mapStateToProps({users, questions}, {id, authedUser}) {
  const question = questions ? questions[id] : null;
  const author = users && question ? users[question.author] : null;

  const hasAnswer = question && (
    question.optionTwo.votes.includes(authedUser)
    || question.optionTwo.votes.includes(authedUser)
  );

  return {
    author,
    question,
    hasAnswer,
  }
}

export default connect(mapStateToProps)(QuestionDetails);
