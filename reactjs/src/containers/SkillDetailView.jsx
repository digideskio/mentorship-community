import React from "react"
import { connect } from "react-redux"

import Skill from "../components/Skill"
import Jumbotron from "../components/Jumbotron"
import Module from "../components/Module"


@connect(state => ({
  skills: state.skills.skills,
  modules: state.skills.modules,
}))
export default class SkillDetailView extends React.Component {
  getItemById(items, id) {
    let result = items.find((item) => {
      return item.id === id
    })
    return result
  }

  render() {
    let { modules, params, skills } = this.props
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
                  <Skill skill={this.getItemById(skills, id)} isSmall={true} />
                </div>
              )}
            </div>
          </div>
        }
        <h2>Modules</h2>

        <div className="row">
          {skill.modules.map((id, index) =>
            <div className="col-sm-3" key={id}>
              <Module module={this.getItemById(modules, id)} />
            </div>
          )}
        </div>
      </div>
    )
  }
}
