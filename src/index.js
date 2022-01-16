import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/main.css'

// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './data/store'

// Components
import Navbar from './components/navbar/navbar.component'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={App} />
      </Routes>
    </Router>
    <App />
  </Provider>,
  document.getElementById('root')
)
