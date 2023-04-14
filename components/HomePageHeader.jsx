import Image from "next/image";
import React from "react";





const HomePageHeader = () => {
	return (
		<div className='flex justify-between mt-[24px] md:mt-[32px] mx-[16px] md:mx-[80px] py-[16px]'>
			<Image src='./images/EG Logo.svg' width={64} height={40} alt='EG Logo' />

			<div className='hidden md:flex'>
				<ul className='flex gap-[52px] leading-[22px] font-[18px] tracking-[0.5px] '>
					<li>Resume</li>
					<li>Works</li>
					<li>About Me</li>
				</ul>
			</div>
			<Image
				src='/images/menu.svg'
				width={32}
				height={32}
				className='block md:hidden'
				alt='menu'
			/>
		</div>
	);
};

export default HomePageHeader;
