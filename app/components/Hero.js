import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=' flex  flex-col-reverse  mt-20 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 '>
    <div className='col-span-1 md:col-span-2 lg:col-span-2'>
        <p className='  text-3xl font-bold mt-10 md:w-[65%] lg:w-[65%] '>
        <span className='text-[#14B082]'>Design</span>
        , <span className='text-[#14B082]'>manage</span> and <span className='text-[#14B082]'>track</span> your QR on a single platform.
        </p>
        <p className='text-sm mt-6 md:w-[50%] lg:[50%] text-[#12141D]'>
        We present you the easiest, most useful and fastest way to manage your QR codes.
        </p>
        <div className='bg-[#14B082] text-whtie  p-2 mt-6 inline-block text-white rounded-md px-10 cursor-pointer'>
            Design your QR {"->"}
        </div>
        <Image className='mt-10'
        src='/reviews.png'
        width='300'
        height='300'

        />
    </div>
    
    <Image
        src='/heroImg.png' 
        width='400'
        height='400'
        alt='me'
      />       

     
    </div>
  );
};

export default Hero;
