import axios from 'axios';
import React, { useState } from 'react'

const Demo = () => {

    const [search, setsearch] = useState("")
    const [result, setresult] = useState([])






    async function SearchHandle() {
     

            let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://pam-stilling-feed.nav.no/api/v1/feed?last=${search}`,
            headers: { 
               'Authorization': 'Bearer scdvfb'
            }
            };

            axios.request(config)
            .then((response) => {
                console.log(response.data?.hits
                )
               setresult(response.data?.hits)
          
            })
            .catch((error) => {
            console.log(error);
            });
                }


  return (
    <div className='container mt-4'>

            <div className='search d-flex'>
                <input type='text' className='form-control' placeholder='Search jobs' value={search} onChange={(e)=>setsearch(e.target.value)} />
                <button className='btn btn-primary' onClick={SearchHandle}>Search</button>
            </div>

            {result?.length > 0 ?

result?.map((item)=>{
    return (
        <div className='card my-3'>
            <div className='card-header'>

            <h5>{item?.headline}</h5>
            </div>

            <div className='card-body'>
                <img src={item?.logo_url} />
            <h6>{item?.last_publication_date}</h6>
            <div dangerouslySetInnerHTML={{__html: item?.description?.text_formatted}}></div>
            </div>
        </div>
    )
})

              

                    :

                    <h3>No result</h3>
                
        }

    </div>
  )
}

export default Demo