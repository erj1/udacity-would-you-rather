import React, { Component } from "react";
import { connect } from "react-redux";
import Divider from "./Divider";
import OptionResult from "./OptionResult";
import OptionQuestion from "./OptionQuestion";
import { handleSaveQuestionAnswer } from "../actions/questions";
import { Error404 } from "./errors";


class QuestionDetails extends Component {

  state = {
    selectedOption: "" // either optionOne or optionTwo
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { selectedOption } = this.state;
    const { authedUser, question } = this.props;

    if (selectedOption !== "") {
      this.props.dispatch(handleSaveQuestionAnswer({
        authedUser,
        question_id: question.id,
        answer: selectedOption
      }))
    }
  }

  isAnswered = () => {
    const { question, authedUser } = this.props;
    return (
      question.optionOne.votes.includes(authedUser)
      || question.optionTwo.votes.includes(authedUser)
    );
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
              <img className="is-rounded" src={author.avatarURL} alt={`Avatar of ${author.name}`}/>
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

  votePercentage = (optionVoteTotal, totalVotes) => (
    optionVoteTotal > 0 ? ((optionVoteTotal / totalVotes) * 100).toFixed(0) : 0
  );

  renderAnsweredQuestion() {
    const { authedUser } = this.props;
    const { optionOne, optionTwo } = this.props.question;
    const optionOneVotes = optionOne.votes.length;
    const optionTwoVotes = optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    return (
      <div className="block">
        <OptionResult
          isSelected={optionOne.votes.includes(authedUser)}
          votes={optionOneVotes}
          percentage={ this.votePercentage(optionOneVotes, totalVotes) }
          text={ optionOne.text } />
        <Divider title="or" />
        <OptionResult
          isSelected={optionTwo.votes.includes(authedUser)}
          votes={optionTwoVotes}
          percentage={ this.votePercentage(optionTwoVotes, totalVotes) }
          text={ optionTwo.text } />
      </div>
    )
  }

  renderUnansweredQuestion() {
    const { optionOne, optionTwo } = this.props.question;
    const { selectedOption } = this.state;
    return (
      <div className="block">

        <OptionQuestion
          handleSelect={() => this.selectOption('optionOne')}
          optionText={ optionOne.text }
          isSelected={ selectedOption === 'optionOne' }
        />

        <Divider title="or" />

        <OptionQuestion
          handleSelect={() => this.selectOption('optionTwo')}
          optionText={ optionTwo.text }
          isSelected={ selectedOption === 'optionTwo' }
        />

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
    const { question } = this.props;

    if (!question) {
      return <Error404 />
    }

    return (
      <div className="mt-6">
        <div className="block">
          { this.renderAuthorDetails() }
        </div>
        {
          this.isAnswered()
          ? this.renderAnsweredQuestion()
          : this.renderUnansweredQuestion()
        }
      </div>
    )
  }
}

function mapStateToProps({users, questions, authedUser}, props) {
  const id = props.match.params.id;
  const question = questions[id];
  const author = question ? users[question.author] : null;
  return {author, question, authedUser}
}

export default connect(mapStateToProps)(QuestionDetails);
