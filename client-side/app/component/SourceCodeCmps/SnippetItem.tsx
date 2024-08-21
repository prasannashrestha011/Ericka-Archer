"use client"
import React, { lazy, useEffect, useState } from 'react'
import { sourceCodeType } from '@/app/data/Data'
import { Spinner } from '@nextui-org/spinner';
const SnippetItem:React.FC<{sourceCodeData:sourceCodeType[]}> = ({sourceCodeData}) => {
    const [loading,SetLoading]=useState<boolean>(true);
    const handleImageLoad=()=>{

        SetLoading(false)
    }
    useEffect(()=>{
        handleImageLoad()
    },[loading])
  return (
    <div>
    {loading?
    <div className='h-screen flex justify-center items-center'>
<Spinner/>
    </div>
    :
    (
        <ul>
        {sourceCodeData.map((data,idx)=>(
          <li key={idx} className='flex flex-col justify-center items-center text-slate-100 lg:w-11/12 mx-auto p-2 lg:p-0' >
            <div className='font-bold lg:text-xl'>{data.title}</div>
            <div className='lg:w-6/12'>
           
              <img src={data.snippetImg} 
              onLoad={()=>{
                console.log("image loaded")
                handleImageLoad()
              }}
              className={`${loading?'opacity-0':'opacity-100'}`}
              draggable="false"/>
            </div>
            <div className='font-semibold lg:w-9/12 lg:text-medium pb-4 text-slate-100 text-sm'>
            {data.description}
            </div>
          </li>
        ))}
      </ul>
    )    
}
    </div>
  )
}

export default SnippetItem
