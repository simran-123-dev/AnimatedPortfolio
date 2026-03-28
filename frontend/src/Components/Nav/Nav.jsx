import React, { useRef } from 'react'
import "./nav.css"
import {Link} from "react-scroll";
const Nav = () => {
    let menu=useRef()
    let mobile=useRef()
  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul className='desktopmenu'>
        <Link to="home" smooth={true} duration={500} activeClass="active" spy={true}><li>HOME</li></Link>
        <Link to="about" smooth={true} duration={500} activeClass='active' spy={true}><li>ABOUT</li></Link>
        <Link to="projects" smooth={true} duration={500} activeClass='active' spy={true}><li>PROJECTS</li></Link>
        <Link to="contact" smooth={true} duration={500} activeClass='active' spy={true}><li>CONTACT</li></Link>
      </ul>

      <div className="hamburger" ref={menu} onClick={()=>{
        mobile.current.classList.toggle("activemobile")
        menu.current.classList.toggle("activeham")
      }} >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      <ul className='mobilemenu' ref={mobile}>
        <Link to="home" smooth={true} duration={500} activeClass="active" spy={true}><li>HOME</li></Link>
        <Link to="about" smooth={true} duration={500} activeClass='active' spy={true}><li>ABOUT</li></Link>
        <Link to="projects" smooth={true} duration={500} activeClass='active' spy={true}><li>PROJECTS</li></Link>
        <Link to="contact" smooth={true} duration={500} activeClass='active' spy={true}><li>CONTACT</li></Link>
      </ul>
    </nav>
  )
}

export default Nav
