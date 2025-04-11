import React from 'react'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'
import { NavLink } from 'react-router-dom'

const SubjectList = () => {
  return (
    <div className='dashboard-panel'>
    <TopBar/>
    <div className='container-fluid'>
        <Sidebar/>
        <div className='right-comon'>
             <div className='d-flex  mb-3 justify-content-between align-items-center'>
             <h3 className='page-title'>SME</h3>
                       <NavLink to="/add-subject" className='btn btn-primary'>Add Subject</NavLink>
                       </div>
           
            <table className='table custom-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Chemistry</td>
                      
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
                        <td>Physics</td>
                      
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

export default SubjectList