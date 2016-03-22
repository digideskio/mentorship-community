import React from "react"


export default class Panel extends React.Component {
  static propTypes = {
    heading: React.PropTypes.string,
    type: React.PropTypes.string,
  }

  render() {
    let { heading, type } = this.props
    if (!type) { type = "default" }
    return (
      <div className={`panel panel-${type}`}>
        {heading &&
          <div className="panel-heading">
            <h1 className="panel-title">{heading}</h1>
          </div>
        }
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
