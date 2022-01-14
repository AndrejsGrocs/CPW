import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className="logo-brand">
              h
         </div>
         <ul className='nav-list'>
             <li> <NavLink to='/' exact activeClassName='active p-5'>Landing</NavLink></li>
             <li> <NavLink to='/aboutus' exact activeClassName='active'>About Us</NavLink></li>
             {/* <li> <NavLink to='/cats/' exact activeClassName='active'>Cats</NavLink></li>
             <li> <NavLink to='/dogs' exact activeClassName='active'>Dogs</NavLink></li> */}
         </ul>


        </nav>
    )
}
