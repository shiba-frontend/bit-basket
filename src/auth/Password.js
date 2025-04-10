import React, { useState } from 'react'
import { IMAGE } from '../utils/theme'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ResetPasswordPost } from '../utils/Apirequest'
import { toast } from 'react-toastify'

const Password = () => {
      const [password, setpassword] = useState("")
        const [cpassword, setcpassword] = useState("")
        const [type, setType] = useState('password');
        const [type1, setType1] = useState('password');
        const [icon, setIcon] = useState( <i class="fa-solid fa-eye-slash"></i>);
        const [icon1, setIcon1] = useState( <i class="fa-solid fa-eye-slash"></i>);
        const [loading, setloading] = useState(false)

      const navigate = useNavigate()
          const userName = useLocation();
          var Email = userName?.state?.email

    const handleToggle = () => {
        if (type==='password'){
           setIcon(<i class="fa-solid fa-eye"></i>);
           setType('text')
        } else {
           setIcon(<i class="fa-solid fa-eye-slash"></i>)
           setType('password')
        }
     }

   async  function ContinueHandle(){

    if(password == ''){
      toast.error("Password is required")
    } else if(cpassword != password){
        toast.error('Confirm Password does not match with password');
    } else {
      var FormData = require('form-data');
      var data = new FormData();
      data.append("email", Email);
      data.append("password", password);
      data.append("c_password", cpassword);
        setloading(true)
  
          let response = await ResetPasswordPost(data)
          setloading(false)
       
          if(response?.success){
              
           navigate('/login')
          } else {
             toast.error(response?.error)
          }
       
      }
    }

  

    const handleToggle1 = () => {
        if (type1==='password'){
           setIcon1(<i class="fa-solid fa-eye"></i>);
           setType1('text')
        } else {
           setIcon1(<i class="fa-solid fa-eye-slash"></i>)
           setType1('password')
        }
     }


  return (
    <div className='container py-5'>

        <div className='logo'>
            <img src={IMAGE.logo} />
        </div>
     
     <div className='auth-form'>
        <h3>Reset Password</h3>

        <div className='form-group'>
                <label>Password <span style={{color:'red'}}>*</span></label>
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
                <label>Confirm Password <span style={{color:'red'}}>*</span></label>
                <input  type={type1} className="form-control" placeholder="XXXXX"
                value={cpassword}
                onChange={(e)=>setcpassword(e.target.value)}
                />
                <span class="flex justify-around items-center" style={{    
                    position: 'absolute',
top: '38px',
right: '9px'}} onClick={handleToggle1}>
               {icon1}
                  
                </span>
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
               <h6><NavLink to="/forgot-password">Go Back</NavLink></h6>
        </div>
     </div>
   
</div>
  )
}

export default Password