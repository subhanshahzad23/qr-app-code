import Image from 'next/image';
import React from 'react';

const Features = ({ image, title, content }) => {
  return (
    <div className='flex flex-col md:flex-row md:items-center md:space-x-4 mt-10 '>
      <div className='w-20 md:w-40'>
        <Image src={image} height='70' width='70' />
      </div>
      <div>
        <h5 className='font-bold text-lg '>{title}</h5>
        <p className='text-[#12141D] text-sm '>{content}</p>
      </div>
    </div>
  );
};

export default Features;
