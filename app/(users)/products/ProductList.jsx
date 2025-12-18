"use client"

import { useSearchParams } from 'next/navigation'
import React from 'react'

const ProductList = () => {

   const searchParams =  useSearchParams() ;
   
   const pages = searchParams.get('page');
   const category = searchParams.get('category');
   const entries = Object.fromEntries(searchParams.entries())

    //use search params
    

   console.log("pages: " , pages);
   console.log("Category: " , category);
   console.log("Entries: " , entries);



   return (
    <div>
        <h1>Client - {category}</h1> 
    </div>
  )
}

export default ProductList