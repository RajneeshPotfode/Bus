import React from 'react'
import { NavLink,Link } from 'react-router-dom' 
export const Nav = () => {
  return (
    <div className=''>

    <NavLink to="/home">
      Home
    </NavLink>
    <NavLink to="/Buses">
      Buses
    </NavLink>
    <NavLink to="/notification">
      notification
    </NavLink>
    <NavLink to="/complain">
      complain
    </NavLink>
    <NavLink to="/logout">
      logout
    </NavLink>
    </div>
  )
}
