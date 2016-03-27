import React from "react"

import Avatar from "./Avatar"
import Button from "./Button"
import Calendar from "./Calendar"
import CalendarMentee from "./CalendarMentee"
import Module from "./Module"
import Panel from "./Panel"
import InputText from "./InputText"


export default class Track extends React.Component {
  constructor(props) {
    super(props)
    this.state = {show: "track"}
  }

  handleOptionsClick(type) {
    this.setState({show: type})
  }

  render() {
    let { title, type } = this.props
    let { show } = this.state
    let panelHeadingRight = this.renderPanelOptions()
    let nodes
    if (show === "calendar") { nodes = this.renderCalendarMentor() }
    if (show === "calendar-mentee") { nodes = this.renderCalendarMentee() }
    if (show === "info") { nodes = this.renderInfo() }
    if (show === "options") { nodes = this.renderOptions() }
    if (show === "track") { nodes = this.renderTrack() }
    return (
      <Panel heading={title} headingRight={panelHeadingRight} type={type}>
        {nodes}
      </Panel>
    )
  }

  renderCalendarMentee() {
    return (
      <div>
        <h3>Mentee Calendar</h3>
        <CalendarMentee />
      </div>
    )
  }

  renderCalendarMentor() {
    return (
      <div>
        <h3>Mentor Calendar</h3>
        <form className="form-inline">
          <InputText name="date" placeholder="Date" inline={true} />
          <InputText name="time" placeholder="Time" inline={true} />
          <Button>Add Date</Button>
          <hr />
          <Calendar />
        </form>
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

  renderPanelOptions() {
    return (
      <div>
        <span
          className="glyphicon glyphicon-file"
          onClick={() => this.handleOptionsClick("track")}
          style={{marginRight: "0.5em"}}
        />
        <span
          className="glyphicon glyphicon-calendar"
          onClick={() => this.handleOptionsClick("calendar")}
          style={{marginRight: "0.5em"}}
        />
        <span
          className="glyphicon glyphicon-calendar"
          onClick={() => this.handleOptionsClick("calendar-mentee")}
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

  renderTrack() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    )
  }
}
