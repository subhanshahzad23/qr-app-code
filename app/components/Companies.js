import React from 'react';
import Image from 'next/image';

const Companies = () => {
  return (
    <div className=' flex  flex-col-reverse  mt-20 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 '>
    <div className='col-span-1 md:col-span-2 lg:col-span-2'>
        <p className='  text-3xl font-bold mt-10 md:w-[65%] lg:w-[65%] '>
        Companies trust in QR technology
        </p>
        <p className='text-sm mt-6 md:w-[50%] lg:[50%] text-[#12141D]'>
        From Convenience to Confidence: Embracing QR Technology in Corporate Operations
        </p>
    
    </div>
    
    <Image
        src='/Logos.png' 
        width='400'
        height='400'
        alt='me'
      />       

     
    </div>
  );
};

export default Companies;
