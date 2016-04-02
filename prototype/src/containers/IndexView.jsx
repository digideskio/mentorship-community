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
            <div className="lead text-center">Programming is learned best while trying it at home, but self-teaching such a complex topic can be frustrating. Our goal is to structure your lessons, give you access to friendly mentors and introduce you to the broader communities.</div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <Skill title="Django Development" />
          </div>
          <div className="col-sm-4">
            <Skill title="Git Basics" />
          </div>
          <div className="col-sm-4">
            <Skill title="Python Basics" />
          </div>
          <div className="col-sm-4">
            <Skill title="HTML & CSS Basics" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <Panel heading="Skills on the whishlist">
              <p>Skill Name 1 (15) <span className="glyphicon glyphicon-thumbs-up"></span></p>
              <p>Skill Name 2 (2) <span className="glyphicon glyphicon-thumbs-up"></span></p>
              <h3>Something else?</h3>
              <InputText placeholder="Enter skill here" />
              <Button>Submit</Button>
            </Panel>
          </div>
        </div>
      </div>
    )
  }
}
