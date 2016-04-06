import React from "react"
import { connect } from "react-redux"

import Button from "../components/Button"
import InputText from "../components/InputText"
import NonFieldErrors from "../components/NonFieldErrors"
import Panel from "../components/Panel"

import * as authActions from "../actions/authActions"


@connect(state => ({
  auth: state.auth,
}))
export default class SignupView extends React.Component {
  handleClick() {
    let formData = new FormData(this.form)
    this.props.dispatch(authActions.postSignup(formData))
  }

  render() {
    let { auth } = this.props
    return (
      <div className="row">
        <div className="col-sm-offset-3 col-sm-6">
          <Panel heading="Signup">
            <div className="row">
              <div className="col-sm-offset-3 col-sm-6">
                <form ref={(ref) => this.form = ref} className="form">
                  <NonFieldErrors errors={auth.formErrors} />
                  <InputText
                    errors={auth.formErrors}
                    name="username"
                    placeholder="Username"
                  />
                  <InputText
                    errors={auth.formErrors}
                    name="email"
                    placeholder="Email"
                  />
                  <InputText
                    errors={auth.formErrors}
                    name="password1"
                    placeholder="Password"
                  />
                  <InputText
                    errors={auth.formErrors}
                    name="password2"
                    placeholder="Repeat Password"
                  />
                  <Button
                    isLoading={auth.isPostingSignup}
                    onClick={() => this.handleClick()}
                  >
                    Signup
                  </Button>
                </form>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    )
  }
}
