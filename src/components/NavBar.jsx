import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contacts'>Contacts</NavLink></li>
        <li><NavLink to='/info'>Info</NavLink></li>
        <li><NavLink to='/courses'>Courses</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar