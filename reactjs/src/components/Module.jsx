import React from "react"
import { Link } from "react-router"

import InputCheckbox from "./InputCheckbox"
import Panel from "./Panel"


export default class Module extends React.Component {
  render() {
    let { title } = this.props
    return (
      <Panel heading={title} linkTo={`/modules/module-slug`}>
      </Panel>
    )
  }
}
