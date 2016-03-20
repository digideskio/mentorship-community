import React from "react"
import { Link } from "react-router"

import Navbar from "../components/Navbar"


export default class AppContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}
