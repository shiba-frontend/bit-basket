import React, { useState } from 'react'
import TopBar from '../common/TopBar'
import Sidebar from '../common/Sidebar'
import { IMAGE } from '../utils/theme'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

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

const ParticipantList = () => {

    const [list, setlist] = useState(data)
    const [newArr, setnewArr] = useState([])

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
                <h3 className='page-title mb-4'>Select Participant</h3>
              
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
                    <NavLink to="/leason-plan" className='btn btn-primary mr-2'>View Lesson Plan</NavLink>
                    <NavLink className='btn btn-warning'>Chat</NavLink>
               
                </div>

                </div>


            </div>
        </div>
  
  )
}

export default ParticipantList