import React from "react"
import { Link } from "react-router"

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <span className="navbar-brand"><Link to="/">PyLadies SG Jumppad</Link></span>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li ><Link to="/mentor-profile">Mentor Profile</Link></li>
              <li ><Link to="/profile">Profile</Link></li>
              <li ><Link to="/login">Login</Link></li>
              <li ><Link to="/signup">Signup</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
