import React from "react"
import Radium from "radium"


const styles = {
  base: {
  }
}


@Radium
export default class IconOK extends React.Component {
  render() {
    return (
      <span
        aria-hidden="true"
        className="glyphicon glyphicon-ok"
        style={{color: "#73ba65"}}
      ></span>
    )
  }
}
