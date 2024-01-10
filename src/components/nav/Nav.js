import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.scss';

const Nav = () => {
  return (
    <>
       <nav className='NavLinkClass'>
          <div>
            <div className='logo'>AGENCY</div>
          </div>
          <div>
          <Link to="/whyus"> WHY US</Link>
          <NavLink to="/whyus"> WHY US</NavLink>
          <NavLink> ABOUT</NavLink>
          <NavLink> SERVICES</NavLink>
          <NavLink> PORTFOLIO</NavLink>
          <NavLink> PROCESS</NavLink>
          <NavLink> REVIEWS</NavLink>
          <NavLink> OURSKILLS</NavLink>
          <NavLink> CONTACT US</NavLink>
          </div>
       </nav> 
    </>
  )
}

export default Nav