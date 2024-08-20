
import { Button } from '@nextui-org/react'
import React from 'react'
import EmblaCarouse from './EmblaCarousel/EmblaCarousel'
import handleDownload from './Downloadzip/DownloadZip'
import DownloadBtn from './Downloadzip/DownloadBtn'

const CenterImage:React.FC = () => {
  return (
    <div className='flex justify-center items-center flex-col lg:mt-0 mt-5 gap-4 mb-0  '>
      <EmblaCarouse/>
     <DownloadBtn/>
    </div>
  )
}

export default CenterImage
