import React from "react"
import { connect } from "react-redux"

import Jumbotron from "../components/Jumbotron"
import Skill from "../components/Skill"


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
      </div>
    )
  }
}
