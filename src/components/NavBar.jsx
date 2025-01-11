import React from 'react'
import '../index.css'
import { Link } from 'react-scroll';
import useMediaQuery from "./useMediaQuery";
import CustomIcon from '../widgets/customIcon';
import {FiHome,FiUser,FiAward,FiBox,FiFileText} from 'react-icons/fi';



const NavBar = () => {

  const isMobile = useMediaQuery('(min-width: 800px)');

  return (
    <div>
      {isMobile ? 
        <nav className='nav-bar'>
          <Link activeClass="active" to="home" spy={true} smooth={true}> <CustomIcon Icon={FiHome} title={" Home"}/>  </Link>
          <Link activeClass="active" to="about" spy={true} smooth={true}><CustomIcon Icon={FiUser} title={" Aboutme"}/> </Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true}><CustomIcon Icon={FiAward} title={" Skills"}/> </Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true}><CustomIcon Icon={FiBox} title={" Projects"}/> </Link>
        </nav> : 
        <nav className='nav-bar'>
          <Link activeClass="active" to="home" spy={true} smooth={true}><CustomIcon Icon={FiHome}/></Link>
          <Link activeClass="active" to="about" spy={true} smooth={true}><CustomIcon Icon={FiUser}/></Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true}><CustomIcon Icon={FiAward}/></Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true}><CustomIcon Icon={FiBox}/></Link>
        </nav>}

    </div>

  )
}

export default NavBar
