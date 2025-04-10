import React from 'react'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'

const Dashboard = () => {
  return (
    <div className='dashboard-panel'>
        <TopBar/>
        <div className='container-fluid'>
            <Sidebar/>
            <div className='right-comon'>
                <h3 className='page-title'>Dashboard</h3>
            </div>
        </div>
    </div>
  )
}

export default Dashboard