import React from 'react'
import '../index.css'
import { Link } from 'react-scroll';
import useMediaQuery from "./useMediaQuery";

import {FiHome,FiUser,FiAward,FiBox,FiFileText} from 'react-icons/fi';



const NavBar = () => {

  const isMobile = useMediaQuery('(min-width: 800px)');

  return (
    <div>
      {isMobile ? 
        <nav className='nav-bar'>
          <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
          <Link activeClass="active" to="about" spy={true} smooth={true}>Aboutme</Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true}>Skills</Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true}>Projects</Link>
          <a href="https://drive.google.com/file/d/1THvQ7xDDcuoLGN1jXq10LC5z1LLPu4Gx/view?usp=sharing" target="_blank">Resume</a>
        </nav> : 
        <nav className='nav-bar'>
          <Link activeClass="active" to="home" spy={true} smooth={true}><FiHome/></Link>
          <Link activeClass="active" to="about" spy={true} smooth={true}><FiUser/></Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true}><FiAward/></Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true}><FiBox/></Link>
          <a href="https://drive.google.com/file/d/1THvQ7xDDcuoLGN1jXq10LC5z1LLPu4Gx/view?usp=sharing" target="_blank"><FiFileText/></a>
        </nav>}

    </div>

  )
}

export default NavBar
