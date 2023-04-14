import React from 'react'
import LeftSideWorks from './LeftSideWorks'

const Works = () => {
  return (
    <div className='bg-[#111821]  overflow-scroll scroll-hidden pb-2 relative h-[100vh]'>
        <h1 className='sticky top-[80px] text-right pr-[80px] text-[18px] leading-[22px] tracking-[0.5px] hidden md:block text-[#EAE8E4] '>Selected works & Exploration </h1>
        <LeftSideWorks />
    </div>
  )
}

export default Works