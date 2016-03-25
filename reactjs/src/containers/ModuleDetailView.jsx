import React from "react"
import { connect } from "react-redux"

import Jumbotron from "../components/Jumbotron"


export default class ModuleDetailView extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Let's do this: [MODULE NAME]</h1>
        </Jumbotron>
        <h2>Description</h2>
        <p>Here we will describe what is the goal of this module</p>
        <h2>Learning Material</h2>
        <p>Here we will link to free online resources that can teach you.</p>
        <h2>Test Yourself</h2>
        <p>
          Here we will describe what needs to be True in order to verify that
          you understood the topic.
        </p>
      </div>
    )
  }
}
