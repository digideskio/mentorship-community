import React from "react"
import { Link } from "react-router"

import Navbar from "../components/Navbar"


export default class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.props.children}
          <div style={{height: "100px"}} />
        </div>
      </div>
    )
  }
}
