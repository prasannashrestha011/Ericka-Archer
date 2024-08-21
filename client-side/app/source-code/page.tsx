import React from 'react'
import Snippets from '../component/SourceCodeCmps/Snippets'

const SourceCode = () => {
  return (
    <div
    className=' h-full bg-gray-900'
    >
     
      <div className='
      flex flex-col justify-center items-center  w-11/12 mx-auto'>
        <Snippets/>
        </div>
    </div>
  )
}

export default SourceCode
