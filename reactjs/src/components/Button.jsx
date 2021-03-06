import React from "react"
import Radium from "radium"
import { Link } from "react-router"

const styles = {
  base: {
    backgroundColor: "#428bca",
    border: "none",
    borderRadius: "0px",
    fontFamily: "'Open Sans', Arial, sans-serif",
    paddingBottom: "16px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "16px",
    ":hover": {
      backgroundColor: "#4e92df",
    }
  },
  isRed: {
    backgroundColor: "red",
  },
  isInNavbar: {
    "@media (max-width: 767px)": {
      color: "#757575",
      backgroundColor: "inherit",
      ":hover": {
        color: "#585858",
        backgroundColor: "inherit",
      }
    }
  }
}

@Radium
export default class Button extends React.Component {
  static propTypes = {
    isBig: React.PropTypes.bool,
    isInput: React.PropTypes.bool,
    isLoading: React.PropTypes.bool,
    isSmall: React.PropTypes.bool,
    linkTo: React.PropTypes.string,
    onClick: React.PropTypes.func,
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
      isRed,
      isBig,
      isInNavbar,
      isInput,
      isLoading,
      isSmall,
      linkTo,
      pullRight,
    } = this.props

    let display
    let className = "btn btn-primary"
    if (isSmall) { className += " btn-xs" }
    if (isBig) { className += " btn-lg" }
    if (pullRight) { className += " pull-right"}

    if (isLoading) {
      display = "Loading"
      className += " disabled"
    } else {
      display = this.props.children
    }

    if (!isInput && linkTo) {
      return (
        <Link to={linkTo} style={{padding: "0px"}}>
          <div
            className={className}
            style={[
              styles.base,
              isInNavbar && styles.isInNavbar,
            ]}
          >
            {display}
          </div>
        </Link>
      )
    } else if (!isInput && !linkTo) {
      return (
        <div
          className={className}
          onClick={(e) => this.handleClick(e)}
          style={[
            styles.base,
            isRed && styles.isRed,
          ]}
        >
          {display}
        </div>
      )
    } else {
      return (
        <input
          className={className}
          style={[styles.base]}
          type="submit"
          value={display}
        />
      )
    }
  }
}
