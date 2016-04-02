import React from "react"
import ReactDOM from "react-dom"
import Radium from "radium"


const styles = {
  user: {
    fontSize: "12px",
  }
}


@Radium
export default class CalendarDateMentors extends React.Component {
  componentDidMount() {
    jQuery(ReactDOM.findDOMNode(this.refs.tooltip)).tooltip();
  }

  render() {
    return (
      <span
        ref="tooltip"
        aria-hidden="true"
        className="glyphicon glyphicon-user"
        style={[styles.user]}
        title="Names of mentors available on this day"
        data-toggle="tooltip"
      ></span>
    )
  }
}
