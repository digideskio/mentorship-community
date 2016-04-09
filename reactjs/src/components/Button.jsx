import React from "react"


export default class Button extends React.Component {
  handleClick(e) {
    let { isLoading, onClick } = this.props
    if (isLoading === false || isLoading === undefined) { onClick(e) }
  }

  render() {
    let { isLoading, isSmall, pullRight } = this.props
    let className = "btn btn-primary"
    if (isSmall) { className += " btn-xs" }

    let display = "Loading"
    if (isLoading) {
      className += " disabled"
    } else {
      display = this.props.children
    }
    if (pullRight) { className += " pull-right"}
    return (
      <input
        className={className}
        onClick={(e) => this.handleClick(e)}
        type="submit"
        value={display}
      />
    )
  }
}
