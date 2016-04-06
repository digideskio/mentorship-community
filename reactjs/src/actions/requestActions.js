export const RESPONSE_200 = "RESPONSE_200"
export function response200(res, formName) {
  return function(dispatch) {
    dispatch({ type: RESPONSE_200, res: res, formName: formName })
  }
}

export const ERROR_400 = "ERROR_400"
export function error400(json, formName) {
  return function (dispatch) {
    dispatch({ type: ERROR_400, res: json, formName: formName})
  }
}

export const ERROR_RESPONSE = "ERROR_RESPONSE"
export function errorResponse(res, formName) {
  return function (dispatch) {
    dispatch({ type: ERROR_RESPONSE, res: res})
  }
}

export const ERROR_NETWORK = "ERROR_NETWORK"
export function errorNetwork(ex) {
  return function (dispatch) {
    dispatch({type: ERROR_NETWORK, message: ex.message})
  }
}
