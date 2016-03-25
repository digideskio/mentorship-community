import React from "react"
import { Link } from "react-router"

import Avatar from "./Avatar"
import InputCheckbox from "./InputCheckbox"
import Panel from "./Panel"


export default class Module extends React.Component {
  render() {
    let { currentLearners, title, type } = this.props
    let learners = []
    for (let i=0; i < currentLearners; i++) {
      learners.push(1)
    }
    return (
      <Panel heading={title} linkTo={`/modules/module-slug`} type={type}>
        {currentLearners &&
          <div>
            {learners.map((i) =>
              <Avatar size="20px" />
            )}
          </div>
        }
      </Panel>
    )
  }
}
