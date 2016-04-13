import React from "react"
import { Link } from "react-router"


export default class Button extends React.Component {
  static propTypes = {
    isBig: React.PropTypes.bool,
    isLoading: React.PropTypes.bool,
    isSmall: React.PropTypes.bool,
    linkTo: React.PropTypes.string,
    pullRight: React.PropTypes.bool,
  }

  handleClick(e) {
    let { isLoading, onClick } = this.props
    if (isLoading === false || isLoading === undefined) {
      if (onClick) {
        onClick(e)
      }
    }
  }

  render() {
    let {
      isBig,
      isLoading,
      isSmall,
      linkTo,
      pullRight,
    } = this.props
    let className = "btn btn-primary"
    if (isSmall) { className += " btn-xs" }
    if (isBig) { className += " btn-lg" }

    let display = "Loading"
    if (isLoading) {
      className += " disabled"
    } else {
      display = this.props.children
    }
    if (pullRight) { className += " pull-right"}
    if (linkTo) {
      return (
        <Link to={linkTo}>
          <input className={className} type="submit" value={display} />
        </Link>
      )
    } else {
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
}
