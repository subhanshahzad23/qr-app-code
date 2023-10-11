import React from 'react'


const navbar = () => {
  return (
    <div className='flex justify-between items-center mt-10'>
        <span>Logo</span>
        <ul className='flex justify-center items-center gap-5'>
            <li>Pricing</li>
            <li>FAQ's</li>
            <li>Contact</li>
        </ul>
        <div className='bg-[#14B082] text-whtie  p-2 mt-6 inline-block text-white px-10 rounded-lg cursor-pointer'>
            Login
        </div>
       
    </div>
  )
}

export default navbar