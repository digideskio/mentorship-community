import React from "react"


export default class SkillListView extends React.Component {
  render() {
    return (
      <div>
        Skill List View
        {this.props.children}
      </div>
    )
  }
}
