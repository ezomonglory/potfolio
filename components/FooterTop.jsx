import Image from "next/image";
import React from "react";

const FooterTop = () => {
	return (
		<div className=' flex flex-col lg:flex-row gap-[20px] lg:gap-[132px] px-[20px] lg:px-[80px] items-center justify-center'>
			{/* <Image
				src='/images/vector-logo.png'
				width={439}
				height={488}
				alt='profile picture'
				className='hidden md:block'
			/> */}
            <div className="w-[70%] sm:w-[300px]  lg:w-[40%] mx-auto h-[350px] lg:h-[488px] rounded-md overflow-hidden " style={{
                backgroundImage:"url(/images/vector-logo.png)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"contain",
                backgroundPosition:"contain",
            }}>

            </div>

			{/* <Image
				src='/images/EG PROFILE PICTURE 1.svg'
				width={199}
				height={201}
				alt='profile picture'
				className='md:hidden block !h-[201px]'
			/> */}
			<div className='flex flex-col space-y-[16px] md:space-y-[24px] w-full md:w-[50%] items-start '>
				<div className='flex flex-col space-y-[4px] md:space-y-[6px] border-2 border-transparent border-b-gray-400 pb-[16px]'>
					<h1 className='text-[24px] md:text-[32px] leading-[35px] tracking-[0.5px] font-[500] text-[#111821] '>
						About
					</h1>

					<p className=' md:text-[20px] leading-[32px] md:leading-[40px] tracking-[1px] text-[#252C35]  '>
						I am Ezomon Glory, a lagos, Nigerian based developer who uses
						different tools to provide human friendly, digital and interactive
						website experience for users.
					</p>
				</div>

				<div className='flex flex-col space-y-[4px] md:space-y-[6px] border-2 border-transparent border-b-gray-400 pb-[16px]'>
					<h1 className='text-[24px] md:text-[32px] leading-[35px] tracking-[0.5px] font-[500] text-[#111821] '>
						Frontend Skills
					</h1>

					<p className=' md:text-[20px] leading-[32px] md:leading-[40px] tracking-[1px] text-[#252C35]  '>
						HTML, CSS, JavaScript, React, Nextjs, Typescript, Sass,Bootstrap,
						Tailwindcss e.t.c
					</p>
				</div>

				<div className='flex flex-col  h-full'>
					<h1 className='text-[24px] md:text-[34px] leading-[48px] tracking-[0.5px] font-[500] text-[#111821] '>
						Resume
					</h1>

					<button className='bg-red px-8 py-1 mt-[16px] text-white rounded-[32px] text-[16px] md:text-[24px] font-md'>
						Download
					</button>
				</div>
			</div>
		</div>
	);
};

export default FooterTop;
