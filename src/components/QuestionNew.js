import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Divider from "./Divider";
import { handleCreateQuestion } from "../actions/questions";


class QuestionNew extends Component {

  state = {
    optionOneText: "",
    optionTwoText: "",
    toHome: false
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((state) => ({
      ...state,
      [name]: value
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { authedUser, dispatch } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    dispatch(handleCreateQuestion({
      optionOneText, optionTwoText, author: authedUser
    }));
    this.setState({
      optionOneText: "",
      optionTwoText: "",
      toHome: true
    })
  }

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome) {
      return <Redirect to="/" />
    }

    return (
      <div className="section">
        <div className="container">
          <div>
            <h1 className="is-size-1 is-uppercase has-text-centered">Would You Rather&hellip;</h1>
            <hr/>
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label htmlFor="optionOne" className="label">Question 1</label>
                <div className="control">
                  <textarea
                    name="optionOneText"
                    id="optionOneText"
                    cols="30"
                    rows="10"
                    className="textarea"
                    value={optionOneText}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <Divider title="or" />

              <div className="field">
                <label htmlFor="optionTwo" className="label">Question 2</label>
                <div className="control">
                  <textarea
                    name="optionTwoText"
                    id="optionTwoText"
                    cols="30"
                    rows="10"
                    className="textarea"
                    value={optionTwoText}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="control mt-6">
                <button
                  className="button is-large is-primary is-fullwidth"
                  disabled={optionOneText === "" || optionTwoText === ""}
                >Create</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionNew);
