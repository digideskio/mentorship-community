import React from "react"
import Radium from "radium"
import { Link } from "react-router"
import Button from "./Button"

const styles = {
  navbar: {
    fontFamily: "'Open Sans', Arial, sans-serif",
    borderRight: "none",
    borderLeft: "none",
    borderTop: "none",
    backgroundColor: "white",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginBottom: "0px",
  }
}


@Radium
export default class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-default"
        style={[styles.navbar]}
      >
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <span className="navbar-brand"><Link to="/">PyLadies SG Jumppad</Link></span>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/login">Login</Link></li>
              <li>
                <Button
                  linkTo="/signup"
                  isLink={true}
                  isInNavbar={true}
                >
                  Sign Up
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
