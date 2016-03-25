import React from "react"

import Avatar from "./Avatar"
import Module from "./Module"
import Panel from "./Panel"


export default class Track extends React.Component {
  constructor(props) {
    super(props)
    this.state = {show: "track"}
  }

  handleOptionsClick(type) {
    this.setState({show: type})
  }

  renderPanelOptions() {
    return (
      <div>
        <span
          className="glyphicon glyphicon-file"
          onClick={() => this.handleOptionsClick("track")}
          style={{marginRight: "0.5em"}}
        />
        <span
          className="glyphicon glyphicon-info-sign"
          onClick={() => this.handleOptionsClick("info")}
          style={{marginRight: "0.5em"}}
        />
        <span
          className="glyphicon glyphicon-cog"
          onClick={() => this.handleOptionsClick("options")}
        />
      </div>
    )
  }

  renderInfo() {
    return (
      <div>
        <h3>Mentors</h3>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <h3>Mentees</h3>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
    )
  }

  renderOptions() {
    return (
      <div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /><span>I can mentor this</span>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /><span>I want to learn</span>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /><span>I have done this</span>
          </label>
        </div>
      </div>
    )
  }

  renderTrack() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    )
  }

  render() {
    let { title, type } = this.props
    let { show } = this.state
    let panelHeadingRight = this.renderPanelOptions()
    let nodes
    if (show === "track") { nodes = this.renderTrack() }
    if (show === "options") { nodes = this.renderOptions() }
    if (show === "info") { nodes = this.renderInfo() }
    return (
      <Panel heading={title} headingRight={panelHeadingRight} type={type}>
        {nodes}
      </Panel>
    )
  }
}
