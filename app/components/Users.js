import Image from 'next/image'
import React from 'react'

const Users = () => {
  return (
    <div className='shadow-lg p-2'>
    <div className='flex item-center gap-3 mb-3'>
        <Image style={{borderRadius:'90px'}} className=''
            src='/userPic.png' width='70' height='70'
        />
        <div className='flex flex-col gap-1 mt-3'>
        <p className='font-bold'>Mila McSabbu</p>
        <p className='font-light text-sm'>Freelance Designer</p>
        </div>
      
    </div>
    <p className='text-sm p-3'>“We were blown away when we saw Mixland. The combination of social, email, knowledge base, mobile, ets.”</p>
    </div>
  )
}

export default Users