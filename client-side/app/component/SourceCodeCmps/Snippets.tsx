import React from 'react'
import { sourceCodeData } from '@/app/data/Data';

const Snippets:React.FC = () => {
  return (
    <div className='w-4/5' >
      <ul>
        {sourceCodeData.map((data,idx)=>(
          <li key={idx} className='flex flex-col justify-center items-center text-slate-100 lg:w-11/12 mx-auto p-2 lg:p-0' >
            <div className='font-bold text-xl'>{data.title}</div>
            <div className='lg:w-6/12'>
              <img src={data.snippetImg} className=' '/>
            </div>
            <div className='font-semibold lg:w-9/12 lg:text-medium pb-4 text-slate-700'>
            {data.description}
            </div>
          </li>
        ))}
      </ul>
     
    </div>
  )
}

export default Snippets;

