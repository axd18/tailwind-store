import React from "react"
import ReactDOM from "react-dom"
import "./assets/main.css"
import App from "./App"

// redux
import { Provider } from "react-redux"
import store from "./data/store"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
