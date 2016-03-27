import React from "react"
import Radium from "radium"


const styles = {
  base: {
    backgroundColor: "#DFDFDF",
    padding: "5px",
  }
}


@Radium
export default class CalendarName extends React.Component {
  render() {
    let { name } = this.props
    return (
      <div style={[styles.base]}>
        {name}
      </div>
    )
  }
}
