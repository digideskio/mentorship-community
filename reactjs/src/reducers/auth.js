import * as authActions from "../actions/authActions"
import * as requestActions from "../actions/requestActions"


const initialState = {
  formErrors: null,
  isPostingLogin: false,
  isPostingSignup: false,
  key: null,
}


export default function reducer(state=initialState, action={}) {
  switch (action.type) {
  case authActions.POST_LOGIN:
    return {...state, isPostingLogin: true}
  case authActions.POST_SIGNUP:
    return {...state, isPostingSignup: true}
  case authActions.POST_SIGNUP_SUCCESS:
    return {...state,
      isPostingSignup: false, formErrors: null, key: action.res}
  case authActions.POST_LOGIN_SUCCESS:
    return {...state,
      isPostingLogin: false, formErrors: null, key: action.res}
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
