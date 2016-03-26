import React from "react"
import Radium from "radium"

import InputCheckbox from "./InputCheckbox"


const styles = {
  table: {
    cellSpacing: "10px",
    cellPadding: "10px",
  },
  name: {
    backgroundColor: "#DFDFDF",
    padding: "5px",
  }
}


@Radium
export default class Calendar extends React.Component {
  render() {
    return (
      <table style={[styles.table]}>
        <tbody>
          <tr>
            <td style={[styles.name]}>Name 1</td>
            <td>APR 4</td>
            <td>APR 6</td>
          </tr>
          <tr>
            <td style={[styles.name]}>Name 2</td>
            <td>APR 4</td>
            <td>APR 6</td>
          </tr>
          <tr>
            <td style={[styles.name]}>Your Name</td>
            <td><InputCheckbox /></td>
            <td><InputCheckbox /></td>
          </tr>
        </tbody>
      </table>
    )
  }
}
