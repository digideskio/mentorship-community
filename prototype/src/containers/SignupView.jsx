import React from "react"

import Button from "../components/Button"
import InputText from "../components/InputText"
import Panel from "../components/Panel"



export default class SignupView extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-offset-3 col-sm-6">
          <Panel heading="Signup">
            <div className="row">
              <div className="col-sm-offset-3 col-sm-6">
                <form className="form">
                  <InputText name="email" placeholder="Email" />
                  <InputText name="password" placeholder="Password" />
                  <Button>Signup</Button>
                </form>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    )
  }
}
