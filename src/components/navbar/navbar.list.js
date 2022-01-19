import React from 'react'
import NavItem from './navbar.item'

const NavbarList = () => {
  return (
    <ul className="font-bold flex-wrap flex md:mr-5 flex-col md:flex-row text-center">
      <NavItem link="/" name="Home" />
    </ul>
  )
}

export default NavbarList
