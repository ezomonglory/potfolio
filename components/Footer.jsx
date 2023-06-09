import React from 'react'
import FooterBottom from './FooterBottom'
import FooterMid from './FooterMid'
import FooterTop from './FooterTop'

const Footer = ({setNewTop}) => {

    const scroll = () => {
            setNewTop(3)            
    }

  return (
    <div className='overflow-hidd pb-4 h-full' onWheel={scroll}>
        <FooterTop />
        <FooterMid />
        <FooterBottom/>
    </div>
  )
}

export default Footer