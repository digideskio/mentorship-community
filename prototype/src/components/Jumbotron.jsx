import React from "react"


export default class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center">
        {this.props.children}
      </div>
    )
  }
}
