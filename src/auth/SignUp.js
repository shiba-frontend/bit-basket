import React, { useEffect, useState } from 'react'
import { IMAGE } from '../utils/theme'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { GetStateList, signupPost } from '../utils/Apirequest'


  const SignUp = () => {
        const [stateList, setstateList] = useState([])
        const [staten, setstaten] = useState("")
        const [fname, setfname] = useState("")
        const [lname, setlname] = useState("")
        const [email, setemail] = useState("")
        const [phone, setphone] = useState("")
        const [ctype, setctype] = useState("")
        const [ino, setino] = useState("")
        const [emarti, setemarti] = useState("")
        const [licience, setlicience] = useState("")
        const [rn, setrn] = useState("")
        const [password, setpassword] = useState("")
        const [cpassword, setcpassword] = useState("")
        const [type, setType] = useState('password');
        const [type1, setType1] = useState('password');
        const [icon, setIcon] = useState( <i className="fa-solid fa-eye-slash"></i>);
        const [icon1, setIcon1] = useState( <i className="fa-solid fa-eye-slash"></i>);
        const [loading, setloading] = useState(false)
          const [selectedOption, setSelectedOption] = useState("UAE");



    const navigate = useNavigate()



    const SignupHandle = async ()=>{

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(fname == ""){
            toast.error('First name should be must');
        } else if(lname == ""){
            toast.error('Last name should be must');
        } else if(phone == ""){
            toast.error('Phone should be must');
        } else if (reg.test(email) === false) {
             toast.error('Email should be proper!');
        } else if(password == ""){
            toast.error('Password should be must');
        } else if(cpassword != password){
            toast.error('Confirm Password does not match with password');
        } else {
    
            var FormData = require('form-data');
            var data = new FormData();
            data.append("country", selectedOption);
            data.append("first_name", fname);
            data.append("last_name", lname);
            data.append("email", email);
            data.append("country_code", '+1');
            data.append("phone", phone);
            data.append("password", password);
            data.append("c_password", cpassword);
            data.append("company_type", ctype);
            data.append("employer_identification_no", ino);
            data.append("city", staten);
            data.append("emarati", emarti);
            data.append("business_license", licience);
            data.append("tax_registration_number", rn);
            setloading(true)
    
            let response = await signupPost(data)
            setloading(false)
            console.log("response", response)
            if(response?.success){
            
                toast.success(response?.message)
                toast.info(response?.data?.otp)
    
                navigate("/otp", {state:{email:email,from:'signup' }});
            } else {
                toast.error(response?.error)
            }
        }
        

}

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

 async function GetState() {
    
    let response = await GetStateList()

    if(response?.success){
        setstateList(response?.data) 
    }

 }

 const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };


 useEffect(()=>{
    GetState()
 },[])




 return (
     <div className='container py-5'>
 
         <div className='logo'>
             <img src={IMAGE.logo} />
         </div>
      
      <div className='auth-form'>
         <h3>Create your account</h3>
         <div className='row mt-3'>
         <div className='col-lg-12'>
         <div className='form-group'>
          
             <div className='d-flex'>
                 <div className="form-check">
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
                     value="UAE"
                     checked={selectedOption === "UAE"}
                     onChange={handleRadioChange}
                     />
                     <label className="form-check-label" htmlFor="flexRadioDefault1">
                     UAE
                     </label>
                 </div>
                 <div className="form-check ml-3">
                 <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
                 value="USA"
                 checked={selectedOption === "USA"}
                 onChange={handleRadioChange}
                 />
                 <label className="form-check-label" htmlFor="flexRadioDefault2">
                     USA
                 </label>
                 </div>
                 </div>
          </div>
 
    </div>
    {selectedOption == 'UAE' &&
         <div className='col-lg-12'>
                <div className='form-group'>
                    <label>Select City <span style={{color:'red'}}>*</span></label>
                    <select className='form-control'
                    value={staten}
                    onChange={(e)=>setstaten(e.target.value)}
                    >
                        <option>--Select--</option>
                        {stateList?.map((item, i)=>{
                            return (
                                <option key={i} value={item?.id}>{item?.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
  }
            <div className='col-lg-6'>
                <div className='form-group'>
                    <label>First Name <span style={{color:'red'}}>*</span></label>
                    <input type='text' className='form-control' placeholder='First Name'
                      value={fname}
                      onChange={(e)=>setfname(e.target.value)}
                    />
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <label>Last Name <span style={{color:'red'}}>*</span></label>
                    <input type='text' className='form-control' placeholder='Last Name'
                          value={lname}
                          onChange={(e)=>setlname(e.target.value)}
                    />
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <label>Email Address <span style={{color:'red'}}>*</span></label>
                    <input type='email' className='form-control' placeholder='Email' 
                          value={email}
                          onChange={(e)=>setemail(e.target.value)}
                    />
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <label>Phone <span style={{color:'red'}}>*</span></label>
                    <input type='text' className='form-control' placeholder='Phone Number'
                        value={phone}
                        onChange={(e)=>setphone(e.target.value)}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          maxLength="10"
                    />
                </div>
            </div>
            {selectedOption == 'USA' &&
            <div className='col-lg-6'>
                <div className='form-group'>
                    <label>Company Type <span style={{color:'red'}}>*</span></label>
                    <select className='form-control'
                        value={ctype}
                        onChange={(e)=>setctype(e.target.value)}
                    >
                        <option>--Select--</option>
                        <option value="private">Private</option>
                        <option value="LLP">LLP</option>
                    </select>
                </div>
            </div>
  }
       {selectedOption == 'USA' &&
            <div className='col-lg-6'>
                <div className='form-group'>
                    <label>Employer identification No <span style={{color:'red'}}>*</span></label>
                    <input type='text' className='form-control' placeholder='identification No'
                        value={ino}
                        onChange={(e)=>setino(e.target.value)}
                    />
                </div>
            </div>
  }

{selectedOption == 'UAE' &&

<div className='col-lg-6'>
<div className='form-group'>
    <label>Emarati</label>
    <input type='text' className='form-control' placeholder='Emarati'
        value={emarti}
        onChange={(e)=>setemarti(e.target.value)}
    />
</div>
</div>
  }
  {selectedOption == 'UAE' &&

<div className='col-lg-6'>
<div className='form-group'>
    <label>Business Licence</label>
    <input type='text' className='form-control' placeholder='Licence'
        value={licience}
        onChange={(e)=>setlicience(e.target.value)}
    />
</div>
</div>
  }
    {selectedOption == 'UAE' &&

<div className='col-lg-6'>
<div className='form-group'>
    <label>Tax Registration Number</label>
    <input type='text' className='form-control' placeholder='Registration Number'
        value={rn}
        onChange={(e)=>setrn(e.target.value)}
    />
</div>
</div>
  }
            <div className='col-lg-6'>
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
            </div>
            <div className='col-lg-6'>
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
             <button className='ThemeBttn' onClick={()=>SignupHandle()}>
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
             <h6>Already have an account? <NavLink to="/login">Login</NavLink></h6>
         </div>
      </div>
    
 </div>
   )
}

export default SignUp