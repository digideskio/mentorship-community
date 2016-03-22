import React from "react"
import { Link } from "react-router"

import Panel from "./Panel"


export default class Skill extends React.Component {
  static propTypes = {
    skill: React.PropTypes.object.isRequired,
  }

  render() {
    let { isSmall, skill } = this.props
    let panelType = "default"
    if (skill.modules_left === 0) {
      panelType = "success"
    }
    return (
      <Link to={`/skills/${skill.slug}`}>
        <Panel heading={skill.title} type={panelType}>
          {isSmall === undefined &&
            <div>
              <p>Number of Modules: {skill.total_modules}</p>
              <p>Mentors: {skill.mentors}</p>
              <p>Mentees: {skill.mentees}</p>
              <p>Alumni: {skill.alumni}</p>
            </div>
          }
          {isSmall &&
            <p>Modules left: {skill.modules_left}</p>
          }
        </Panel>
      </Link>
    )
  }
}
