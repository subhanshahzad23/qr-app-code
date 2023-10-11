import React from 'react'
import ServiceBox from './ServiceBox'

const Services = () => {
  return (
    <div className='mt-20'>
        <h3 className='text-2xl font-bold  text-center'>
        Stand out from your competition with
        <br /> MYQR
        </h3>
        <div className='grid grid-cols-2 gap-5 mt-10'>
        <ServiceBox title={'Create your QR unlimited.'} content={'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in.'}></ServiceBox> 
        <ServiceBox title={'Advanced analytics system to optimize your QR codes.'} content={'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in.'} ></ServiceBox>
        <ServiceBox title={'Dynamic QR codes, manage or edit them as you wish.'} content={'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in.'}></ServiceBox>
        <ServiceBox title={'CSV/XLSX data export.'} content={'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in.'}></ServiceBox>
        <ServiceBox title={'Design tool to customize your code.'} content={'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in.'}></ServiceBox>
        <ServiceBox title={'Different formats to download your QR codes.'} content={'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in.'}></ServiceBox>
        </div>
        <div className='text-center'>
        <div className='bg-[#14B082] text-whtie  p-2 mt-6 inline-block text-white rounded-md px-10 cursor-pointer'>
            Design your QR {"->"}
        </div>
        </div>
        
    </div>
  )
}

export default Services