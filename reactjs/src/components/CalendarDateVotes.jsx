import React from "react"
import Radium from "radium"

import CalendarInputCheckbox from "./CalendarInputCheckbox"


const styles = {
  cell: {
    padding: "5px"
  },
  some: {
    backgroundColor: "#dce9fa",
    textAlign: "center",
    padding: "5px"
  },
  none: {
    backgroundColor: "#f7e9e8",
    textAlign: "center",
    padding: "5px"
  },
  most: {
    backgroundColor: "#e3f1e2",
    textAlign: "center",
    padding: "5px"
  }
}


@Radium
export default class CalendarDateVotes extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th style={[styles.cell]}>APR 4</th>
            <th style={[styles.cell]}>APR 6</th>
            <th style={[styles.cell]}>APR 7</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={[styles.cell]}><div style={[styles.some]}>2</div></td>
            <td style={[styles.cell]}><div style={[styles.none]}>0</div></td>
            <td style={[styles.cell]}><div style={[styles.most]}>5</div></td>
          </tr>
          <tr>
            <td style={[styles.cell]}><CalendarInputCheckbox /></td>
            <td style={[styles.cell]}><CalendarInputCheckbox /></td>
            <td style={[styles.cell]}><CalendarInputCheckbox /></td>
          </tr>
        </tbody>
      </table>
    )
  }
}
