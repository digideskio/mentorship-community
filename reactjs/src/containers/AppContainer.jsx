import React from "react"
import { connect } from "react-redux"
import { StyleRoot } from "radium";
import { Link } from "react-router"

import * as authActions from "../actions/authActions"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


@connect(state => ({}))
export default class AppContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(authActions.setLocalToken())
  }

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
