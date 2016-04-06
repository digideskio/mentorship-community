import React from "react"
import { Link } from "react-router"

import Avatar from "../components/Avatar"
import Button from "../components/Button"
import InputText from "../components/InputText"
import Jumbotron from "../components/Jumbotron"
import Panel from "../components/Panel"
import ProgressBox from "../components/ProgressBox"


export default class ProfileView extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron><h1>Your Profile</h1></Jumbotron>

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
    )
  }
}
