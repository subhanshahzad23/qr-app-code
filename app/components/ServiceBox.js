import Image from 'next/image'
import React from 'react'

const ServiceBox = ({title,content,url}) => {
  return (
    <div className='flex flex-col   gap-2 bg-[#F8FBFD]'>
        <div className='p-4 flex  items-center self-start gap-5'>
       
        <Image
            src='/infinity.png'
            height='40'
            width='40'
        />
         <p className='font-bold space-x-0 w-[70%] text-left'>{title}</p>
        </div>
       
        <div className='flex flex-col gap-2 p-5 '>
        
        <p className='font-light  text-sm'>{content}</p>
        <p className='font-bold cursor-pointer'>Discover More → </p>
        </div>
        
    </div>
  )
}

export default ServiceBox