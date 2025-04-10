import React from 'react'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'
import { NavLink } from 'react-router-dom'

const LeasonPlan = () => {
  return (
    <div className='dashboard-panel'>
    <TopBar/>
    <div className='container-fluid'>
        <Sidebar/>
        <div className='right-comon'>

           <div className='d-flex  mb-3 justify-content-between align-items-center'>
                       <h3 className='page-title'>Leason Plan</h3>
                      <NavLink to="/create-leason" className='btn btn-primary'>Create Leason</NavLink>
                      </div>
<div className='text-center my-5'>
<h3>You have not been yet created any lesson plan yet. <br/> Create your first lesson plan now.
</h3>
<NavLink to="/create-leason" className='btn btn-primary'>Create Leason</NavLink>
</div>


            <table className='table custom-table'>
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Subject</th>
                        <th>Participants</th>
                        <th>Submission</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <NavLink to="/leason">Lorem Ipsum Dolor Sit …. </NavLink>
                        </td>
                        <td>PHP</td>
                        <td>
                             <NavLink to="/participant-list">10</NavLink>
                        </td>
                        <td>0</td>
                        <td>
                            <button className='btn btn-sm btn-outline-primary'>Archive</button>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <NavLink to="/leason">Lorem Ipsum Dolor Sit …. </NavLink>
                        </td>
                        <td>PHP</td>
                        <td>  <NavLink to="/participant-list">10</NavLink></td>
                        <td>0</td>
                        <td>
                            <button className='btn btn-sm btn-outline-primary'>Archive</button>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <NavLink to="/leason">Lorem Ipsum Dolor Sit …. </NavLink>
                        </td>
                        <td>PHP</td>
                        <td>  <NavLink to="/participant-list">10</NavLink></td>
                        <td>0</td>
                        <td>
                            <button className='btn btn-sm btn-outline-primary'>Archive</button>
                        </td>
                    </tr>
                    </tbody>
                   
                </table>
        </div>
    </div>
</div>
  )
}

export default LeasonPlan