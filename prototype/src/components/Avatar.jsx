import React from "react"
import Radium from "radium"

const styles = {
  base: {
    backgroundColor: "#DFDFDF",
    borderRadius: "50px",
    display: "inline-block",
    marginRight: "0.5em",
  },
  flex: {
    alignItems: "center",
    display: "flex",
    fontSize: "8pt",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
}

@Radium
export default class Avatar extends React.Component {
  render () {
    let { size } = this.props
    if (!size) { size = "50px" }
    return (
      <div style={[
        styles.base,
        {width: size, height: size},
      ]}>
        <div style={[styles.flex]}>
          :)
        </div>
      </div>
    )
  }
}
