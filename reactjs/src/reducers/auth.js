import * as authActions from "../actions/authActions"
import * as requestActions from "../actions/requestActions"


const initialState = {
  formErrors: null,
  isPostingLogin: false,
  isPostingSignup: false,
  key: undefined,
}


export default function reducer(state=initialState, action={}) {
  switch (action.type) {
  case authActions.POST_LOGIN:
    return {...state, isPostingLogin: true}
  case authActions.POST_SIGNUP:
    return {...state, isPostingSignup: true}
  case authActions.POST_SIGNUP_SUCCESS:
    window.localStorage.token = action.res.key
    return {...state,
      isPostingSignup: false, formErrors: null, key: action.res.key}
  case authActions.POST_LOGIN_SUCCESS:
    window.localStorage.token = action.res.key
    return {...state,
      isPostingLogin: false, formErrors: null, key: action.res.key}
  case authActions.REMOVE_LOCAL_TOKEN:
    return {...state, key: undefined}
  case authActions.SET_LOCAL_TOKEN:
    return {...state, key: action.token}
  case requestActions.ERROR_400:
    return {...state,
      isPostingSignup: false, isPostingLogin: false, formErrors: action.res}
  case requestActions.ERROR_RESPONSE:
  case requestActions.ERROR_NETWORK:
    return {...state, isPostingSignup: false, isPostingLogin: false}
  default:
    return state
  }
}
