import React from 'react'
import Users from './Users'

const Testimonials = () => {
  return (
    <div >
    <h1 className='text-center font-semibold text-3xl'>Our blessed clients said <br /> about their experience</h1>

    <div className='grid grid-cols-3 gap-5 mt-10'>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
    </div>
    </div>
  )
}

export default Testimonials