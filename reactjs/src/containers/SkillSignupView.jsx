import React from "react"
import { Link } from "react-router"

import Button from "../components/Button"
import Jumbotron from "../components/Jumbotron"
import Skill from "../components/Skill"


export default class SkillSignupView extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Sign Me Up For [SKILL NAME]</h1>
          <p style={{height: "1em"}}></p>
        </Jumbotron>
        <div className="row">
          <div className="col-sm-offset-1 col-sm-10">
            <div className="lead text-center">
              Wowzy! We are proud to have you! By signing up for
              <b> [SKILL NAME]</b>, you will also be enlisted for the
              prerequisite skills <b>[Git Basics]</b>, <b>[Python Basics] </b>
              and <b>[HTML & CSS Basics]</b>
            </div>

            <div className="lead text-center">
              Don't worry! You are not alone in this. 23 other members are
              currently learning this skill and the next meetup will probably
              happen at <b>[DATE]</b>.
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/modules/module-slug">
            <Button>Let's Get Started</Button>
          </Link>
        </div>
      </div>
    )
  }
}
