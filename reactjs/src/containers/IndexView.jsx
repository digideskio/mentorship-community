import React from "react"
import { connect } from "react-redux"

import Button from "../components/Button"
import Footer from "../components/Footer"
import Jumbotron from "../components/Jumbotron"
import Skill from "../components/Skill"
import Panel from "../components/Panel"
import InputText from "../components/InputText"


const styles = {
  marginTop: {
    marginTop: "2em",
  },
  marginBottom: {
    marginBottom: "0.5em",
  },
  icon: {
    fontSize: "30px",
  }
}


export default class IndexView extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 style={styles.marginBottom}>We help you on your journey into software development</h1>
          <Button isBig={true} linkTo="/signup">Sign Me Up!</Button>
        </Jumbotron>
        <div className="row">
          <div className="col-sm-offset-1 col-sm-10">
            <div className="lead text-center">The best way to learn programming is at home and at your own pace. However, self-teaching such a complex topic can be daunting. Our goal is to structure your lessons, give you access to friendly mentors and introduce you to the broader communities.</div>
            <div className="text-center">
              <Button isBig={true} linkTo="/signup">Great, Sign Me Up!</Button>
            </div>
          </div>
        </div>
        <hr />
        <h1 className="text-center">How It Works</h1>
        <div className="row" style={styles.marginTop}>
          <div className="col-sm-3">
            <div className="text-center">
              <div className="glyphicon glyphicon-user" style={styles.icon}></div>
              <h2 className="text-center">Sign up</h2>
              <p>Simply come up with a username and sign up for an account.</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="text-center">
              <div
                className="glyphicon glyphicon-screenshot"
                style={styles.icon}
              />
              <h2 className="text-center">Pick a Skill</h2>
              <p>
                Select one of the available skills that you want to learn.
                Some skills are so complex, they are based on several other
                sub-skills. We show you nicely how it is all related to each
                other.
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="text-center">
              <div
                className="glyphicon glyphicon-book"
                style={styles.icon}
              />
              <h2 className="text-center">Teach Yourself</h2>
              <p>
                We break down each skill into very small tasks and tell you
                what you need to learn. You take your time and when you think
                you are ready, you do a little test.
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="text-center">
              <div
                className="glyphicon glyphicon-map-marker"
                style={styles.icon}
              />
              <h2 className="text-center">Meet Your Mentor</h2>
              <p>
                Once you have learned a few modules, you will meet your mentor
                in a small group and discuss the topics you have learned. This
                will make sure that you got it all right and that you meet
                interesting people in the community.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button isBig={true} linkTo="/signup">Awesome, Sign Me Up!</Button>
        </div>
        <hr />
        <Footer />
      </div>
    )
  }
}
