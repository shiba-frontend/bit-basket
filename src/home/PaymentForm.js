import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



const PaymentForm = ({sendDataToParent}) => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
  
    const handleSubmit = async (event) => {

  

      event.preventDefault();
  
      if (!stripe || !elements) {
        return; // Ensure Stripe is loaded
      }
  
      const cardElement = elements.getElement(CardElement);
  
      const { token, error } = await stripe.createToken(cardElement);
  
      if (error) {
        setError(error.message);
      } else {
        console.log('Token created successfully:', token);

        sendDataToParent(token?.id) 
      }
    };


  return (
    <form onSubmit={handleSubmit}>
    <CardElement />
    {error && <div style={{ color: 'red' }}>{error}</div>}
    <button type="submit" className='ThemeBttn mt-4' disabled={!stripe}>
      Pay
    </button>
  </form>
  )
}

export default PaymentForm