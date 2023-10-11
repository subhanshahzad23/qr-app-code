import React from 'react'
import Places from './Places'
import Image from 'next/image'

const Demo = () => {
  return (
    <div>
    <h1 className='font-semibold text-3xl text-center'>Create, manage and analyze your QR</h1>
    <p className='text-center font-light text-sm p-5'>A single QR code can redirect to any kind of digital content, they offer a wide range of options and MYQR <br />
offers them all.</p>
    <div className='flex gap-2 mb-10 mt-10'>
        <Places/>
        <Places/>
        <Places/>
        <Places/>
        <Places/>
        <Places/>
        <Places/>
        <Places/>
        <Places/>
        <Places/>
    </div>
    <div className='grid grid-cols-2 items-center px-10 gap-10 mb-10'>
      <div>
      <span className='bg-green-600 p-2 px-3 rounded-3xl text-white relative top-44 right-6 cursor-pointer'>{'<'}</span>
      <Image
        src='/pizzamob.png'
        width={400} height={400}
      />
      </div>
      
      <div className='w-[70%] '>
        <h1 className='text-2xl font-bold'>Restaurant</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
        <div className='bg-[#14B082] text-whtie  p-2 mt-6 inline-block text-white rounded-md px-10 cursor-pointer'>
            Design your QR {"->"}
        </div>
        <span className='bg-green-600 p-2 px-3 rounded-3xl text-white relative bottom-[90px] left-36 cursor-pointer'>{'>'}</span>
      </div>
    </div>
    </div>
    
  )
}

export default Demo