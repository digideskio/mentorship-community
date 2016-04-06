import * as authActions from "../actions/authActions"
import * as requestActions from "../actions/requestActions"


const initialState = {
  formErrors: null,
  isPostingSignup: false,
  key: null,
}


export default function reducer(state=initialState, action={}) {
  switch (action.type) {
  case authActions.POST_SIGNUP:
    return {...state, isPostingSignup: true, formErrors: null}
  case authActions.POST_SIGNUP_SUCCESS:
    return {...state, isPostingSignup: false, key: action.res}
  case requestActions.ERROR_400:
    return {...state, isPostingSignup: false, formErrors: action.res}
  case requestActions.ERROR_RESPONSE:
  case requestActions.ERROR_NETWORK:
    return {...state, isPostingSignup: false}
  default:
    return state
  }
}
