import React, { useEffect, useState } from 'react'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'
import { NavLink } from 'react-router-dom'
import { CancelSubscription, GetProfile } from '../utils/Apirequest'
import { toast } from 'react-toastify'

const MySubscription = () => {
    const [subscriptiondetails, setsubscriptiondetails] = useState("")
         const [loading, setloading] = useState(false)



    async function GetApi(params) {

        
            let profileresponse = await GetProfile()
        
            if(profileresponse?.success){
             console.log(profileresponse?.data?.user?.
                user_subscriptions) 
                setsubscriptiondetails(profileresponse?.data?.user?.user_subscriptions?.[0])
            }
        
    }

    useEffect(()=>{
        GetApi()
    },[])

    async function CancelSubscriptionHandle() {
        setloading(true)

        let response = await CancelSubscription(subscriptiondetails?.pivot?.subscription_id)
        console.log(response)
        setloading(false)
         if(response?.success){
                            
            toast.success(response?.message)

        } else {
            toast.error(response?.error)
        }
        
    }


    
  return (
    <div className='dashboard-panel'>
        <TopBar/>
        <div className='container-fluid'>
            <Sidebar/>
            <div className='right-comon'>
                <h3 className='page-title'>Membership</h3>
                <table className='table custom-table mb-4'>
                <thead>
                    <tr>
                        <th>Your Plan</th>
                        <th>Plan Type</th>
                        <th>User</th>
                        <th>Renewal</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{subscriptiondetails?.name}</td>
                        <td>{subscriptiondetails?.duration} Month</td>
                        <td>{subscriptiondetails?.no_of_users}</td>
                        <td>Aug 06, 2024</td>
                        <td>
                            <button className='btn btn-sm btn-danger' onClick={()=>CancelSubscriptionHandle()}>
                            {loading ? 
                                <>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span class="visually-hidden">Loading...</span>
                                </>
                                :
                                'Cancel'
                            }
                            </button>
                            <NavLink to="/subscription" className='btn btn-sm btn-primary ml-2'>Change</NavLink>
                        </td>
                    </tr>
                  
                    </tbody>
                   
                </table>
                <h3 className='page-title'>Card Information</h3>
                <table className='table custom-table mb-4'>
               
                    <tbody>
                    <tr>
                        <td>
                            13XXXXXXXXXX
                            <NavLink to={`/card/${'1'}`} className='btn btn-sm btn-primary ml-2'>Change</NavLink>
                        </td>
                    </tr>
                  
                    </tbody>
                   
                </table>
                <h3 className='page-title'>Billing Details</h3>
                <table className='table custom-table mb-4'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Plan</th>
                        <th>Service Period</th>
                        <th>Payment Method</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Aug 06, 2024</td>
                        <td>Basic</td>
                        <td>Aug 06, 2024 - Sept 08,2024</td>
                        <td></td>
                        <td>$ 20</td>
                        
                    </tr>
                    <tr>
                        <td>Aug 06, 2024</td>
                        <td>Basic</td>
                        <td>Aug 06, 2024 - Sept 08,2024</td>
                        <td></td>
                        <td>$ 20</td>
                        
                    </tr>
                    <tr>
                        <td>Aug 06, 2024</td>
                        <td>Basic</td>
                        <td>Aug 06, 2024 - Sept 08,2024</td>
                        <td></td>
                        <td>$ 20</td>
                        
                    </tr>
                    <tr>
                        <td colSpan="5" className='text-right'>
                            <NavLink to="/payment-history" className="btn btn-sm btn-primary">View Details</NavLink>
                        </td>
                      
                    </tr>
                    </tbody>
                   
                </table>
            </div>
        </div>
    </div>
  )
}

export default MySubscription