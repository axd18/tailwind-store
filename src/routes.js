import { useState, useEffect } from 'react'
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

  useEffect(() => {
    const ocultarMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", ocultarMenu)
    return () => {
      window.removeEventListener("resize", ocultarMenu)
    };
  });
  
  
  return (
    
    <BrowserRouter>
      <Header toggleOpen={toggleOpen}/>
      {isOpen && <ToggleMenuBar toggleOpenClose={toggleOpen}/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas
