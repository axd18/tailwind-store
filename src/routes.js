import React from 'react'
import Navbar from './components/navbar/navbar.component'
import Home from './pages/Home'

// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Switch } from '@headlessui/react'

const mainRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/#" component={Home} />
      </Routes>
    </BrowserRouter>
  )
}

export default mainRoutes
