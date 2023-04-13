import React from 'react'
import FooterBottom from './FooterBottom'
import FooterMid from './FooterMid'
import FooterTop from './FooterTop'

const Footer = () => {
  return (
    <div className='overflow-hidden pb-[40px] h-full'>
        <FooterTop />
        <FooterMid />
        <FooterBottom/>
    </div>
  )
}

export default Footer