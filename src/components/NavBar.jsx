import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import '../index.css'



const NavBar = () => {

  return (
   <nav className='nav-bar'>
    <a href='/'>
      Home
    </a>
    <a href="/aboutme">
      About
    </a>
    <a href="/skills">
      Skills
    </a>
    <a href="/projects">
      Projects
    </a>
    <a href="/contact">
      Contact
    </a>
    <a href="/resume">
      Resume
    </a>
   </nav>
  )
}

export default NavBar
