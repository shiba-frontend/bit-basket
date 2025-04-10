import React, { useEffect } from 'react'
import { IMAGE } from '../utils/theme'
import { GetTeammember } from '../utils/Apirequest'
import { NavLink } from 'react-router-dom'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'

const PaymentHistory = () => {
  return (



<div className='dashboard-panel'>
        <TopBar/>
        <div className='container-fluid'>
            <Sidebar/>
            <div className='right-comon'>
                <h3 className='page-title'>Payment History</h3>
                <table className='table custom-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Plan</th>
                        <th>Service Period</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>15-08-25</td>
                        <td>Basic</td>
                        <td>Aug 06, 2024 - Sept 08,2024</td>
                        <td>$ 20.00</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>15-08-25</td>
                        <td>Basic</td>
                        <td>Aug 06, 2024 - Sept 08,2024</td>
                        <td>$ 20.00</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>15-08-25</td>
                        <td>Basic</td>
                        <td>Aug 06, 2024 - Sept 08,2024</td>
                        <td>$ 20.00</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>15-08-25</td>
                        <td>Basic</td>
                        <td>Aug 06, 2024 - Sept 08,2024</td>
                        <td>$ 20.00</td>
                    </tr>
                    </tbody>
                   
                </table>
            </div>
        </div>
    </div>


  )
}

export default PaymentHistory