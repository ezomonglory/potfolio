import Image from "next/image";
import React from "react";





const HomePageHeader = () => {
	return (
		<div className='flex justify-between mt-[8px] md:mt-[32px] mx-[16px] md:mx-[80px] py-[16px]'>
			<Image src='./images/EG Logo.svg' width={64} height={40} alt='EG Logo' className="hidden sm:hidden lg:block" />

            <Image src='./images/EG Logo.svg' width={47} height={28} alt='EG Logo' className="block lg:hidden " />

            {/* <Image src='./images/EG Logo.svg' width={28} height={24} alt='EG Logo' className="block sm:hidden" /> */}

			<div className='hidden md:flex'>
				<ul className='flex gap-[52px] leading-[22px] tracking-[0.5px] text-[16px] '>
					<li>Resume</li>
					<li>Works</li>
					<li>About Me</li>
				</ul>
			</div>
			<Image
				src='/images/menu.svg'
				width={28}
				height={28}
				className='block md:hidden'
				alt='menu'
			/>
		</div>
	);
};

export default HomePageHeader;
