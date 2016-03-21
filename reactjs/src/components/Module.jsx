import React from "react"
import { Link } from "react-router"

import Panel from "./Panel"


export default class Module extends React.Component {
  static propTypes = {
    heading: React.PropTypes.string.isRequired,
  }

  render() {
    let { heading } = this.props
    return (
      <Panel heading={heading}>
        <p></p>
      </Panel>
    )
  }
}
