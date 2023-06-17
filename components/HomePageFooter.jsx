import Image from "next/image";
import React, {useRef} from "react";


const HomePageFooter = ({scroll}) => {
    const mainRef = useRef()


	return (
		<div ref={mainRef} className='flex flex-col space-y-[16px] items-center justify-center overflow-y-hidden absolute  bottom-[12px] lg:-mt-4 w-full cursor-pointer bounce' 
        onClick={()=> {
            scroll(1, mainRef.current.clientHeight)
        }}
        >
			<h1 className='text-[18px] leading-[22px] text-center tracking-[0.5px] text-[#252C35] '>
				Scroll down to view some cool stuff!
			</h1>

			<Image src="/images/Frame 59.svg" alt="frame" height={40} width={40} className="w-[40px] h-[40px] animate-bounce " />
		</div>
	);
};

export default HomePageFooter;
