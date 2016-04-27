import React from "react"
import Radium from "radium"
import { connect } from "react-redux"

import * as theme from "../theme"
import Button from "../components/Button"
import FeatureDescription from "../components/FeatureDescription"
import Footer from "../components/Footer"
import InputText from "../components/InputText"
import Jumbotron from "../components/Jumbotron"
import Panel from "../components/Panel"
import Skill from "../components/Skill"
import TextContent from "../components/TextContent"
import TextTitle from "../components/TextTitle"


const styles = {
  marginTop: {
    marginTop: "2em",
  },
  marginBottom: {
    marginBottom: "0.5em",
  },
  icon: {
    fontSize: "30px",
  },
  header: {
    backgroundImage: "url(/static/img/main_bg.jpg)",
    backgroundSize: "cover",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1em",
    textAlign: "center",
  },
  title: {
    fontFamily: theme.FONT_FAMILY_SERIF,
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "white",
    marginBottom: "0.5em",
  },
  subtitle: {
    color: "white",
    display: "inline-block",
    fontFamily: theme.FONT_FAMILY_SANS_SERIF,
    lineHeight: "1.2em",
    marginTop: "0.5em",
  },
  lead: {
    fontFamily: theme.FONT_FAMILY_SANS_SERIF,
    fontSize: "25px",
  },
  howItWorks: {
    backgroundColor: "#4d6779",
  },
  rowEqHeight: {
    display: "flex",
    "@media (max-width: 767px)": {
      display: "inherit",
    },
  },
}


@Radium
export default class IndexView extends React.Component {
  render() {
    return (
      <div>
        <div style={[styles.header]}>
          <h1 style={[styles.title]}>
            Learn how to code at your own pace,<br />
            <small style={[styles.subtitle]}>
              Meet mentors and join the community!
            </small>
          </h1>
          <Button isRed={true} isBig={true} linkTo="/signup">Sign Me Up!</Button>
        </div>
        <div className="container" style={[{marginTop: "3em"}]}>
          <div className="row">
            <div className="col-sm-offset-1 col-sm-10">
              <div className="lead text-center" style={[styles.lead]}>
                <p>
                  The best way to learn programming is at home and at your own
                  pace.
                </p>
                <p>
                  However, self-teaching such a complex topic can be daunting.
                  We are here to structure your lessons, give you access to
                  friendly mentors and introduce you to the broader
                  communities.
                </p>
              </div>
              <div className="text-center">
                <Button isBig={true} linkTo="/signup">
                  Great, Sign Me Up!
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={[{marginTop: "3em",}]}
        >
          <div className="row" style={[styles.rowEqHeight]}>
            <div
              className="col-sm-6"
              style={[styles.howItWorks, {padding: "1em 2em"}]}
            >
              <TextTitle
                isInverted={true}
              >
                How It Works
              </TextTitle>
              <TextContent isInverted={true}>
                Our app is designed to structure your lessons into easy to
                digest portions. You teach yourself at home at your own pace
                and at the end of each lesson you can test yourself. Once you
                have solved enough lessons, you can meet a friendly mentor
                and discuss what you have learned. Rince and repeat. The app
                shows you where you are in your learning journey and what still
                lies ahead of you.
              </TextContent>
            </div>
            <div
              className="col-sm-6"
              style={[{padding: "1em 2em"}]}
            >
              <FeatureDescription step="1" title="Pick a skill">
                Select one of the available skills that you want to learn.
                Some skills are so complex, they are based on several other
                prerequisites. We show you how it is all related to each other.
              </FeatureDescription>

              <FeatureDescription step="2" title="Learn at home">
                We break down each skill into very small tasks and tell you
                what you need to learn. You can take your time and learn at
                your own pace. When you think you are ready, you can do a
                little test.
              </FeatureDescription>

              <FeatureDescription step="3" title="Meet your mentor">
                Once you have learned a few modules, you will meet your mentor
                in a small group and discuss the topics you have learned.
                This will make sure that you got it all right and that you meet
                interesting people in the community.
              </FeatureDescription>
            </div>
          </div>
          <div className="text-center" style={[{marginTop: "2em"}]}>
            <Button isBig={true} linkTo="/signup">Awesome, Sign Me Up!</Button>
          </div>
          <hr />
          <Footer />
        </div>
      </div>
    )
  }
}
