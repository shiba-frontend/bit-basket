import React, { useEffect, useState } from 'react'
import { IMAGE } from '../utils/theme'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { GetStateList, Postmember, signupPost } from '../utils/Apirequest'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'

const AddSubject = () => {

   const [fname, setfname] = useState("")
        const [selectedOption, setSelectedOption] = useState("active");
      const [loading, setloading] = useState(false)
   const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='dashboard-panel'>
    <TopBar/>
    <div className='container-fluid'>
        <Sidebar/>
        <div className='right-comon'>
            <h3 className='page-title'>Add Subject</h3>
            <div className='row mt-3'>
       
  <div className='col-lg-6'>
      <div className='form-group'>
          <label>Name <span style={{color:'red'}}>*</span></label>
          <input type='text' className='form-control' placeholder='Subject Name'
            value={fname}
            onChange={(e)=>setfname(e.target.value)}
          />
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
  <button className='ThemeBttn'>
      {loading ? 
      <>
       <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
       <span className="visually-hidden">Loading...</span>
      </>
      :
      'Add Subject'
  }
        
      
  </button>
  </div>
</div>
        </div>
    </div>
</div>
  )
}

export default AddSubject