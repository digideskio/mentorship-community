import React from "react"


export default class CareerListView extends React.Component {
  render() {
    return (
      <div>
        Career List View
        {this.props.children}
      </div>
    )
  }
}
