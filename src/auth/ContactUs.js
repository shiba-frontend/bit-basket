import React, { useState } from 'react'
import { IMAGE } from '../utils/theme'
import { toast } from 'react-toastify'
import { PostContact } from '../utils/Apirequest'

const ContactUs = () => {

    const [email, setemail] = useState("")
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [phone, setphone] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")
    const [loading, setloading] = useState(false)

    const SubmitHandle = async ()=>{
        

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(fname == ""){
            toast.error('Name should be must');
        } else if (reg.test(email) === false) {
             toast.error('Email should be proper!');
        } else if(message == ""){
            toast.error('Message should be must');
        } else {

            setloading(true)
            var FormData = require('form-data');
            var data = new FormData();
            data.append("first_name", fname);
           data.append("last_name", lname);
            data.append("email", email);
           data.append("phone",phone);
            data.append("message", message);
            data.append("subject", subject);


            const response = await PostContact()
            setloading(false)
            if(response?.success){
                toast(response?.message)
            } else {
                              toast.error(response?.error)
                        }

      
        
           
    }

        
    }


  return (
    <div className='container py-5 faq-sec'>
   
    <div className='logo'>
        <img src={IMAGE.logo} />
    </div>
    <h3>Contact Us</h3>
    <div className='row'>
        
        <div className='col-lg-3'>
            <div className='form-group'>
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="Enter first name"
                value={fname}
                onChange={(e)=>setfname(e.target.value)}
                />
            </div>
            </div>
            <div className='col-lg-3'>
            <div className='form-group'>
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Enter last name"
                value={lname}
                onChange={(e)=>setlname(e.target.value)}
                />
            </div>
            </div>
            <div className='col-lg-3'>
            <div className='form-group'>
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                />
            </div>
            </div>
            <div className='col-lg-3'>
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
                <label>Subject</label>
                <input type="text" className="form-control" placeholder="Subject"
                value={subject}
                onChange={(e)=>setsubject(e.target.value)}
                />
            </div>
            </div>
            <div className='col-lg-12'>
            <div className='form-group'>
                <label>Message</label>
               <textarea className='form-control' placeholder='Message'
                value={message}
                onChange={(e)=>setmessage(e.target.value)}
               ></textarea>
            </div>
            </div>
     <div className='col-lg-12 mt-5'>
     <div className='form-group text-right'>
     <button className='ThemeBttn' onClick={SubmitHandle}>
                {loading ? 
                <>
                 <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                 <span class="visually-hidden">Loading...</span>
                </>
                :
                'Submit'
            }
                  
                
            </button>

            </div>
            </div>
      
    </div>


</div>
  )
}

export default ContactUs