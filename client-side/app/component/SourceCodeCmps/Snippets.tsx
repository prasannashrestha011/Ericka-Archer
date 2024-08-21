import React from 'react'
import { sourceCodeData } from '@/app/data/Data';
import { Spinner } from '@nextui-org/spinner';
import SnippetItem from './SnippetItem';
const Snippets:React.FC = () => {
  return (
    <div className='w-4/5' >
     <SnippetItem
     sourceCodeData={sourceCodeData}
     />
     
    </div>
  )
}

export default Snippets;

