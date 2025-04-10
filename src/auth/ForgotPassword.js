import React, { useState } from 'react'
import { IMAGE } from '../utils/theme'
import { NavLink, useNavigate } from 'react-router-dom'
import { ForgotPassPost } from '../utils/Apirequest'
import { toast } from 'react-toastify'

const ForgotPassword = () => {
    const [email, setemail] = useState("") 
            const [loading, setloading] = useState(false)

    const navigate = useNavigate()



    async function ContinueHandle() {

         let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        
            if (reg.test(email) === false) {
                     toast.error('Email should be proper!');
                } else {
                    var FormData = require('form-data');
                    var data = new FormData();
                    data.append("email", email);
                      setloading(true)
                
                        let response = await ForgotPassPost(data)
                        setloading(false)
                   
                        if(response?.success){
                          toast.success(response?.message)
                             toast.info(response?.data?.otp)
                            navigate("/otp", {state:{email:email,from:'forgot' }});
                
                        } else {
                             toast.error(response?.error)
                        }
                }


      
    }



  return (
    <div className='container py-5'>

        <div className='logo'>
            <img src={IMAGE.logo} />
        </div>
     
     <div className='auth-form'>
        <h3>Forgot Password</h3>
        <div className='form-group mt-3'>
            <label>Email Address</label>
            <input type='text' className='form-control' placeholder='Email' 
               value={email}
               onChange={(e)=>setemail(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <button className='ThemeBttn' onClick={ContinueHandle}> {loading ? 
                <>
                 <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                 <span class="visually-hidden">Loading...</span>
                </>
                :
                'Continue'
            }</button>
        </div>
        <div className='form-group text-center'>
            <h6>Don't have an account? <NavLink to="/sign-up">Sign Up</NavLink></h6>
        </div>
     </div>
   
</div>
  )
}

export default ForgotPassword