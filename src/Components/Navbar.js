import React, { useEffect, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { BiSun } from 'react-icons/bi'
import { BsFillMoonFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
function Navbar({switchTheme,theme}) {


const [toggle,setToggle] = useState(false)
const toggleHandler = () => {
    setToggle(!toggle)
}

const [scroll, setScroll] = useState(false);
useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);
  return (
    <main>
    
    <nav className={scroll ? "fixedNav" : ""}>
        <div className="nav-content">
            <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
            <NavLink to="/" className="logo">Logo</NavLink>
            <span className='theme' onClick={switchTheme}>
                {theme === 'light' ? (<BiSun/>) : (<BsFillMoonFill/>) }
            </span>
            </div>
            
            <ul id="NavLinks">
                <li>
                    <NavLink to="/" className="NavLink">Home</NavLink>
                </li>
                <li>
                    <a href="/#about" className="NavLink">About</a>
                </li>
                <li>
                    <NavLink to="/projects" className="NavLink">Work</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="NavLink">Contact</NavLink>
                </li>
            </ul>
           
            <span className="toggle" onClick={toggleHandler} id="openBtn">
                <BiMenu/>
            </span>
        </div>

    </nav>
    <section className={toggle ? "nav-open navToggle" : "nav-open"} id="mobNav">
        <div className="nav-open-content">
            <div className="nav-open-head">
                <NavLink onClick={toggleHandler} to="#" className="logo navNavLink">Logo</NavLink>
                <span onClick={toggleHandler} className="close-btn navNavLink">
                    <IoMdClose/>
                </span>
            </div>
            <ul>
                <li>
                    <NavLink onClick={toggleHandler} to="/" className="navNavLink">Home</NavLink>
                </li>
                <li>
                    <a onClick={toggleHandler} href="/#about" className="navNavLink">About</a>
                </li>
                <li>
                    <NavLink onClick={toggleHandler} to="/projects" className="navNavLink ">Work</NavLink>
                </li>
                <li>
                    <NavLink onClick={toggleHandler} to="/contact" className="navNavLink ">Contact</NavLink>
                </li>
            </ul>
        </div>
    </section>
    </main>
   
  )
}

export default Navbar