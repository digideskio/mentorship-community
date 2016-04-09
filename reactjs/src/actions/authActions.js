import { request } from "./utils"
import * as requestActions from "./requestActions"


export const POST_LOGIN = "POST_LOGIN"
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS"
export function postLogin(formData) {
  return function(dispatch) {
    dispatch({type: POST_LOGIN})
    request(
      "rest-auth/login/",
      {method: "post", body: formData},
      (json) => { dispatch({type: POST_LOGIN_SUCCESS, res: json}) },
      (json) => { dispatch(requestActions.error400(json)) },
      (res) => { dispatch(requestActions.errorResponse(res)) },
      (ex) => { dispatch(requestActions.errorNetwork(ex)) },
    )
  }
}


export const POST_SIGNUP = "POST_SIGNUP"
export const POST_SIGNUP_SUCCESS = "POST_SIGNUP_SUCCESS"
export function postSignup(formData) {
  return function(dispatch) {
    dispatch({type: POST_SIGNUP})
    request(
      "rest-auth/registration/",
      {method: "post", body: formData},
      (json) => { dispatch({type: POST_SIGNUP_SUCCESS, res: json}) },
      (json) => { dispatch(requestActions.error400(json)) },
      (res) => { dispatch(requestActions.errorResponse(res)) },
      (ex) => { dispatch(requestActions.errorNetwork(ex)) },
    )
  }
}
