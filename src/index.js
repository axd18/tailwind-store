import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/main.css'

// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Switch } from '@headlessui/react'

// Redux
import { Provider } from 'react-redux'
import store from './data/store'

// Components
import Navbar from './components/navbar/navbar.component'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Routes>
          <Route exact path="/#" component={App} />
        </Routes>
      </Switch>
    </Router>
    <App />
  </Provider>,
  document.getElementById('root')
)
