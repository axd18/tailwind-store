import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./assets/main.css"

// redux
import { Provider } from "react-redux"
import store from "./data/store"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" component={App} />
      </Routes>
    </Router>
    <App />
  </Provider>,
  document.getElementById("root")
)
