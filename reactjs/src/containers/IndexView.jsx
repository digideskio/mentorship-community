import React from "react"
import { connect } from "react-redux"

import Jumbotron from "../components/Jumbotron"
import Skill from "../components/Skill"


@connect(state => ({
  skills: state.skills.skills
}))
export default class IndexView extends React.Component {
  render() {
    let {skills} = this.props
    return (
      <div>
        <Jumbotron>
          <h1>What do you want to learn?</h1>
        </Jumbotron>
        <div className="row">
          {skills.map((item, index) =>
            <div className="col-sm-4" key={item.id}>
              <Skill skill={item} />
            </div>
          )}
        </div>
      </div>
    )
  }
}
