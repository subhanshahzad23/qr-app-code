import React from 'react';
import Image from 'next/image';

const FreeTrial = () => {
  return (
    <div className=' flex  flex-col-reverse  mt-20 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 '>
    <div className='col-span-1 md:col-span-2 lg:col-span-2'>
        <p className='  text-3xl font-bold mt-10 md:w-[65%] lg:w-[65%] '>
        Start you free trial
        </p>
        <p className='text-sm mt-6 md:w-[50%] lg:[50%] text-[#12141D] space-x-0'>
        Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.
        </p>
        <div className='bg-[#14B082] text-whtie  p-2 mt-6 inline-block text-white rounded-md px-10 cursor-pointer'>
            Get Started
        </div>
    </div>
    
    <Image className='z-10'
        src='/trial.png' 
        width='300'
        height='300'
        alt='me'
      />       
    <Image className='absolute left-[47%]'
        src='/frankyArrow.png' 
        width='300'
        height='300'
        alt='me'
      />       

     
    </div>
  );
};

export default FreeTrial;
