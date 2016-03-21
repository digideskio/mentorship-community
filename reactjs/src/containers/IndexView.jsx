import React from "react"

import Jumbotron from "../components/Jumbotron"
import CareerPath from "../components/CareerPath"


export default class IndexView extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>What do you want to be?</h1>
        </Jumbotron>
        <div className="row">
          <div className="col-sm-4">
            <CareerPath heading="Django Developer" />
          </div>

          <div className="col-sm-4">
            <CareerPath heading="Frontend Developer" />
          </div>

          <div className="col-sm-4">
            <CareerPath heading="Ruby Developer" />
          </div>
        </div>
      </div>
    )
  }
}
