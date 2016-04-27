import React from "react"
import Radium from "radium"

import * as theme from "../theme"


const styles = {
  base: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: `7px solid ${theme.COLOR_GRAY}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: "85%",
    height: "85%",
    borderRadius: "50%",
    backgroundColor: "#dfdfdf",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}


@Radium
export default class FeatureDescriptionIcon extends React.Component {
  static propTypes = {
    step: React.PropTypes.string.isRequired,
  }

  render() {
    let { step } = this.props

    return (
      <div style={[styles.base]}>
        <div style={[styles.innerCircle]}>
          {step}
        </div>
      </div>
    )
  }
}
