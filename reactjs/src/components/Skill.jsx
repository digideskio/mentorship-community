import React from "react"
import { Link } from "react-router"

import Panel from "./Panel"


export default class Skill extends React.Component {
  render() {
    let { isSmall, modulesLeft, title } = this.props
    let panelType = "default"
    if (modulesLeft === 0) {
        panelType = "success"
    }
    return (
      <Link to={`/skills/skill-name`}>
        <Panel heading={title} type={panelType}>
          {!isSmall &&
            <div>
              <p>Number of Modules: 123</p>
              <p>Mentors: 2</p>
              <p>Mentees: 20</p>
              <p>Alumni: 10</p>
            </div>
          }
          {isSmall &&
            <div>
              <p>Modules left: {modulesLeft}</p>
            </div>
          }
        </Panel>
      </Link>
    )
  }
}
