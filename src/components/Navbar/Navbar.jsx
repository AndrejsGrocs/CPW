import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
<<<<<<< HEAD
        <div className="maincontainernavbar" >
            <nav className="navbar navbar-expand-lg py-3 navbar-dark shadow-">
  <div className="container-fluid">
    <a className="navbar-brand   col-lg text-uppercase font-weight-bold" href="#">CWP</a>
    
  
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
=======
        <nav className='nav'>
            <div>
              CPW Food Health App
         </div>
         <ul className='nav-list'>
             <li> <NavLink to='/' exact activeClassName='active'>Landing</NavLink></li>
             <li> <NavLink to='/aboutus' exact activeClassName='active'>About Us</NavLink></li>
             {/* <li> <NavLink to='/cats/' exact activeClassName='active'>Cats</NavLink></li>
             <li> <NavLink to='/dogs' exact activeClassName='active'>Dogs</NavLink></li> */}
         </ul>


        </nav>
>>>>>>> 42c7ba7d716278b87ecb443aa55c482d8fd8a495
    )
}

 
 