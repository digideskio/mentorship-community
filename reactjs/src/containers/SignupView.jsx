import React from "react"
import { connect } from "react-redux"

import Button from "../components/Button"
import InputText from "../components/InputText"
import NonFieldErrors from "../components/NonFieldErrors"
import Panel from "../components/Panel"

import * as authActions from "../actions/authActions"
import * as theme from "../theme"


@connect(state => ({
  auth: state.auth,
}))
export default class SignupView extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(this.form)
    this.props.dispatch(authActions.postSignup(formData))
  }

  render() {
    let { auth } = this.props
    return (
      <div className="row" style={{marginTop: theme.MARGIN_TOP_CONTAINER}}>
        <div className="col-sm-offset-3 col-sm-6">
          <Panel heading="Signup">
            <div className="row">
              <div className="col-sm-offset-3 col-sm-6">
                <form
                  ref={(ref) => this.form = ref}
                  className="form"
                  encType="multipart/form-data"
                  onSubmit={(e) => this.handleSubmit(e)}
                >
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
                    type="password"
                  />
                  <InputText
                    errors={auth.formErrors}
                    name="password2"
                    placeholder="Repeat Password"
                    type="password"
                  />
                  <Button
                    isLoading={auth.isPostingSignup}
                    isInput={true}
                    onClick={(e) => this.handleSubmit(e)}
                  >
                    Sign Up
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
