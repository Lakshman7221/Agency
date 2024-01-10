import React from 'react'
import { NavLink } from 'react-router-dom'

const Navv = () => {
  return (
    <div className='mainNav'>
     <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor:"#37517e", opacity:"95%"}}>
  <div className="container-fluid">
    <h1 style={{fontSize:"30px",color:"#fff"}} className='ps-5' href="#">
    <NavLink to="/"className="nav-link" href="#">AGENCY</NavLink>
    </h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ps-5" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink to="/whyus"className="nav-link" href="#">WHY US</NavLink>
        </li>
        <li className="nav-item">
           <NavLink to="/about"className="nav-link" href="#">ABOUT</NavLink>
        </li>
        <li className="nav-item">
           <NavLink to="/services"className="nav-link" href="#">SERVICES</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/portifolio"className="nav-link" href="#">PORTIFOLIO</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/process"className="nav-link" href="#">PROCESS</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/reviews"className="nav-link" href="#">REVIEWS</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/our-skills"className="nav-link" href="#">OUR SKILLS</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/contacts"className="nav-link" href="#">CONTACTS</NavLink>
        </li>
      </ul>
      <form className="d-flex pe-5 pb-3">
       
        <button className="btn btn-outline-warning btn-sm" type="button">Login</button>&nbsp;&nbsp;
        <button className="btn btn-outline-warning btn-sm" type="button">Register</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navv