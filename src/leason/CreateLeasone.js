import React, { useState } from 'react'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'
import { IMAGE } from '../utils/theme'
import { toast } from 'react-toastify'

var data = [
    {
        id:1,
        name:'XYZ',
        designation:'BIT',
        istoggle:false,
    },
    {
        id:2,
        name:'XYZ',
        designation:'BIT',
        istoggle:false,
    },
    {
        id:3,
        name:'XYZ',
        designation:'BIT',
        istoggle:false,
    },
    {
        id:4,
        name:'XYZ',
        designation:'BIT',
        istoggle:false,
    },
    {
        id:5,
        name:'XYZ',
        designation:'BIT',
        istoggle:false,
    },
    {
        id:6,
        name:'XYZ',
        designation:'BIT',
        istoggle:false,
    },
    {
        id:7,
        name:'XYZ',
        designation:'BIT',
        istoggle:false,
    },
    {
        id:8,
        name:'XYZ',
        designation:'BIT',
        istoggle:false,
    },
    {
        id:9,
        name:'XYZ',
        designation:'BIT',
        istoggle:false,
    },
    {
        id:10,
        name:'XYZ',
        designation:'BIT',
        istoggle:false,
    },
    {
        id:11,
        name:'XYZ',
        designation:'BIT',
        istoggle:false,
    }

]

const CreateLeasone = () => {

    const [steper, setsteper] = useState("1")
    const [list, setlist] = useState(data)
    const [newArr, setnewArr] = useState([])
    const [topicname, settopicname] = useState("")
    const [description, setdescription] = useState("")
    const [subject, setsubject] = useState("")
      const [loading, setloading] = useState(false)

    
    function CheckboxHandle(row, index){

        const updatedData = list.map(item => {
           
            if (row.id !== item.id) {
              return item
            }
      
            return {
              ...item,
              istoggle: !item.istoggle
            };
          });

          var TempArr = []
          updatedData.forEach(element =>{
              if(element?.istoggle){
                  TempArr.push(element);
              }
          })
        

          if(TempArr.length > 10){
            toast.error(`You choose maximum 10 members`)
        } else {
            setlist(updatedData)
            setnewArr(TempArr)
        }


      

    }




  return (
    <div className='dashboard-panel'>
        <TopBar/>
        <div className='container-fluid'>
            <Sidebar/>
            <div className='right-comon'>
                <h3 className='page-title mb-4'>Create Leason</h3>
                <div className='d-flex  mb-3 justify-content-between align-items-center'>
                    <div>
                        <h5>Step: {steper} of 2:</h5>
                        {steper == "1" && 
                        <h6>Select Students (You can select upto 10 participants max)</h6>
}
{steper == "2" && 
                        <h6>Define the Lesson Plan</h6>
}
                    </div>
                    {steper == "1" && 
                    <b>{newArr.length} out 10 selected </b>
}
                </div>
                {steper == "1" && 
                <div>
                <ul className='card-list'>
                    {list?.map((item, i)=>{
                        return (
                            <li>
                                <button onClick={()=>CheckboxHandle(item,i)}>
                                    <img src={IMAGE.default}  />
                                    <label>{item?.name}</label>
                                    <span>{item?.designation}</span>
                                    {item?.istoggle && 
                                           <i className="fa-solid fa-square-check"></i>
                                    }
                             
                                </button>
                             </li>
                        )
                    })}
                  
                </ul>

                <div className='text-right'>
                    <button className='btn btn-primary' onClick={()=>setsteper("2")}>Continue</button>
                </div>

                </div>
}
{steper == "2" && 
  <div className='row mt-3'>
      
      <div className='col-lg-6'>
          <div className='form-group'>
              <label>Topic Name <span style={{color:'red'}}>*</span></label>
              <input type='text' className='form-control' placeholder='Topic Name'
                value={topicname}
                onChange={(e)=>settopicname(e.target.value)}
              />
          </div>
      </div>
      <div className='col-lg-6'>
          <div className='form-group'>
              <label>Subject<span style={{color:'red'}}>*</span></label>
                <select className='form-control' value={subject} onChange={(e)=>setsubject(e.target.value)}>
                    <option>Subject 1</option>
                    <option>Subject 1</option>
                    <option>Subject 1</option>
                </select>
          </div>
      </div>
      <div className='col-lg-12'>
          <div className='form-group'>
              <label>Describe the Topic <sub>(In 200 words max)</sub><span style={{color:'red'}}>*</span></label>
              <textarea className='form-control' placeholder='Describe'
               value={description}
               onChange={(e)=>setdescription(e.target.value)}
              ></textarea>
              
          </div>
      </div>

      <div className='col-lg-12 text-right'>
        <button className='btn btn-warning mr-2' onClick={()=>setsteper("1")}>Prev</button>
      <button className='btn btn-primary'>
          {loading ? 
          <>
           <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
           <span className="visually-hidden">Loading...</span>
          </>
          :
          'Submit'
      }
            
          
      </button>
      </div>
   </div>

}
            </div>
        </div>
    </div>
  )
}

export default CreateLeasone