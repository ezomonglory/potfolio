import Image from "next/image";
import React from "react";

const FooterTop = () => {
	return (
		<div className=' flex flex-col md:flex-row justify-between items-center pl-[16px] md:px-[80px] mt-[64px] md:mt-[176px] gap-[15px] md:gap-0 '>
			<Image
				src='/images/EG PROFILE PICTURE 1.svg'
				width={304}
				height={299}
				alt='profile picture'
				className='hidden md:block'
			/>

			<Image
				src='/images/EG PROFILE PICTURE 1.svg'
				width={199}
				height={201}
				alt='profile picture'
				className='md:hidden block !h-[201px]'
			/>
			<div className='flex flex-col space-y-[16px] md:space-y-[32px] w-full md:w-[50%] items-start'>
				<div className='flex flex-col space-y-[4px] md:space-y-[6px]'>
					<h1 className='text-[24px] md:text-[40px] leading-[48px] tracking-[0.5px] font-[500] text-[#111821] '>
						About me
					</h1>

					<p className=' md:text-[24px] leading-[24px] md:leading-[40px] tracking-[1px] text-[#252C35]  '>
						I am Ezomon Glory, a lagos, Nigerian based developer who uses
						different tools to provide human friendly, digital and interactive
						website experience for users.
					</p>
				</div>

				<button className='text-[#DE3F3B] py-[8px] px-[16px] md:p-[16px] w-[161px] h-[40px] md:w-[221px] md:h-[61px] flex items-center justify-center border border-[#DE3F3B] rounded-[32px] text-[16px] md:text-[24px] font-md'>
					Download Resume
				</button>
			</div>
		</div>
	);
};

export default FooterTop;
