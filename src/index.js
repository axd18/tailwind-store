import React from "react"
import ReactDOM from "react-dom"
import "./assets/main.css"
import App from "./App"

// redux
import { Provider } from "react-redux"
import store from "./data/store"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import About from "./components/About"
import Contact from "./components/Contact"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)
