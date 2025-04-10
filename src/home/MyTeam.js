import React, { useEffect } from 'react'
import { IMAGE } from '../utils/theme'
import { GetTeammember } from '../utils/Apirequest'
import { NavLink } from 'react-router-dom'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'

const MyTeam = () => {

     async function getApi() {
    
            let response = await GetTeammember()
    
            if(response?.success){
    
            }
    
        }
    
        useEffect(()=>{
            getApi()
        },[])


    


  return (

<div className='dashboard-panel'>
        <TopBar/>
        <div className='container-fluid'>
            <Sidebar/>
            <div className='right-comon'>
            <div className='d-flex  mb-3 justify-content-between align-items-center'>
            <h3 className='page-title'>Member User</h3>
           <NavLink to="/add-team" className='btn btn-primary'>Add Team</NavLink>
           </div>
           <div className='member-user'>
           <table className='table custom-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <div className='name-img1'>
                                <img src={IMAGE.default} />
                                <h5>XYZ .asd</h5>
                            </div>
                        </td>
                        <td>77666767</td>
               
                        <td>
                            <button className='btn btn-sm btn-outline-primary'>
                            <i className="fa-solid fa-pen"></i>
                            </button>
                            <button className='btn btn-sm btn-outline-danger ml-2'>
                            <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <div className='name-img1'>
                                <img src={IMAGE.default} />
                                <h5>XYZ .asd</h5>
                            </div>
                        </td>
                        <td>77666767</td>
               
                        <td>
                            <button className='btn btn-sm btn-outline-primary'>
                            <i className="fa-solid fa-pen"></i>
                            </button>
                            <button className='btn btn-sm btn-outline-danger ml-2'>
                            <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <div className='name-img1'>
                                <img src={IMAGE.default} />
                                <h5>XYZ .asd</h5>
                            </div>
                        </td>
                        <td>77666767</td>
               
                        <td>
                            <button className='btn btn-sm btn-outline-primary'>
                            <i className="fa-solid fa-pen"></i>
                            </button>
                            <button className='btn btn-sm btn-outline-danger ml-2'>
                            <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                   
                </table>

           {/* <div className='row'>
            <div className='col-lg-4'>
                <div className='member-sidebar'>
                   <div className='userList'>
                    <div className='userList-pic'>
                        <img src={IMAGE.default} /> 
                     </div>
                     <div className='userList-info'>
                        <h3>Abc Xyz</h3>
                        <h5>Created: Nov 30, 2022 20:48</h5>
                        <h6>Last Activity: Nov 30, 2022 20:48</h6>
                     </div>
                   </div>
                   <div className='userList'>
                    <div className='userList-pic'>
                        <img src={IMAGE.default} /> 
                     </div>
                     <div className='userList-info'>
                        <h3>Abc Xyz</h3>
                        <h5>Created: Nov 30, 2022 20:48</h5>
                        <h6>Last Activity: Nov 30, 2022 20:48</h6>
                     </div>
                   </div>
                </div>
            </div>
            <div className='col-lg-8'>
                <div className='member-right'>
                    <div className='member-right-top mb-4'>
                        <div className='member-right-top-img'>
                                <img src={IMAGE.default} /> 
                         </div>
                         <div className='member-right-top-info'>
                            <h3>Abc xyz <button className='btn btn-sm btn-outline-primary'><i className="fa-solid fa-key"></i> Generate Password</button></h3>
                            <h5>abc@gmail.com</h5>
                            <h6>Branch: Branch Four</h6>
                            <h6>Slack URL: <a href='#' className='btn btn-sm btn-primary'>View</a></h6>
                            <h6>Created: Nov 30, 2022 20:48  | Last Activity: Nov 30, 2022 20:48</h6>
                         </div>
                     </div>
                     <h5>Recent Branch Activity</h5>
                     <ul>
                        <li>Created: Nov 30, 2022 20:48  | Last Activity: Nov 30, 2022 20:48</li>
                        <li>Created: Nov 30, 2022 20:48  | Last Activity: Nov 30, 2022 20:48</li>
                        <li>Created: Nov 30, 2022 20:48  | Last Activity: Nov 30, 2022 20:48</li>
                     </ul>
                </div>
            </div>
           </div> */}
    
           </div>
            </div>
        </div>
    </div>

  )
}

export default MyTeam