import React, { useState } from 'react'
import Container from '../container/container.component'
import { Link } from 'react-router-dom'
import NavbarToggle from './navbar.toggle.component'

const Navbar = () => {
  // Toggle State
  const [active, setActive] = useState(false)
  // Toggle Controller
  const menuState = () => {
    setActive(!active)
  }
  return (
    <Container>
      <nav className="navbar">
        {/* Left Side */}
        <div className="flex justify-between w-full md:w-32 items-center">
          <Link to="/" className="logo w-16 animate">
            <div>Logo</div>
          </Link>
          <NavbarToggle active={active} menuState={menuState} />
        </div>

        {/* Right Side */}
        <div className={`${active ? 'flex' : 'hidden'} md:flex`}></div>
      </nav>
    </Container>
  )
}

export default Navbar