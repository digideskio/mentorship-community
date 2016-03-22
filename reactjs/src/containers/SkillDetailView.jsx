import React from "react"
import { connect } from "react-redux"

import Skill from "../components/Skill"
import Jumbotron from "../components/Jumbotron"
import Module from "../components/Module"


@connect(state => ({
  skills: state.skills.skills
}))
export default class SkillDetailView extends React.Component {
  getSkillById(id) {
    let { skills } = this.props
    let skill = skills.find((item) => {
      return item.id === id
    })
    return skill
  }

  render() {
    let { params, skills } = this.props
    let { slug } = params
    let skill = skills.find((item) => {
      return item.slug === slug
    })
    return (
      <div>
        <Jumbotron>
          <h1>I want to learn {skill.title}</h1>
        </Jumbotron>
        {skill.prerequisites.length > 0 &&
          <div>
            <h2>Prerequisites</h2>
            <div className="row">
              {skill.prerequisites.map((id, index) =>
                <div className="col-sm-2" key={id}>
                  <Skill skill={this.getSkillById(id)} isSmall={true} />
                </div>
              )}
            </div>
          </div>
        }
        <h2>Modules</h2>

        <div className="row">
          <div className="col-sm-3">
            <Module heading="Installation" />
          </div>
          <div className="col-sm-3">
            <Module heading="Models" />
          </div>
          <div className="col-sm-3">
            <Module heading="Views" />
          </div>
          <div className="col-sm-3">
            <Module heading="Forms" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <Module heading="Templates" />
          </div>
          <div className="col-sm-3">
            <Module heading="And Many More..." />
          </div>
        </div>
      </div>
    )
  }
}
