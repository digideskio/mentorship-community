import React from "react"
import { connect } from "react-redux"
import { browserHistory, Link } from "react-router"

import * as authActions from "../actions/authActions"
import Avatar from "../components/Avatar"
import Button from "../components/Button"
import InputText from "../components/InputText"
import Jumbotron from "../components/Jumbotron"
import Panel from "../components/Panel"
import ProgressBox from "../components/ProgressBox"


@connect(state => ({}))
export default class ProfileView extends React.Component {
  handleLogout() {
    this.props.dispatch(authActions.performLogout())
    browserHistory.push('/')
  }

  render() {
    return (
      <div>
        <Jumbotron><h1>Your Profile</h1></Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Panel heading="Edit Your Profile">
                <form className="form">
                  <p>
                    <Avatar /> Upload Avatar
                  </p>
                  <InputText name="email" placeholder="Email" />
                  <InputText name="username" placeholder="Username" />
                  <InputText name="github_user" placeholder="Github User" />
                  <InputText name="slack_user" placeholder="Slack User" />
                  <InputText name="facebook_user" placeholder="Facebook User" />
                  <InputText name="password" placeholder="Password" />
                  <Button>Save</Button>
                  <Button onClick={() => this.handleLogout()}>Logout</Button>
                </form>
              </Panel>
            </div>
            <div className="col-sm-6">
              <Panel heading="Your Statistics">
                <h2>Your Progress</h2>
                <ProgressBox title="Git Basics: 8 of 12 modules" />
                <ProgressBox title="Python Basics: 0 of 10 modules" />
                <ProgressBox title="HTML & CSS Basics: 0 of 15 modules" />
                <ProgressBox title="Django Development: 0 of 38 modules" />
                <h2>Next Meetup</h2>
                <p>
                  There will be a meetup for [Skill Name & Track Name], soon!
                  You only need to finish 3 modules in order to participate!
                  You can do this :)
                </p>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
