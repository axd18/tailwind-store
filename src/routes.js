import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import ToggleMenuBar from './components/togglemenubar/ToggleMenuBar'

const Rutas = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    
    <BrowserRouter>
      <Header toggleOpen={toggleOpen}/>
      {isOpen && <ToggleMenuBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas
