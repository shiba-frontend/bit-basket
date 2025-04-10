import React from 'react'
import { IMAGE } from '../utils/theme'
import Dropdown from 'react-bootstrap/Dropdown';

const TopBar = () => {
  return (
    <div className='top-header'>
        <div className='container-fluid'>

            <div className='dash-logo'>
                <img src={IMAGE.logo} />
           
            <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <i class="fa-solid fa-user"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/#/update-profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="/#/change-password">Change Password</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
        </div>
    </div>
  )
}

export default TopBar