import React from "react"

import Button from "./Button"


export default class ProgressBox extends React.Component {
  render() {
    let { title } = this.props
    return (
      <div className="well">
        {title}
        <Button isSmall={true} pullRight={true}>Continue Learning</Button>
      </div>
    )
  }
}
