import React from "react"
import Radium from "radium"


const styles = {
  base: {
    backgroundColor: "#f7e9e8",
    height: "100%",
    width: "100%",
    padding: "5px",
    textAlign: "center",
  },
  checked: {
    backgroundColor: "#e3f1e2",
  }
}


@Radium
export default class CalendarInputCheckbox extends React.Component {
  constructor(props) {
    super(props)
    self.state = {checked: false}
  }

  handleChange(e) {
    this.setState({checked: e.target.checked});
  }

  render() {
    let { checked } = this.state
    return (
      <div
        style={[
          styles.base,
          checked && styles.checked,
      ]}>
        <input type="checkbox" onChange={(e) => this.handleChange(e)} />
      </div>
    )
  }
}
