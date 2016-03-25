import React from "react"
import { Link } from "react-router"

import Panel from "./Panel"


export default class Skill extends React.Component {
  render() {
    let { isSmall, title } = this.props
    return (
      <Link to={`/skills/skill-name`}>
        <Panel heading={title}>
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
              <p>Modules left: 12</p>
            </div>
          }
        </Panel>
      </Link>
    )
  }
}
