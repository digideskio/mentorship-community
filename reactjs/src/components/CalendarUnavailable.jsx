import React from "react"
import Radium from "radium"

import IconOK from "./IconOK"


const styles = {
  base: {
    backgroundColor: "#f7e9e8",
    height: "100%",
    width: "100%",
    padding: "5px",
    textAlign: "center",
  },
}


@Radium
export default class CalendarAvailable extends React.Component {
  render() {
    return (
      <div style={[styles.base]}>
        &nbsp;
      </div>

    )
  }
}
