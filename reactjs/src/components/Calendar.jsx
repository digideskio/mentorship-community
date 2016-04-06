import React from "react"
import Radium from "radium"

import CalendarAvailable from "./CalendarAvailable"
import CalendarInputCheckbox from "./CalendarInputCheckbox"
import CalendarName from "./CalendarName"
import CalendarUnavailable from "./CalendarUnavailable"


const styles = {
  cell: {
    padding: "5px"
  }
}


@Radium
export default class Calendar extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th style={[styles.cell]}>Mentor</th>
            <th style={[styles.cell]}>APR 4</th>
            <th style={[styles.cell]}>APR 6</th>
            <th style={[styles.cell]}>APR 7</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={[styles.cell]}><CalendarName name="Name 1" /></td>
            <td style={[styles.cell]}><CalendarAvailable /></td>
            <td style={[styles.cell]}><CalendarUnavailable /></td>
            <td style={[styles.cell]}><CalendarAvailable /></td>
          </tr>
          <tr>
            <td style={[styles.cell]}><CalendarName name="Name 2" /></td>
            <td style={[styles.cell]}><CalendarUnavailable /></td>
            <td style={[styles.cell]}><CalendarUnavailable /></td>
            <td style={[styles.cell]}><CalendarAvailable /></td>
          </tr>
          <tr>
            <td style={[styles.cell]}><CalendarName name="Your Name" /></td>
            <td style={[styles.cell]}><CalendarInputCheckbox /></td>
            <td style={[styles.cell]}><CalendarInputCheckbox /></td>
            <td style={[styles.cell]}><CalendarInputCheckbox /></td>
          </tr>
        </tbody>
      </table>
    )
  }
}
