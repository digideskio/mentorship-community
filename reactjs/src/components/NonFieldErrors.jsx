import React from "react"


export default class NonFieldErrors extends React.Component {
  render() {
    let { errors } = this.props
    let errorList
    if (errors && errors['non_field_errors']) {
      errorList = errors['non_field_errors']
    }
    if (errorList === undefined) { return null }

    return (
      <ul>
        {errorList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }
}
