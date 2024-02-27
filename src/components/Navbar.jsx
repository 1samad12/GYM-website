import React, { useState } from 'react'
import logo from '../images/logo.png'
import {Link, link} from"react-scroll"


function NAVBAR() {
    const[nav,setNav]=useState(false)
    const changeBackground=()=>{
        if(window.scrollY>=50){            
            setNav(true)
        }
        else{
            setNav(false)
        }
    }
    window.addEventListener('scroll',changeBackground)
  return (
    <nav  className={nav ? "nav active" : "nav"}>
        <Link to="main"  className='logo'  smooth={true} duration={500}>
            <img src={logo} alt=""/>
            </Link>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label for='menu-btn' className='menu-icon'>  
                <span className='nav-icon'></span>
              </label>
              <ul  className='menu'>
                <li><Link to="main"    smooth={true} duration={500} > Home</Link></li>
                <li><Link to="features"  smooth={true} duration={500}> features</Link></li>
                <li><Link to="presentaion"  smooth={true} duration={500}> offers</Link></li>
                <li><Link to="about"  smooth={true} duration={500}> About</Link></li>
                <li><Link to=""  smooth={true} duration={500}> contact</Link></li>
              </ul>

    </nav>

 
  )
}

export default NAVBAR