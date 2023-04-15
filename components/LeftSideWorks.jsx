import Image from "next/image";
import React from "react";
import { WorksData } from "../Data";

const LeftSideWorks = () => {
	return (
		<div className='flex flex-col space-y-[72px] md:space-y-[90px] px-[16px] md:px-[80px]'>
			{WorksData.map((work)=> (
                <div className='flex gap-[32px] md:gap-24 items-center' key={work.number}>
				<Image
					src={work.image}
					width={360}
					height={312}
					alt={work.name}
                    className="work-border hidden md:block"
				/>

                <Image
					src={work.image}
					width={156}
					height={196}
					alt={work.name}
                    className="work-border md:hidden block !h-[196px]"
				/>
				<div className='flex flex-col gap-[16px] md:gap-[24px] '>
					<div className="flex flex-col gap-[8px] md:gap-[4%]">
                    <div className='flex items-center gap-[4px] md:gap-[8px] '>
						<span className='flex items-center justify-center rounded-full h-[24px] w-[24px] md:h-[32px] md:w-[32px] p-2 border border-[#EAE8E4] text-[#EAE8E4] text-[12px] md:text-[16px] tracking-[0.5px] font-lyt  '>
							{work.number}
						</span>
						<hr className='bg-[#EAE8E4] w-[44px] md:w-[81px]  ' />
						<span className='flex items-center justify-center rounded-full h-[24px] w-[24px] md:h-[32px] md:w-[32px] p-2 border border-[#EAE8E4]  text-[#EAE8E4] text-[12px] md:text-[16px] tracking-[0.5px] font-lyt'>
							06
						</span>
					</div>

					<h1 className=' text-[24px] md:text-[40px] xl:text-[70px] text-[#EAE8E4] leading-[60px] tracking-[2.5px] '>
						{work.name}
					</h1>
                    </div>
					<a
						href={work.href}
						className='text-[#DE3F3B] text-[16px] md:text-[24px] leading-[24px] md:leading-[29px] tracking-[0.5px]'
					>
						View
					</a>
				</div>
			</div>
            ))}
		</div>
	);
};

export default LeftSideWorks;
