import React from "react"
import Radium from "radium"

import * as theme from "../theme"
import FeatureDescriptionIcon from "./FeatureDescriptionIcon"


const styles = {
  base: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottom: `1px solid ${theme.COLOR_GRAY}`,
    paddingBottom: "1em",
    marginBottom: "2em",
  },
  icon: {
    width: "80px",
    display: "flex",
    flex: "0 0 auto",
  },
  contentContainer: {
    fontFamily: theme.FONT_FAMILY_SANS_SERIF,
    paddingLeft: "2em",
    paddingTop: "0.5em",
    flex: "0 1 auto",
  },
  title: {
    fontWeight: "bold",
    color: theme.COLOR_HEADLINE,
    fontSize: theme.FONT_SIZE_LARGE,
    marginBottom: "0.2em",
  },
  content: {
    fontFamily: theme.FONT_FAMILY_SANS_SERIF,
    fontSize: theme.FONT_SIZE_SMALL,
    lineHeight: "1.7em",
  },
}


@Radium
export default class FeatureDescription extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    step: React.PropTypes.string.isRequired,
  }

  render() {
    let { children, step, title } = this.props

    return (
      <div style={[styles.base]}>
        <div style={[styles.icon]}><FeatureDescriptionIcon step={step} /></div>
        <div style={[styles.contentContainer]}>
          <div style={[styles.title]}>{title}</div>
          <p style={[styles.content]}>{children}</p>
        </div>
      </div>
    )
  }
}
