import React from "react"
import { connect } from "react-redux"

import Button from "../components/Button"
import Jumbotron from "../components/Jumbotron"


export default class ModuleDetailView extends React.Component {
  handleNextClick() {

  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Let's do this: [MODULE NAME]</h1>
        </Jumbotron>

        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Overview</a></li>
          <li role="presentation"><a href="#learn" aria-controls="learn" role="tab" data-toggle="tab">Start Learning</a></li>
          <li role="presentation"><a href="#test" aria-controls="test" role="tab" data-toggle="tab">Take a Test</a></li>
        </ul>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="home">
            <h2>Description</h2>
            <p>Here we will describe what is the goal of this module</p>
          </div>
          <div role="tabpanel" className="tab-pane" id="learn">
            <h2>Learning Material</h2>
            <p>Here we will link to free online resources that can teach you.</p>
          </div>
          <div role="tabpanel" className="tab-pane" id="test">
            <h2>Test Yourself</h2>
            <p>
              Here we will describe what needs to be True in order to verify that
              you understood the topic.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
