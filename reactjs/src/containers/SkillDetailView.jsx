import React from "react"
import { connect } from "react-redux"

import Jumbotron from "../components/Jumbotron"
import Module from "../components/Module"
import Panel from "../components/Panel"
import Skill from "../components/Skill"
import Track from "../components/Track"


export default class SkillDetailView extends React.Component {
  render() {
    let { params } = this.props
    let { slug } = params
    return (
      <div>
        <Jumbotron>
          <h1>I want to learn [SKILL NAME]</h1>
        </Jumbotron>
        <h2>Description</h2>
        <p>
          Here comes a text that describes what you can achieve with this skill,
          how difficult it is to learn and how much time it might take you.
        </p>
        <div>
          <h2>Prerequisites</h2>
          <p>
            If you want to learn this skill, you need to lean a few other,
            skills first:
          </p>
          <div className="row">
            <div className="col-sm-2">
              <Skill title="Git Basics" isSmall={true} modulesLeft={0} />
            </div>
            <div className="col-sm-2">
              <Skill title="Python Basics" isSmall={true} modulesLeft={10} />
            </div>
            <div className="col-sm-2">
              <Skill title="HTML & CSS" isSmall={true} modulesLeft={5} />
            </div>
          </div>
        </div>
        <h2>Modules</h2>
        <p>
          Take your time to learn everything in a track. When enough people
          have reached the end of a track, we will do a meetup and talk about
          it.
        </p>
        <Track title="Track #1" />
        <Track title="Track #2" />
      </div>
    )
  }
}
