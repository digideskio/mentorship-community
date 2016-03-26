import React from "react"
import Radium from "radium"

import InputCheckbox from "./InputCheckbox"


@Radium
export default class Calendar extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <td>Name 1</td>
          <td>APR 4</td>
          <td>APR 6</td>
        </tr>
        <tr>
          <td>Name 2</td>
          <td>APR 4</td>
          <td>APR 6</td>
        </tr>
        <tr>
          <td>Your Name</td>
          <td><InputCheckbox /></td>
          <td><InputCheckbox /></td>
        </tr>
      </table>
    )
  }
}
