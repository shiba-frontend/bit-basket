import React, { useEffect, useState } from 'react'
import { IMAGE } from '../utils/theme'
import { GetProfile, GetsubscriptionList, key, Postsubscription } from '../utils/Apirequest'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Modal from 'react-bootstrap/Modal';
import PaymentForm from '../home/PaymentForm';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import TopBar from '../common/TopBar';
import Sidebar from '../common/Sidebar';



const UserSubscription = () => {

    const [List, setList] = useState([])
    
    const [show, setShow] = useState(false);
    const [Sid, setSid] = useState(null);
      const [subscriptiondetails, setsubscriptiondetails] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const navigate = useNavigate();


    async function getApi() {

        let response = await GetsubscriptionList()
        let profileresponse = await GetProfile()
            
                if(profileresponse?.success){
                 console.log(profileresponse?.data?.user?.
                    user_subscriptions) 
                    setsubscriptiondetails(profileresponse?.data?.user?.user_subscriptions?.[0])
                }

        if(response?.success){
            setList(response?.data)
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
                <h3 className='page-title'>Manage Membership</h3>
                <div className='row mt-4'>
            {List?.map((item, i)=>{
                return (
                    <div className='col-lg-4' key={i}>
                    <div className='subscription-box'>
                        {subscriptiondetails?.pivot?.subscription_id == item?.id && 

<span className='current-subs'>Active</span>
                        }
                    
                         <img src={IMAGE.like} />
                         <h3>{item?.name}</h3>
                         <p>{item?.description}</p>
                        <b>$ {item?.price}</b>
                        <NavLink to={`/card/${item?.id}`} className='btn btn-primary w-100'>
                        Get it now
                        </NavLink>

                        <ul>
                            <li>
                                <span><img src={IMAGE.checked} /></span>
                                Lorem Ipsum is simply
                            </li>
                            <li>
                                <span><img src={IMAGE.checked} /></span>
                                text of the printing
                            </li>
                            <li>
                                <span><img src={IMAGE.checked} /></span>
                                Lorem Ipsum has been
                            </li>
                        </ul>
                    </div>
                </div>
                )
            })}
          
          
        </div>
        {/* <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Payment Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
   
     </Modal.Body>
      </Modal> */}
            </div>
        </div>
    </div>

  )
}

export default UserSubscription