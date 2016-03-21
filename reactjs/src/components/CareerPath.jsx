import React from "react"

import Panel from "./Panel"


export default class CareerPath extends React.Component {
  static propTypes = {
    heading: React.PropTypes.string.isRequired,
  }

  render() {
    let { heading } = this.props
    return (
      <Panel heading={heading}>
        <p>Number of Modules: 125</p>
        <p>Mentors: 15</p>
        <p>Mentees: 230</p>
        <p>Alumni: 12</p>
      </Panel>
    )
  }
}
