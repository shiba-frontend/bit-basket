import React, { useEffect, useState } from 'react'
import { IMAGE } from '../utils/theme'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { GetStateList, Postmember, signupPost } from '../utils/Apirequest'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'

const AddTeam = () => {

 
        const [fname, setfname] = useState("")
        const [lname, setlname] = useState("")
        const [email, setemail] = useState("")
        const [phone, setphone] = useState("")
     
        const [password, setpassword] = useState("")
        const [cpassword, setcpassword] = useState("")
        const [type, setType] = useState('password');
        const [type1, setType1] = useState('password');
        const [icon, setIcon] = useState( <i className="fa-solid fa-eye-slash"></i>);
        const [icon1, setIcon1] = useState( <i className="fa-solid fa-eye-slash"></i>);
        const [loading, setloading] = useState(false)
        const [pimage, setpimage] = useState(null)
        const [pfile, setpfile] = useState('')
        const [selectedOption, setSelectedOption] = useState("active");

        let navigate = useNavigate();

        const handleToggle = () => {
            if (type==='password'){
               setIcon(<i class="fa-solid fa-eye"></i>);
               setType('text')
            } else {
               setIcon(<i class="fa-solid fa-eye-slash"></i>)
               setType('password')
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
        }  else {
    
            var FormData = require('form-data');
            var data = new FormData();
         
            data.append("first_name", fname);
            data.append("last_name", lname);
            data.append("email", email);
            data.append("country_code", '+1');
            data.append("phone", phone);
            data.append("image", pfile);
            data.append("status", 1);
    
            setloading(true)
    
            let response = await Postmember(data)
            setloading(false)
            console.log("response", response)
            if(response?.success){
            
                toast.success(response?.message)
    
                navigate("/my-team");
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
                <h3 className='page-title'>Add Team</h3>
                <div className='row mt-3'>
      
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
                  <div className='form-group'>
                      <label>Select Status<span style={{color:'red'}}>*</span></label>
                      <div className='d-flex'>
                          <div class="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
                              value="active"
                              checked={selectedOption === "active"}
                              onChange={handleRadioChange}
                              />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                              Active
                              </label>
                          </div>
                          <div className="form-check ml-3">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
                          value="inactive"
                          checked={selectedOption === "inactive"}
                          onChange={handleRadioChange}
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault2">
                              Inactive
                          </label>
                          </div>
                          </div>
                   </div>
          
             </div>

      <div className='col-lg-12'>
      <button className='ThemeBttn' onClick={()=>SignupHandle()}>
          {loading ? 
          <>
           <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
           <span className="visually-hidden">Loading...</span>
          </>
          :
          'Add Member'
      }
            
          
      </button>
      </div>
   </div>
            </div>
        </div>
    </div>
     
  )
}

export default AddTeam