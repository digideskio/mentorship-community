import React from "react"
import { connect } from "react-redux"

import Avatar from "../components/Avatar"
import Button from "../components/Button"
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
          <p style={{height: "1em"}}></p>
          <Button>Sign Me Up!</Button>
        </Jumbotron>
        <div className="row">
          <div className="col-sm-6">
            <div className="well">
              <h2>Description</h2>
              <p>
                Here comes a text that describes what you can achieve with this skill,
                how difficult it is to learn and how much time it might take you.
              </p>
              <Button>Sign Me Up!</Button>
            </div>
          </div>
          <div className="col-sm-6">
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
        <hr />
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
              <Skill title="Python Basics" isSmall={true} modulesLeft={0} />
            </div>
            <div className="col-sm-2">
              <Skill title="HTML & CSS" isSmall={true} modulesLeft={0} />
            </div>
          </div>
        </div>
        <hr />

        <h2>Modules</h2>
        <p>
          Take your time to learn everything in a track. When enough people
          have reached the end of a track, we will do a meetup and talk about
          it.
        </p>
        <p>
          Things marked in <span className="text-success"><b> green </b></span>
          have been completed by you, those marked in
          <span className="text-info"><b> blue </b></span> are the ones you are
          currently working on.
        </p>
        <Track title="Track #1" type="info">
          <div className="col-sm-3">
            <Module title="Installation" type="success" currentLearners={2} />
          </div>
          <div className="col-sm-3">
            <Module title="Hello World" type="success" currentLearners={4} />
          </div>
          <div className="col-sm-3">
            <Module title="Template Basics" type="info" currentLearners={8} />
          </div>
          <div className="col-sm-3">
            <Module title="URLs" currentLearners={2} />
          </div>
          <div className="col-sm-3">
            <Module
              title="Finish Line"
              currentLearners={5}
              showDateVotes={true}
            />
          </div>
        </Track>

        <Track title="Track #2">
          <div className="col-sm-3">
            <Module title="Module1" currentLearners={2} />
          </div>
          <div className="col-sm-3">
            <Module title="Module2" currentLearners={1} />
          </div>
          <div className="col-sm-3">
            <Module title="Module3" />
          </div>
          <div className="col-sm-3">
            <Module
              title="Finish Line"
              currentLearners={3}
            />
          </div>
        </Track>
      </div>
    )
  }
}
