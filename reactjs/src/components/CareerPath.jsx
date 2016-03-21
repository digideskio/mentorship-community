import React from "react"
import { Link } from "react-router"

import Panel from "./Panel"


export default class CareerPath extends React.Component {
  static propTypes = {
    heading: React.PropTypes.string.isRequired,
    isSmall: React.PropTypes.bool,
  }

  render() {
    let { heading, isSmall } = this.props
    return (
      <Link to="careers/django">
        <Panel heading={heading}>
          {isSmall === undefined &&
            <div>
              <p>Number of Modules: 125</p>
              <p>Mentors: 15</p>
              <p>Mentees: 230</p>
              <p>Alumni: 12</p>
            </div>
          }
          {isSmall &&
            <p>Modules: 125</p>
          }
        </Panel>
      </Link>
    )
  }
}
