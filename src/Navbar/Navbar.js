import React from 'react'
import '../Navbar/navbar.css'
import navlogo from '../Navbar/navlogo.svg'
const Navbar = () => {
  return (
    <div className='nav'>
        <img src={navlogo} alt="" />
        <a href="/">Sign In</a>
    </div>
  )
}

export default Navbar