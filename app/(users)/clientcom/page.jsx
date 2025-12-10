"use client"


import React, { useEffect, useState } from 'react'

 const URL = 'https://jsonplaceholder.typicode.com/posts' ; 
  

export default function ClientComp () {

    const[postData,setPostData] = useState([])

    useEffect(()=>{
          const fetchData = async () => {
             const res = await fetch(URL);
             const data = await res.json();
             console.log(data);
             setPostData(data)

             return data
    }
        fetchData()
    },[])
  return (
    <div>
        <h1>Client Comp</h1>
        <button className='bg-amber-500 text-black p-5' 
      onClick={() => alert('hi')}
      >Click Me</button>

      <ul className='grid grid-cols-3 gap-5'>
            {
                postData.map((currElem, index) => {
                    return <li key={index}>{currElem.body}</li>
                })
            }
      </ul>
    </div>
  )
}
