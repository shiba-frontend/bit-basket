import React, { useState } from 'react'
import { IMAGE } from '../utils/theme'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { OTPPost, SignupOTPPost } from '../utils/Apirequest'
import { toast } from 'react-toastify'

const OtpVerifyed = () => {

const [otp, setotp] = useState("")
    const [loading, setloading] = useState(false)

    const navigate = useNavigate()
    const userName = useLocation();
    var Email = userName?.state?.email
    var From = userName?.state?.from

    

async function ContinueHandle(){

    if(otp == ''){
        toast.error("OTP is mandatory")
    } else {
        var FormData = require('form-data');
        var data = new FormData();
        data.append("email", Email);
        data.append("otp", otp);
          setloading(true)
    
          if(From == 'signup'){
            let response = await SignupOTPPost(data)
            setloading(false)
     
            if(response?.success){
                   toast.success(response?.message)
                navigate('/login')
            } else {
                toast.error(response?.error)
            }
    
        } else {
            navigate("/password", {state:{email:Email}});
        }
    }

}






 return (
     <div className='container py-5'>
 
         <div className='logo'>
             <img src={IMAGE.logo} />
         </div>
      
      <div className='auth-form'>
         <h3 className='text-center'>Check your inbox</h3>
         <div className='form-group mt-3'>
             <h5 className='small-text'>Enter the verification code we just sent to 
                <br></br>
                {Email}
             </h5>
         </div>


         <div className='form-group mt-3'>
             <label>OTP</label>
             <input type='text' className='form-control' placeholder='Verification Code'
             value={otp}
             onChange={(e)=>setotp(e.target.value)}
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  maxLength="4"
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
             <button className='noBttnText'>Resend OTP</button>
         </div>
      </div>
    
 </div>
   )
}

export default OtpVerifyed