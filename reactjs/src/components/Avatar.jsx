import React from "react"
import Radium from "radium"

const styles = {
  base: {
    backgroundColor: "#EFEFEF",
    borderRadius: "50px",
    display: "inline-block",
    height: "50px",
    marginRight: "0.5em",
    width: "50px",
  },
  flex: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
}

@Radium
export default class Avatar extends React.Component {
  render () {
    return (
      <div style={[styles.base, ]}>
        <div style={[styles.flex]}>
          :)
        </div>
      </div>
    )
  }
}
