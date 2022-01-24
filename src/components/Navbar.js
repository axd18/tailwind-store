import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm">
      <Link to="/" className="pl-8">
        Logo
      </Link>
    </nav>
  )
}

export default Navbar
