import Image from 'next/image';
import React from 'react';

const Places = () => {
  return (
    <div className='shadow-md cursor-pointer hover:border border-green-500 p-2 w-full'>
      <div className='text-center'>
        <Image
          src='/Menu.png'
          width={55}
          height={55}
          className='bg-[#C8E7DE] mx-auto p-3 rounded-full'
          alt='Restaurant'
        />
      </div>
      <p className='font-light text-sm text-center mt-2'>Restaurant</p>
    </div>
  );
};

export default Places;
