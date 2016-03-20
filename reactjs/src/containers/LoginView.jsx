import React from "react"

import Panel from "../components/Panel"


export default class LoginView extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-offset-3 col-sm-6">
          <Panel heading="Login">
            <div>Login</div>
          </Panel>
        </div>
      </div>
    )
  }
}
