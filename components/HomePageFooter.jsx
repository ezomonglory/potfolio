import Image from "next/image";
import React from "react";

const HomePageFooter = () => {
	return (
		<div className='flex flex-col space-y-[2%] items-center justify-center overflow-y-hidden'>
			<h1 className='text-[18px] leading-[22px] tracking-[0.5px] text-[#252C35] '>
				Let’s check out some cool stuff!
			</h1>

			<svg
				width='2'
				height='109'
				viewBox='0 0 2 109'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='leading'
			>
				<path d='M1 1L0.517489 188.999' stroke='#4D545D' stroke-opacity='0.8' />
			</svg>

			<svg
				width='3'
				height='201'
				viewBox='0 0 3 201'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
                className="max-leading"
			>
				<path
					d='M2.2832 1L0.999928 500.998'
					stroke='#4D545D'
					stroke-opacity='0.8'
				/>
			</svg>
		</div>
	);
};

export default HomePageFooter;
