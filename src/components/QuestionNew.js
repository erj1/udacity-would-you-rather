import React, { Component } from "react";
import Divider from "./Divider";


class QuestionNew extends Component {

  maxLength = 255

  state = {
    optionOne: "",
    optionTwo: ""
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <div>
            <h1 className="is-size-1 is-uppercase has-text-centered">Create New Question</h1>
            <hr/>
            <form>
              <div className="field">
                <label htmlFor="optionOne" className="label">Question 1</label>
                <div className="control">
                  <textarea name="optionOne" id="optionOne" cols="30" rows="10" className="textarea" />
                </div>
                <p className="help has-text-right">255 / {this.maxLength}</p>
              </div>

              <Divider title="or" />

              <div className="field">
                <label htmlFor="optionTwo" className="label">Question 2</label>
                <div className="control">
                  <textarea name="optionTwo" id="optionTwo" cols="30" rows="10" className="textarea" />
                </div>
                <p className="help has-text-right is-danger">255 / {this.maxLength}</p>
              </div>

              <div className="control mt-6">
                <button className="button is-large is-primary is-fullwidth">Create</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }


}

export default QuestionNew;
