import React from "react"


export default class Button extends React.Component {
  render() {
    let { isSmall, pullRight } = this.props
    let className = "btn btn-primary"
    if (isSmall) { className += " btn-xs" }
    if (pullRight) { className += " pull-right"}
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}
