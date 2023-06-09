import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const FooterMid = () => {

    const textRef = useRef()    
    if (typeof window !== "undefined"){
        const text = document.getElementById("text")
        setInterval(()=>{
            text.textContent += "Got a gig for me? Hit me up."
        }, 100)
        

        const textMobile = document.getElementById("textMobile")
        setInterval(()=>{
            textMobile.textContent += "Got a gig for me? Hit me up."
        }, 100) 

  
    }
      
  return (
    <div className='flex flex-col space-y-[8px] mt-[10px] overflow-x-hidden '>
        <marquee width="100%" height="140px" className="text-[80px] font-md  leading-[140.5px] tracking-[1px] text-[#4d545d67] hidden md:block" direction="right" behaviour="scroll" scrollamount="20" hspace="20">
        <span ref={textRef} id="text">Got a gig for me? Hit me up.Got a gig for me? Hit me up.Got a gig for me? Hit me up.Got a gig for me? Hit me up.Got a gig for me? Hit me up.</span> 
        </marquee>  

         <marquee width="100%" height="50px" className="block md:hidden text-[40px] leading-[48px] md:text-[117px] font-md  md:leading-[140.5px] tracking-[1px] text-[#4d545d67]" direction="right" behaviour="scroll" scrollamount="10" hspace="20">
        <span id="textMobile">Got a gig for me? Hit me up.Got a gig for me? Hit me up.Got a gig for me? Hit me up.Got a gig for me? Hit me up.Got a gig for me? Hit me up.Got a gig for me? Hit me up.Got a gig for me? Hit me up.Got a gig for me? Hit me up.Got a gig for me? Hit me up.Got a gig for me? Hit me up.</span> 
        </marquee>    
		<div className='footerLine h-[50px] w-screen -ml-2'></div>
        
        </div>
  )
}

export default FooterMid