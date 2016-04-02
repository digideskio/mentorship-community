import React from "react"
import { connect } from "react-redux"

import Avatar from "../components/Avatar"
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

        <div className="row">
          <div className="col-sm-8">
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Overview</a></li>
              <li role="presentation"><a href="#learn" aria-controls="learn" role="tab" data-toggle="tab">Start Learning</a></li>
              <li role="presentation"><a href="#test" aria-controls="test" role="tab" data-toggle="tab">Take a Test</a></li>
            </ul>

            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="home">
                <h2>Description</h2>
                <p>Here we will describe what is the goal of this module</p>
                <Button>Go to Next Step</Button>
              </div>
              <div role="tabpanel" className="tab-pane" id="learn">
                <h2>Learning Material</h2>
                <p>
                  Here we will link to free online resources that can teach you.
                </p>
                <p>
                  When you click the button below, the learning material will show
                  up and we will track the time when you started.
                </p>
                <Button>Start Learning Now</Button>
              </div>
              <div role="tabpanel" className="tab-pane" id="test">
                <h2>Test Yourself</h2>
                <p>
                  Here we will describe what needs to be True in order to verify
                  that you understood the topic.
                </p>
                <p>
                  When you submit your test result
                  and it is correct, we will track the time when you have finished.
                </p>
                <Button>Submit Test Result</Button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="well">
              <h3>Mentors</h3>
              <Avatar size="20px" />
              <Avatar size="20px" />
              <Avatar size="20px" />
              <h3>People learning this</h3>
              <Avatar size="20px" />
              <Avatar size="20px" />
              <Avatar size="20px" />
              <Avatar size="20px" />
              <h3>Alumni</h3>
              <Avatar size="20px" />
              <Avatar size="20px" />
              <Avatar size="20px" />
              <Avatar size="20px" />
              <Avatar size="20px" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
