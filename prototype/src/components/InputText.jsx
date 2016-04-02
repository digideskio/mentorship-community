import React from "react"
import Radium from "radium"


const styles = {
  inline: {
    marginRight: "0.5em",
  }
}


@Radium
export default class ImportText extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    inline: React.PropTypes.bool,
  }

  render() {
    let { inline, name, placeholder } = this.props
    return (
      <div
        className="form-group"
        style={[
          inline && styles.inline
      ]}>
        <input className="form-control" type="text" name={name} placeholder={placeholder} />
      </div>
    )
  }
}
