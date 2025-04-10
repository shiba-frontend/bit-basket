import React, { useState } from 'react'
import { IMAGE } from '../utils/theme'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { LoginPost } from '../utils/Apirequest'
import { toast } from 'react-toastify'

const EmailPassword = () => {
    const navigate = useNavigate()
    const userName = useLocation();
    var Email = userName?.state?.email

    const [password, setpassword] = useState("")
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState( <i class="fa-solid fa-eye-slash"></i>);
    const [email, setemail] = useState(Email)
    const [loading, setloading] = useState(false)

    
     


    const handleToggle = () => {
        if (type==='password'){
           setIcon(<i class="fa-solid fa-eye"></i>);
           setType('text')
        } else {
           setIcon(<i class="fa-solid fa-eye-slash"></i>)
           setType('password')
        }
     }

async function LoginHandle() {
    if(password == ''){
        toast.error("Password is required")
    } else {
        var FormData = require('form-data');
        var data = new FormData();
        data.append("email", email);
        data.append("password", password);
          setloading(true)
    
            let response = await LoginPost(data)
            setloading(false)
            console.log("response", response)
            if(response?.success){
                   toast.success(response?.message)
                   if(response?.data?.data?.token !== ""){
                    localStorage.setItem('bitbasket_access_token', response?.data?.token)
                    localStorage.setItem('user', JSON.stringify(response?.data?.user));
                    navigate("/dashboard")
                    window.location.reload()
            }
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
        <h3>Enter your password</h3>
        <div className='form-group mt-3'>
            <label>Email Address</label>
            <input type='text' className='form-control' placeholder='Email' readOnly value={email} />
            <NavLink to="/login" className="editText">Edit</NavLink>
        </div>
        <div className='form-group'>
                <label>Password</label>
                <input  type={type} className="form-control" placeholder="XXXXX"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                />
                <span class="flex justify-around items-center" style={{    
                    position: 'absolute',
top: '38px',
right: '9px'}} onClick={handleToggle}>
               {icon}
                  
                </span>
            </div>
            <div className='form-group'>
               <h6><NavLink to="/forgot-password">Forgot Password ?</NavLink></h6>
        </div>
        <div className='form-group'>
            <button className='ThemeBttn' onClick={LoginHandle}>
            {loading ? 
                <>
                 <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                 <span class="visually-hidden">Loading...</span>
                </>
                :
                'Continue'
            }
            </button>
        </div>
        <div className='form-group text-center'>
               <h6>Don't have an account? <NavLink to="/sign-up">Sign Up</NavLink></h6>
        </div>
     </div>
   
</div>
  )
}

export default EmailPassword