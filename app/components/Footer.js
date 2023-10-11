import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#212827] mt-10 '>
    <div style={{
        paddingLeft:'90px',paddingRight:'90px'
    }} className='grid grid-cols-2 items-center   '>
    <h1 className='text-white text-xl font-bold'>Logo</h1>
    <div>
        <ul className='text-white mt-14'>
            <li className='p-5'> <span> Address:  </span> 8502 Preston Rd. Inglewood, Maine 98380, USA</li>
            <li className='p-5'> <span>Mail: </span> qr@walid.com</li>
        </ul>
    </div>
    </div>
<hr />
<div>
    <ul className='flex gap-10 p-10 text-white'>
    <li>Pricing</li>
    <li>FAQ's</li>
    <li>Contact</li></ul>
</div>
    </div>
  )
}

export default Footer