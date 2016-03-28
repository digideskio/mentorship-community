import React from "react"
import { connect } from "react-redux"

import Button from "../components/Button"
import Jumbotron from "../components/Jumbotron"
import Skill from "../components/Skill"
import Panel from "../components/Panel"
import InputText from "../components/InputText"


export default class IndexView extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>What do you want to learn?</h1>
        </Jumbotron>
        <div className="row">
          <div className="col-sm-4">
            <Skill title="Django Development" />
          </div>
          <div className="col-sm-4">
            <Skill title="Rails Development" />
          </div>
          <div className="col-sm-4">
            <Skill title="Web-Frontend Development" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <Panel heading="Skills on the whishlist">
              <div className="row">
                <div className="col-sm-4">
                  <p>Skill Name 1 (15) <span className="glyphicon glyphicon-thumbs-up"></span></p>
                  <p>Skill Name 2 (2) <span className="glyphicon glyphicon-thumbs-up"></span></p>
                </div>
              </div>
            </Panel>
          </div>
          <div className="col-sm-6">
            <Panel heading="Something else?">
              <InputText placeholder="Enter skill here" />
              <Button>Submit</Button>
            </Panel>
          </div>
        </div>
      </div>
    )
  }
}
