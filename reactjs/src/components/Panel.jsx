import React from "react"
import { Link } from "react-router"


export default class Panel extends React.Component {
  static propTypes = {
    heading: React.PropTypes.string,
    linkTo: React.PropTypes.string,
    type: React.PropTypes.string,
  }

  render() {
    let { heading, linkTo, type } = this.props
    if (!type) { type = "default" }
    let titleNode = (
      <h1 className="panel-title">{heading}</h1>
    )
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
