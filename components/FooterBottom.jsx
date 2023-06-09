import React from "react";
import Link from "next/link";

const FooterBottom = () => {
	return (
		<div className=' pl-[16px] md:px-[80px] md:mt-[4rem] '>            
			<div className='flex flex-col md:flex-row gap-[24px] justify-between md:border-t-[#4D545D] md:border md:border-transparent md:pt-[32px]'>
				<div className='flex flex-col md:flex-row gap-[24px] md:gap-[56px] justify-between '>
					<Link
						href='#'
						className='md:text-[18px] leading-[21.5px] tracking-[0.5px] text-[#111821] font-md '
					>
						Linkedin
					</Link>
					<Link
						href='#'
						className='md:text-[18px] leading-[21.5px] tracking-[0.5px] text-[#111821] font-md '
					>
						Github
					</Link>
					<Link
						href='#'
						className='md:text-[18px] leading-[21.5px] tracking-[0.5px] text-[#111821] font-md '
					>
						Email me
					</Link>
				</div>

				<div>
					<Link
						href='#'
						className='md:text-[18px] leading-[21.5px] tracking-[0.5px] text-[#111821] font-md align-center flex justify-center '
					>
						Designed by David
					</Link>
				</div>
			</div>

        
		</div>
	);
};

export default FooterBottom;
