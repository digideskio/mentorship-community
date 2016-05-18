import { request } from "./utils"
import * as requestActions from "./requestActions"


export const PERFORM_LOGOUT = "PERFORM_LOGOUT"
export function performLogout() {
  return {type: PERFORM_LOGOUT}
}


export const POST_LOGIN = "POST_LOGIN"
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS"
export function postLogin(formData, successCallback) {
  return function(dispatch) {
    dispatch({type: POST_LOGIN})
    request(
      "rest-auth/login/",
      {method: "post", body: formData},
      (json) => {
        dispatch({type: POST_LOGIN_SUCCESS, res: json})
        successCallback()
      },
      (json) => { dispatch(requestActions.error400(json)) },
      (res) => { dispatch(requestActions.errorResponse(res)) },
      (ex) => { dispatch(requestActions.errorNetwork(ex)) },
    )
  }
}


export const POST_SIGNUP = "POST_SIGNUP"
export const POST_SIGNUP_SUCCESS = "POST_SIGNUP_SUCCESS"
export function postSignup(formData, successCallback) {
  return function(dispatch) {
    dispatch({type: POST_SIGNUP})
    request(
      "rest-auth/registration/",
      {method: "post", body: formData},
      (json) => {
        dispatch({type: POST_SIGNUP_SUCCESS, res: json})
        successCallback()
      },
      (json) => { dispatch(requestActions.error400(json)) },
      (res) => { dispatch(requestActions.errorResponse(res)) },
      (ex) => { dispatch(requestActions.errorNetwork(ex)) },
    )
  }
}


export const SET_LOCAL_TOKEN = "SET_LOCAL_TOKEN"
export const REMOVE_LOCAL_TOKEN = "REMOVE_LOCAL_TOKEN"
export function setLocalToken() {
  return function(dispatch) {
    if (localStorage.token) {
      dispatch({type: SET_LOCAL_TOKEN, token: localStorage.token})
    } else {
      dispatch({type: REMOVE_LOCAL_TOKEN})
    }
  }
}
