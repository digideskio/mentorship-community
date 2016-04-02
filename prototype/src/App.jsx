import React from "react"
import { render } from "react-dom"
import { browserHistory, IndexRoute, Router, Route } from "react-router"

import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { createHistory } from 'history'

import * as reducers from "./reducers"
import AppContainer from "./containers/AppContainer"
import IndexView from "./containers/IndexView"
import LoginView from "./containers/LoginView"
import MentorProfileView from "./containers/MentorProfileView"
import ModuleDetailView from "./containers/ModuleDetailView"
import NoMatchView from "./containers/NoMatchView"
import ProfileView from "./containers/ProfileView"
import SignupView from "./containers/SignupView"
import SkillDetailView from "./containers/SkillDetailView"
import SkillListView from "./containers/SkillListView"
import SkillSignupView from "./containers/SkillSignupView"

let finalCreateStore
if (process.env.NODE_ENV === 'production') {
  finalCreateStore = compose(applyMiddleware(thunk))(createStore)
} else {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)
}

let reducer = combineReducers(reducers)
let store = finalCreateStore(reducer)


render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={IndexView} />
        <Route path="skills" component={SkillListView} />
        <Route path="skills/:slug" component={SkillDetailView} />
        <Route path="skills/:slug/signup" component={SkillSignupView} />
        <Route path="modules/:slug" component={ModuleDetailView} />
        <Route path="mentor-profile" component={MentorProfileView} />
        <Route path="profile" component={ProfileView} />
        <Route path="login" component={LoginView} />
        <Route path="signup" component={SignupView} />
        <Route path="*" component={NoMatchView} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('App'))
