import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import '../index.css'
import { Link } from 'react-scroll';




const NavBar = () => {



  return (
    <nav className='nav-bar'>
      <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
      <Link activeClass="active" to="about" spy={true} smooth={true}>Aboutme</Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true}>Skills</Link>
      <Link activeClass="active" to="projects" spy={true} smooth={true}>Projects</Link>
      <a href="https://drive.google.com/file/d/1THvQ7xDDcuoLGN1jXq10LC5z1LLPu4Gx/view?usp=sharing" target="_blank">Resume</a>
      {/* <Link activeClass="active" to="Resume" spy={true} smooth={true}>Resume</Link> */}
     {/* resume */}
    </nav>
  )
}

export default NavBar
