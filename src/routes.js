import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas
