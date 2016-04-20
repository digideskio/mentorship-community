import React from "react"
import Radium from "radium"

import * as theme from "../theme"


const styles = {
  base: {
    fontFamily: theme.FONT_FAMILY_SERIF,
  },
  isInverted: {
    color: "white",
    paddingBottom: "0.5em",
    borderBottom: "1px solid #a6b3bc",
    marginBottom: "0.5em",
  }
}


@Radium
export default class TextTitle extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    isInverted: React.PropTypes.bool,
  }

  render() {
    let { className, isInverted } = this.props
    return (
      <h1
        className={className}
        style={[
          styles.base,
          isInverted && styles.isInverted,
        ]}
      >
        {this.props.children}
      </h1>
    )
  }
}
