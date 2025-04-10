import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <ul>
            <li>
                <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Footer