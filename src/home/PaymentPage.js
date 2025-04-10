import React from 'react'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'
import PaymentForm from './PaymentForm'
import { key, Postsubscription } from '../utils/Apirequest'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const PaymentPage = () => {

    const {id} = useParams()
        const stripePromise = loadStripe(key.STRIPE_KEY); 

        let navigate = useNavigate()

    console.log(id)

    async function PaymentHandle(params) {

        var FormData = require('form-data');
        var data = new FormData();
        data.append("subscription_id", id);
        data.append("stripe_token", params);

       
        
        let response = await Postsubscription(data)

        if(response?.success){
    
           toast.success(response?.message)
           navigate("/dashboard")

        } else {
              toast.error(response?.error)
        }


    }





  return (
    <Elements stripe={stripePromise}>
    <div className='dashboard-panel'>
    <TopBar/>
    <div className='container-fluid'>
        <Sidebar/>
        <div className='right-comon'>
        <h3 className='page-title'>Card Details</h3>
            <div className='payment-page'>
            
            <PaymentForm  sendDataToParent={PaymentHandle}  />
            </div>
           
        </div>
    </div>
</div>
</Elements>
  )
}

export default PaymentPage