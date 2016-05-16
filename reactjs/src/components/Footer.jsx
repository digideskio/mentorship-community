import React from "react"


export default class Footer extends React.Component {
  render() {
    return (
      <div className="container" style={[{marginTop: "3em"}]}>
        <div className="row">
            <div className="col-sm-12">
              <hr />
              <p>Designed and built with love by <a href="https://twitter.com/mbrochh">@mbrochh</a> for <a href="http://pyladies.sg">PyLadies SG</a>.</p>
              <p>Find the code on <a href="https://github.com/mbrochh/mentorship-community">GitHub</a>.</p>
            </div>
        </div>
      </div>
    )
  }
}
