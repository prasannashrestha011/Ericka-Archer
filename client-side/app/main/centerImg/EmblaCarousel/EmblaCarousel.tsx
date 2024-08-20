"use client"
import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import './style.css'

const EmblaCarouse:React.FC = () => {
    const [enbleRef,embla_api]=useEmblaCarousel({loop:true});
    const autoPlayRef=useRef<Number|null>();
    const autoPlay=()=>{
      if(!embla_api) return;
      embla_api.scrollNext();
    }
    useEffect(()=>{
     
      autoPlayRef.current=window.setInterval(autoPlay,3000);
    },[embla_api])
  return (
    <div className='embla  lg:w-6/12 w-5/6 flex justify-center items-center ' ref={enbleRef}>
      <div className='embla__container lg:w-96 w-full'>
      <div className="embla__slide">
          <img className='rounded-md '
          src='https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/d9ee7806-2e2c-42d1-8af5-b298b7ac0451.png'
          />
        </div>
        <div className="embla__slide   ">
        <img 
       className=' rounded-md '
      src='https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/ninja.png'
      />
        </div>
        <div className="embla__slide ">
        <img className=' rounded-md '
         src='https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/96e5f906-4490-4224-866f-c0f5c5a94fe5.png'/>
        </div>
       <div className='embla__slide'>
        <img className='rounded-md'
        src='https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/d56ab6a8-5663-4598-9224-7b2cf2e63c5d.png'/>
       </div>
      </div>
  
    </div>
  )
}

export default EmblaCarouse
