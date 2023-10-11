import Image from 'next/image'
import React from 'react'

const Motivation = () => {
  return (
    <div className='bg-[#14B082] mt-10'>
    <h1 className='text-white text-center font-bold text-3xl p-5'>You’re one step away from creating your own QR</h1>
    
    <Image className='mx-auto mt-10'
    src='/steps.png'
    width='800'
    height='800'
    />
<div  className='text-center mt-5'>
<div className='bg-white text-[#14B082] inline-block p-3 rounded-md mb-10'>
        <p>Design your QR → </p>
    </div>
</div>
   
    </div>
    

  )
}

export default Motivation