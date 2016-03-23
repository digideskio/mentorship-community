import React from "react"
import { connect } from "react-redux"

import Jumbotron from "../components/Jumbotron"


@connect(state => ({
  modules: state.skills.modules
}))
export default class ModuleDetailView extends React.Component {
  render() {
    let { modules, params } = this.props
    let { slug } = params
    let mod = modules.find((item) => {
      return item.slug == slug
    })
    return (
      <div>
        <Jumbotron>
          <h1>Let's do this: {mod.title}</h1>
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
