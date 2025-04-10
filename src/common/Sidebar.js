import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/my-team">Team Member</NavLink>
            </li>
            <li>
                <NavLink to="/my-subscription">My Subscription</NavLink>
            </li>
            <li>
                <NavLink to="/chat">Chat</NavLink>
            </li>
            <li>
                <NavLink to="/leason-plan">Leason</NavLink>
            </li>
        </ul>

    </div>
  )
}

export default Sidebar