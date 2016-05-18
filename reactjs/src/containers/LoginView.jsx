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
export default class LoginView extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(this.form)
    this.props.dispatch(authActions.postLogin(formData))
  }

  render() {
    let { auth } = this.props
    return (
      <div className="row" style={{marginTop: theme.MARGIN_TOP_CONTAINER}}>
        <div className="col-sm-offset-3 col-sm-6">
          <Panel heading="Login">
            <div className="row">
              <div className="col-sm-offset-3 col-sm-6">
                <form
                  className="form"
                  encType="multipart/form-data"
                  ref={(ref) => this.form = ref}
                  onSubmit={(e) => this.handleSubmit(e)}
                >
                  <NonFieldErrors errors={auth.formErrors} />
                  <InputText
                    errors={auth.formErrors}
                    name="username"
                    placeholder="Email"
                  />
                  <InputText
                    errors={auth.formErrors}
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <Button
                    isLoading={auth.isPostingLogin}
                    onClick={(e) => this.handleSubmit(e)}
                  >
                    Login
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
