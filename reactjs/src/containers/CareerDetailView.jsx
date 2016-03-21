import React from "react"

import CareerPath from "../components/CareerPath"
import Jumbotron from "../components/Jumbotron"
import Module from "../components/Module"


export default class CareerDetailView extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>I want to be a Django Developer</h1>
        </Jumbotron>
        <h2>Prerequisites</h2>
        <div className="row">
          <div className="col-sm-2">
            <CareerPath heading="Git" isSmall={true} />
          </div>
          <div className="col-sm-2">
            <CareerPath heading="UNIX Basics" isSmall={true} />
          </div>
          <div className="col-sm-2">
            <CareerPath heading="HTML" isSmall={true} />
          </div>
          <div className="col-sm-2">
            <CareerPath heading="CSS" isSmall={true} />
          </div>
        </div>
        <h2>Modules</h2>

        <div className="row">
          <div className="col-sm-2">
            <Module heading="Installation" />
          </div>
          <div className="col-sm-2">
            <Module heading="Models" />
          </div>
          <div className="col-sm-2">
            <Module heading="Views" />
          </div>
          <div className="col-sm-2">
            <Module heading="Forms" />
          </div>
          <div className="col-sm-2">
            <Module heading="Templates" />
          </div>
        </div>
      </div>
    )
  }
}
