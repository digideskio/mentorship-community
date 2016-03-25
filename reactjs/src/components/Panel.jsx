import React from "react"
import { Link } from "react-router"


export default class Panel extends React.Component {
  static propTypes = {
    heading: React.PropTypes.string,
    headingRight: React.PropTypes.object,
    linkTo: React.PropTypes.string,
    type: React.PropTypes.string,
  }

  render() {
    let { heading, headingRight, linkTo, type } = this.props
    if (!type) { type = "default" }
    let headingNode = (
      <h1 className="panel-title">{heading}</h1>
    )
    let titleNode = headingNode
    if (headingRight) {
      titleNode = (
        <div className="row">
          <div className="col-sm-6">
            {headingNode}
          </div>
          <div className="col-sm-6 text-right">
            {headingRight}
          </div>
        </div>
      )
    }
    return (
      <div className={`panel panel-${type}`}>
        {heading &&
          <div className="panel-heading">
            {linkTo &&
              <Link to={linkTo}>
                {titleNode}
              </Link>
            }
            {!linkTo &&
              <div>{titleNode}</div>
            }
          </div>
        }
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
