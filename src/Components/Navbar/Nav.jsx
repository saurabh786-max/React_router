import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className='flex justify-between text-center h-[50px] w-full items-center'>
        <div className='logo items-center'>
          <img src="src\Images\logo-venmo-svgrepo-com.svg" alt="logo" className='h-15 w-20 mb-10' />
        </div>
        <ul className='flex items-center font-bold'>
          <li>

            <NavLink
              to="/"
              className="px-5"


            > Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="px-5"
            >Contact
            </NavLink>
          </li>
          <li>
            
            <NavLink
             to="/about"
             className="px-5"
             >About
            </NavLink>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav