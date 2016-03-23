import React from "react"
import { Link } from "react-router"

import InputCheckbox from "./InputCheckbox"
import Panel from "./Panel"


export default class Module extends React.Component {
  static propTypes = {
    module: React.PropTypes.object.isRequired,
  }

  render() {
    let { module } = this.props
    return (
      <Panel heading={module.title} linkTo={`/modules/${module.slug}`}>
        <div className="row">
          <div className="col-sm-6">
            <div>I can mentor</div>
          </div>
          <div className="col-sm-6">
            <InputCheckbox />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div>I have done this</div>
          </div>
          <div className="col-sm-6">
            <InputCheckbox />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div>I need a mentor</div>
          </div>
          <div className="col-sm-6">
            <InputCheckbox />
          </div>
        </div>
      </Panel>
    )
  }
}
