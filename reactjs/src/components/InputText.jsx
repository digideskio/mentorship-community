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
    errors: React.PropTypes.object,
    inline: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
  }

  render() {
    let { errors, inline, name, placeholder } = this.props
    let errorsDisplay
    if (errors && errors[name]) {
      errorsDisplay = errors[name][0]
    }
    return (
      <div
        className="form-group"
        style={[
          inline && styles.inline
      ]}>
        <input className="form-control" type="text" name={name} placeholder={placeholder} />
        {errorsDisplay &&
          <span>{errorsDisplay}</span>
        }
      </div>
    )
  }
}
