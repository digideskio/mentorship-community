import fetch from "isomorphic-fetch"
import cookie from "react-cookie"

import * as requestActions from "./requestActions"


const BASE_API_URL = process.env.BASE_API_URL


export function request(url, options, success, error400, error, failure) {
  // Wrapper around fetch API
  //
  // Takes fetch options and callbacks for success, error400, all other errors
  // and complete request failure.
  //
  let headers = new Headers();
  headers.append("X-CSRFToken", cookie.load("csrftoken"))
  headers.append("Accept", "application/json")
  options["headers"] = headers
  options["credentials"] = "include"
  let absoluteUrl = `${BASE_API_URL}${url}`
  return fetch(absoluteUrl, options)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        // for anything in 200-299 we expect DRF to return a JSON response
        res.json().then(json => {
          return success(json)
        })
      } else if (res.status === 400) {
        // 400 means the form has errors, Django returns a JSON response
        res.json().then(json => { return error400(json) })
      } else {
        // For all other errors we are not sure if the response is JSON,
        // so we just want to display a generic error modal
        return error(res)
      }
    }).catch((ex) => { return failure(ex) })
}
