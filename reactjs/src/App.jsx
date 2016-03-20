import React from "react"
import { render } from "react-dom"
import { browserHistory, IndexRoute, Router, Route } from "react-router"

import AppContainer from "./containers/AppContainer"
import IndexView from "./containers/IndexView"
import LoginView from "./containers/LoginView"
import NoMatchView from "./containers/NoMatchView"

render((
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={IndexView} />
      <Route path="login" component={LoginView} />
      <Route path="*" component={NoMatchView} />
    </Route>
  </Router>
), document.getElementById('App'))
