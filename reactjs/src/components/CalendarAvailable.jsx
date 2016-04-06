import React from "react"
import Radium from "radium"

import IconOK from "./IconOK"


const styles = {
  base: {
    backgroundColor: "#e3f1e2",
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
        <IconOK />
      </div>

    )
  }
}
