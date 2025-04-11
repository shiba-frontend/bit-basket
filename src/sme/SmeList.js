import React from 'react'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'
import { NavLink } from 'react-router-dom'

const SmeList = () => {
  return (
    <div className='dashboard-panel'>
    <TopBar/>
    <div className='container-fluid'>
        <Sidebar/>
        <div className='right-comon'>
             <div className='d-flex  mb-3 justify-content-between align-items-center'>
             <h3 className='page-title'>SME</h3>
                       <NavLink to="/add-sme" className='btn btn-primary'>Add SME</NavLink>
                       </div>
           
            <table className='table custom-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>Subject</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John Smith</td>
                        <td>jhon@gmail.com</td>
                        <td>54545445</td>
                        <td>UAE</td>
                        <td>Sharaj</td>
                        <td>
                            <ol>
                                <li>Chemistry</li>
                                <li>Physics</li>
                            </ol>
                        </td>
                        <td>
                            <button className='btn btn-sm btn-outline-primary mr-2'>
                                 <i className="fa-solid fa-pencil"></i>
                            </button>
                            <button className='btn btn-sm btn-outline-danger'>
                            <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>John Smith</td>
                        <td>jhon@gmail.com</td>
                        <td>54545445</td>
                        <td>UAE</td>
                        <td>Sharaj</td>
                        <td>
                            <ol>
                                <li>Chemistry</li>
                                <li>Physics</li>
                            </ol>
                        </td>
                        <td>
                            <button className='btn btn-sm btn-outline-primary mr-2'>
                                 <i className="fa-solid fa-pencil"></i>
                            </button>
                            <button className='btn btn-sm btn-outline-danger'>
                            <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>John Smith</td>
                        <td>jhon@gmail.com</td>
                        <td>54545445</td>
                        <td>UAE</td>
                        <td>Sharaj</td>
                        <td>
                            <ol>
                                <li>Chemistry</li>
                                <li>Physics</li>
                            </ol>
                        </td>
                        <td>
                            <button className='btn btn-sm btn-outline-primary mr-2'>
                                 <i className="fa-solid fa-pencil"></i>
                            </button>
                            <button className='btn btn-sm btn-outline-danger'>
                            <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                   
                </table>
        </div>
    </div>
</div>
  )
}

export default SmeList