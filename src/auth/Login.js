import React, { useState } from 'react'
import { IMAGE } from '../utils/theme'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
        const [email, setemail] = useState("")
        const [loading, setloading] = useState(false)

    const navigate = useNavigate()



function ContinueHandle(){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (reg.test(email) === false) {
             toast.error('Email should be proper!');
        } else {
            navigate("/email-password", {state:{email:email}});
        }
 
    
}








  return (
    <div className='container py-5'>

        <div className='logo'>
            <img src={IMAGE.logo} />
        </div>
     
     <div className='auth-form'>
        <h3>Welcome Back</h3>
        <div className='form-group mt-3'>
            <label>Email Address</label>
            <input type='email' className='form-control' placeholder='Email'
               value={email}
               onChange={(e)=>setemail(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <button className='ThemeBttn' onClick={ContinueHandle}>Continue</button>
        </div>
        <div className='form-group text-center'>
            <h6>Don't have an account? <NavLink to="/sign-up">Sign Up</NavLink></h6>
        </div>
     </div>
   
</div>
  )
}

export default Login