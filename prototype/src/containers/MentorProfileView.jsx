import React from "react"
import { Link } from "react-router"

import Avatar from "../components/Avatar"
import Button from "../components/Button"
import InputText from "../components/InputText"
import Jumbotron from "../components/Jumbotron"
import Panel from "../components/Panel"
import MentorProgressBox from "../components/MentorProgressBox"


export default class MentorProfileView extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron><h1>Your Mentor Profile</h1></Jumbotron>
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
              <h2>Finishing Tracks</h2>
              <MentorProgressBox title="Git Basics / Track #1: 5 pax" />
              <h2>Upcoming Meetups</h2>
              <div className="well">Git Basics / Track #2: Monday, April 1st (5 pax)</div>
              <h2>Your Mentored Tracks</h2>
              <div className="well">Git Basics / Track #1</div>
              <div className="well">Git Basics / Track #2</div>
              <div className="well">Git Basics / Track #3</div>
            </Panel>
          </div>
        </div>
      </div>
    )
  }
}
