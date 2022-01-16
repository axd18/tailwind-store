import React from 'react'
import Container from '../container/container.component'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
      <nav className="navbar">
        {/* Left Side */}
        <div className="flex justify-between w-full md:w-32 items-center">
          <Link to="/" className="logo w-16 animate">
            <div>Logo</div>
          </Link>
        </div>
      </nav>
    </Container>
  )
}

export default Navbar
