import React from "react"
import { Link } from "react-router"

import Button from "./Button"


export default class MentorProgressBox extends React.Component {
  render() {
    let { title } = this.props
    return (
      <div className="well">
        {title}
        <Link to="/skills/skill-name">
          <Button isSmall={true} pullRight={true}>Submit Meetup Dates</Button>
        </Link>
      </div>
    )
  }
}
