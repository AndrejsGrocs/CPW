import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='nav shadow rounded'>
            <div className="logo-brand vibrate-1">
              h
         </div>
         <ul className='nav-list  '>
             <li className="vibrate-1"> <NavLink to='/' exact activeClassName='active p-5'>Home</NavLink></li>
             <li className="vibrate-1"> <NavLink to='/aboutus' exact activeClassName='active p-5'>About Us</NavLink></li>
             {/* <li> <NavLink to='/cats/' exact activeClassName='active'>Cats</NavLink></li>
             <li> <NavLink to='/dogs' exact activeClassName='active'>Dogs</NavLink></li> */}
         </ul>


        </nav>
    )
}
