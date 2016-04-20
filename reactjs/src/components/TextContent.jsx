import React from "react"
import Radium from "radium"

import * as theme from "../theme"


const styles = {
  base: {
    fontFamily: theme.FONT_FAMILY_SANS_SERIF,
    fontSize: theme.FONT_SIZE_NORMAL,
    fontWeight: 100,
    lineHeight: "1.6em",
  },
  isInverted: {
    color: "white",
    letterSpacing: "1px",
  }
}


@Radium
export default class TextContent extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    isInverted: React.PropTypes.bool,
  }

  render() {
    let { className, isInverted } = this.props
    return (
      <p
        className={className}
        style={[
          styles.base,
          isInverted && styles.isInverted,
        ]}
      >
        {this.props.children}
      </p>
    )
  }
}
