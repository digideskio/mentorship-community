import React from "react"
import { Link } from "react-router"

import Avatar from "./Avatar"
import CalendarDateVotes from "./CalendarDateVotes"
import InputCheckbox from "./InputCheckbox"
import Panel from "./Panel"


export default class Module extends React.Component {
  render() {
    let { currentLearners, title, type, showDateVotes } = this.props
    let learners = []
    for (let i=0; i < currentLearners; i++) {
      learners.push(i)
    }
    return (
      <Panel heading={title} linkTo={`/modules/module-slug`} type={type}>
        {currentLearners &&
          <div>
            {learners.map((i) =>
              <Avatar size="20px" key={i} />
            )}
          </div>
        }
        {showDateVotes &&
          <div>
            <h4>Possible meetup dates:</h4>
            <CalendarDateVotes />
          </div>
        }
      </Panel>
    )
  }
}
