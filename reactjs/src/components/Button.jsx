import React from "react"


export default class Button extends React.Component {
  handleClick() {
    let { isLoading, onClick } = this.props
    if (isLoading === false || isLoading === undefined) {
      onClick()
    }
  }

  render() {
    let { isLoading, isSmall, onClick, pullRight } = this.props
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
      <div
        className={className}
        onClick={() => this.handleClick()}
      >
        {display}
      </div>
    )
  }
}
