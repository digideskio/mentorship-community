import React from "react"


export default class ImportText extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
  }

  render() {
    let { name, placeholder } = this.props
    return (
      <div className="form-group">
        <input className="form-control" type="text" name={name} placeholder={placeholder} />
      </div>
    )
  }
}
