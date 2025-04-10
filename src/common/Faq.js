import React, { useEffect, useState } from 'react'
import { IMAGE } from '../utils/theme'
import { GetFaq } from '../utils/Apirequest'
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Faq = () => {
  const [key, setKey] = useState('home');
  const [faqList, setfaqList] = useState([])

    async function getApi(params) {
        const response = await GetFaq()

        if(response?.success){
          setfaqList(response?.data?.faq_categories)
          setKey(response?.data?.faq_categories?.[0]?.id)
        }
    }

    useEffect(()=>{
        getApi()
    },[])


  return (
    <div className='container py-5 faq-sec'>
   
           <div className='logo'>
               <img src={IMAGE.logo} />
           </div>
           <h3>FAQ</h3>

           <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      {faqList?.map((item, i)=>{
        return (
          <Tab eventKey={item?.id} title={item?.name}>
              <Accordion defaultActiveKey="0">
              {item?.faqs?.map((faqs, index)=>{
                return (
                  <Accordion.Item eventKey={index}>
                  <Accordion.Header>{faqs?.question}</Accordion.Header>
                  <Accordion.Body>
                   {faqs?.answer}
                  </Accordion.Body>
                </Accordion.Item>
                )
              })
}  
   
   
    </Accordion>
        </Tab>
        )
      })}
   
   
    </Tabs>

       
       
      
   </div>
  )
}

export default Faq