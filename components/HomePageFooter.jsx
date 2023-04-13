import Image from "next/image";
import React from "react";

const HomePageFooter = () => {
	return (
		<div className='flex flex-col space-y-[48px] items-center justify-center mt-[48px]'>
			<h1 className='text-[18px] leading-[22px] tracking-[0.5px] text-[#252C35] '>
				Let’s check out some cool stuff!
			</h1>

			<svg
				width='2'
				height='189'
				viewBox='0 0 2 189'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M1 1L0.517489 188.999' stroke='#4D545D' stroke-opacity='0.8' />
			</svg>
		</div>
	);
};

export default HomePageFooter;
