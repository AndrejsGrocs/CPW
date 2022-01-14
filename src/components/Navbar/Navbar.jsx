import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="maincontainernavbar" >
            <nav className=" navbar-default navbar-fixed-top">
  <div className="container-fluid">
    <a className="logo-tex navbar-brand   col-lg text-uppercase font-weight-bold" href="#">H</a>
    
  
      <div className="  navbar-nav  nav-list">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li> <NavLink className="btn-nav" to='/' exact >Landing</NavLink> </li>
        <li> <NavLink className="btn-nav" to='/aboutus' exact >About Us</NavLink>
        </li>
        </ul>
        </div>
    
  </div>
</nav>
        </div>
    );
}

 
 