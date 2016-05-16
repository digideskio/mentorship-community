import React from "react"
import { StyleRoot } from "radium";
import { Link } from "react-router"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default class AppContainer extends React.Component {
  render() {
    return (
      <StyleRoot>
        <Navbar />
        {this.props.children}
        <Footer />
      </StyleRoot>
    )
  }
}
