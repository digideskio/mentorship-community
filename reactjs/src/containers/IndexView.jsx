import React from "react"
import { connect } from "react-redux"

import Button from "../components/Button"
import Jumbotron from "../components/Jumbotron"
import Skill from "../components/Skill"
import Panel from "../components/Panel"
import InputText from "../components/InputText"


export default class IndexView extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>We help you on your journey into software development</h1>
        </Jumbotron>
        <div className="row">
          <div className="col-sm-offset-1 col-sm-10">
            <div className="lead text-center">The best way to learn programming is at home and at your own pace. However, self-teaching such a complex topic can be daunting. Our goal is to structure your lessons, give you access to friendly mentors and introduce you to the broader communities.</div>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}
