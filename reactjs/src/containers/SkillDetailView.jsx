import React from "react"
import { connect } from "react-redux"

import Skill from "../components/Skill"
import Jumbotron from "../components/Jumbotron"
import Module from "../components/Module"


export default class SkillDetailView extends React.Component {
  render() {
    let { params } = this.props
    let { slug } = params
    return (
      <div>
        <Jumbotron>
          <h1>I want to learn [SKILL NAME]</h1>
        </Jumbotron>
        <div>
          <h2>Prerequisites</h2>
          <div className="row">
            <div className="col-sm-2">
              <Skill title="Git Basics" isSmall={true} />
            </div>
            <div className="col-sm-2">
              <Skill title="Python Basics" isSmall={true} />
            </div>
            <div className="col-sm-2">
              <Skill title="HTML & CSS" isSmall={true} />
            </div>
          </div>
        </div>
        <h2>Modules</h2>
        <div className="row">
          <div className="col-sm-3">
            <Module title="Installing Django" />
          </div>
        </div>
      </div>
    )
  }
}
