import React, { useState } from 'react'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'
import { toast } from 'react-toastify'
import { PostChangePassword } from '../utils/Apirequest'

const ChangePassword = () => {
    const [oldpassword, setoldpassword] = useState("")
         const [password, setpassword] = useState("")
            const [cpassword, setcpassword] = useState("")
            const [type, setType] = useState('password');
            const [type1, setType1] = useState('password');
            const [icon, setIcon] = useState( <i class="fa-solid fa-eye-slash"></i>);
            const [icon1, setIcon1] = useState( <i class="fa-solid fa-eye-slash"></i>);
            const [loading, setloading] = useState(false)





    const handleToggle = () => {
        if (type==='password'){
           setIcon(<i className="fa-solid fa-eye"></i>);
           setType('text')
        } else {
           setIcon(<i className="fa-solid fa-eye-slash"></i>)
           setType('password')
        }
     }
    
     const handleToggle1 = () => {
        if (type1==='password'){
           setIcon1(<i className="fa-solid fa-eye"></i>);
           setType1('text')
        } else {
           setIcon1(<i className="fa-solid fa-eye-slash"></i>)
           setType1('password')
        }
     }

     async function SubmitHandle() {
     if(password == ""){
        toast.error('Password should be must');
    } else if(cpassword != password){
        toast.error('Confirm Password does not match with password');
    } else {
        setloading(true)
        var FormData = require('form-data');
        var data = new FormData();
        data.append("password", password);
        data.append("c_password", cpassword);

         let response = await PostChangePassword(data)
        setloading(false)
    
        if(response?.success){
        
            toast.success(response?.message)

        } else {
            toast.error(response?.error)
        }
    }
        
        

     }




  return (
    <div className='dashboard-panel'>
    <TopBar/>
    <div className='container-fluid'>
        <Sidebar/>
        <div className='right-comon'>
            <h3 className='page-title'>Change Password</h3>
            <div className='row mt-3'>
            <div className='col-lg-4'>
            <div className='form-group'>
                <label>Old Password <span style={{color:'red'}}>*</span></label>
                <input  type="password" className="form-control" placeholder="XXXXX"
                value={oldpassword}
                onChange={(e)=>setoldpassword(e.target.value)}
                />
             
            </div>
            </div>
            <div className='col-lg-4'>
            <div className='form-group'>
                <label>New Password <span style={{color:'red'}}>*</span></label>
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
            </div>
            <div className='col-lg-4'>
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
            </div>
                </div>
                <div className='form-group'>
             <button className='ThemeBttn' onClick={()=>SubmitHandle()}>
                {loading ? 
                <>
                 <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                 <span className="visually-hidden">Loading...</span>
                </>
                :
                'Update Password'
            }
                  
                
            </button>
         </div>
        </div>
    </div>
</div>
  )
}

export default ChangePassword