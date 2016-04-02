import React from "react"

import Button from "../components/Button"
import InputText from "../components/InputText"
import Panel from "../components/Panel"


export default class AccountConfirmEmailView extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-offset-3 col-sm-6">
          <Panel heading="Confirm Email">
            <form className="form">
              <Button>Confirm</Button>
            </form>
          </Panel>
        </div>
      </div>
    )
  }
}
