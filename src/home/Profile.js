import React, { useEffect, useState } from 'react'
import { IMAGE } from '../utils/theme'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { GetProfile, GetStateList, Postmember, signupPost } from '../utils/Apirequest'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'

const Profile = () => {

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
         const [pimage, setpimage] = useState(null)
         const [pfile, setpfile] = useState("")
         const [loading, setloading] = useState(false)
         const [selectedOption, setSelectedOption] = useState("UAE");

        let navigate = useNavigate();

              const HandleImage = async (e) => {
                    var file = e.target.files[0];
                 
                    var reader = new FileReader();
                  
                    reader.onloadend = async function (e) {
                      const fsize = file.size;
                
                      const fileSize = Math.round(fsize / 1024);
                      if (fileSize >= 800) {
                        toast.error('file size is too large');
                      } else {
                        setpfile(file)
                        setpimage(reader.result)
                
                
                      }
                    };
                    reader.readAsDataURL(file);
                  };
        
                  const handleRadioChange = (event) => {
                    setSelectedOption(event.target.value);
                  };
        
            
                 async function SignupHandle(){
        
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                if(fname == ""){
                    toast.error('First name should be must');
                } else if(lname == ""){
                    toast.error('Last name should be must');
                } else if(phone == ""){
                    toast.error('Phone should be must');
                } else if (reg.test(email) === false) {
                     toast.error('Email should be proper!');
                } else {
            
                    var FormData = require('form-data');
                    var data = new FormData();
                 
                    data.append("country", selectedOption);
                    data.append("first_name", fname);
                    data.append("last_name", lname);
                    data.append("email", email);
                    data.append("country_code", '+1');
                    data.append("phone", phone);
                    data.append("company_type", ctype);
                    data.append("employer_identification_no", ino);
                    data.append("city", staten);
                    data.append("emarati", emarti);
                    data.append("business_license", licience);
                    data.append("tax_registration_number", rn);
                    data.append("image", pfile);
                    setloading(true)
            
                    let response = await Postmember(data)
                    setloading(false)
                    console.log("response", response)
                    if(response?.success){
                    
                        toast.success(response?.message)
            
                    } else {
                        toast.error(response?.error)
                    }
                }
                
        
        }

 async function GetState() {
    
    let response = await GetStateList()

    let profileresponse = await GetProfile()

    if(profileresponse?.success){
     console.log(profileresponse?.data?.user) 

     var result = profileresponse?.data?.user?.user_details
     setemail(result?.email)
    setphone(result?.phone)
    setpimage(profileresponse?.data?.user?.profile_image)
    setfname(result?.first_name)
    setlname(result?.last_name)
    setemarti(result?.emarati)
    setSelectedOption(result?.country)
    setstaten(result?.city_id)
    setlicience(result?.business_license)
    setrn(result?.tax_registration_number)
    setino(result?.employer_identification_no)
    }

    if(response?.success){
        setstateList(response?.data) 
    }

 }

 useEffect(()=>{
    GetState()
 },[])

  return (

<div className='dashboard-panel'>
        <TopBar/>
        <div className='container-fluid'>
            <Sidebar/>
            <div className='right-comon'>
                <h3 className='page-title'>Profile</h3>
                <div className='row mt-3'>

<div className='col-lg-12'>
         <div className='form-group'>
             {/* <label>Select Status<span style={{color:'red'}}>*</span></label> */}
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
         <div className='col-lg-6'>
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

<div className='col-lg-12'>
<div className='form-group'>
<label>Upload Photo <span style={{color:'red'}}>*</span></label>
 <div className='row align-items-center'>
     <div className='col-lg-2'>
     {pimage !== null ?
             <img src={pimage} alt="profile" width="150"/>
             :
             

             <img src={IMAGE.default} alt="profile"  width="150" />
     
     }
     </div>
     <div className='col-lg-10'>
         <div className='file-upload'>
             <input type="file" accept="image/*" onChange={HandleImage} className='form-control' />
             
         </div>
     </div>
 </div>
 </div>
 
    </div>



<div className='col-lg-12'>
<button className='ThemeBttn' onClick={()=>SignupHandle()}>
 {loading ? 
 <>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
 </>
 :
 'Update'
}
   
 
</button>
</div>
</div>
            </div>
        </div>
    </div>


   
  )
}

export default Profile