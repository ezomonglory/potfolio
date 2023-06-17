import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { WorksData, WorksImage, WorksText } from "../Data";
import { motion } from "framer-motion";

const LeftSideWorks = () => {
	// let newCount = count + 1;
	// let newbottomCount = bottomCount + 5
	// if (count <= 0) {
	// 	newCount = 1;
	// }

	// if (count >= 5) {
	// 	newCount = 5;
	// }

	// if (bottomCount <= 0) {
	//     newbottomCount = 5;
	// }
	// if (bottomCount === 1) {
	//     newbottomCount = 4;
	// }

	// if (bottomCount === 2) {
	//     newbottomCount = 3;
	// }

	// if (bottomCount === 3) {
	//     newbottomCount = 2;
	// }
	// if (bottomCount === 4) {
	//     newbottomCount = 1;
	// }
	// if (bottomCount >= 5) {
	//     newbottomCount = 0;

	// }

	return (
		<motion.div
			className='absolute animation h-full topAnimation w-full'
			style={{
				top: "0",
			}}
		>

			<div className='flex flex-col space-y-[64px]  md:space-y-[90px] lg:pl-[80px] px-[20px] '>
				{WorksData.map((work, i) => (
					<div
						className={`flex gap-x-[32px] work-space-img lg:gap-[72px] items-center `}
						key={work.number}
						id={work.id}
					>

	                <div
							className={` w-[190px] h-[200px] md:w-[400px] md:h-[300px] relative overflow-hidden `}
							style={{
								backgroundImage: `url${work.image}`,
							}}
						>
							<motion.div
								initial={{ top: "0%" }}
								whileInView={{ top: "-100%" }}
								viewport={{ once: true }}
								className='absolute top-[0%]  bg-[#111821] right-0 h-full w-full overlayAnimation'
							></motion.div>
							{/* <Image
							src={work.image}
							width={480}
							height={200}
							alt={work.name}
							className={` ${
								"work-border hidden md:block h-[300px] animation t-0"
								// newCount === i
								// 	? "work-border hidden md:block"
								// 	: "opacity-20 work-border hidden md:block fade "
							}`}
						/> */}
						</div>

	                    <motion.div
							className="flex flex-col justify-center px-[2rem]  gap-[16px] md:gap-[24px] relative overflow-hidden opacityAnimation items-end"
	                        	// newbottomCount === i
								// 	? "flex flex-col justify-center pl-[2rem] sm:pl-0 gap-[16px] md:gap-[24px]  h-[331px]"
								// 	: "fade justify-center opacity-10 flex flex-col pl-[2rem] sm:pl-0 gap-[16px] md:gap-[24px]  h-[331px]"
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
							key={i}
						>                           

							<div className='flex flex-col gap-[0px] md:gap-[4%] items-end'>
								<div className='flex items-center gap-[4px] md:gap-[8px]  text-[#EAE8E4]'>
									{/* <span className='flex items-center justify-center rounded-full h-[24px] w-[24px] md:h-[32px] md:w-[32px] p-2 border border-[#EAE8E4] text-[#EAE8E4] text-[12px] md:text-[16px] tracking-[0.5px] font-lyt  '>
										{work.number}
									</span>
									{/* <hr className='bg-[#EAE8E4] w-[44px] md:w-[81px]  ' /> */}
									{/* <span className='flex items-center justify-center rounded-full h-[24px] w-[24px] md:h-[32px] md:w-[32px] p-2 border border-[#EAE8E4]  text-[#EAE8E4] text-[12px] md:text-[16px] tracking-[0.5px] font-lyt'>
										06
									</span>  */}
	                                {work.number}/5
								</div>

								<h1 className=' text-[24px] md:text-[40px]  text-[#EAE8E4] leading-[50px] md:leading-[60px] tracking-[2.5px] '>
									{work.name}
								</h1>
							</div>
							<a
								href={work.href}
								className='text-[#DE3F3B] text-[16px] md:text-[24px] leading-[24px] md:leading-[29px] tracking-[0.5px] font-md'
							>
								View
							</a>
						</motion.div>

						{/* <Image
							src={work.image}
							width={200}
							height={296}
							alt={work.name}
							className={` ${
								// newCount + 1 === i
								// 	? "work-border md:hidden block"
								// 	: "opacity-20 work-border md:hidden block fade "
								"work-border md:hidden block"
							}`}
						/> */}
					</div>
				))}
			</div>

			{/* <div
				className='flex flex-col flex-grow w-[50%]  space-y-[72px] md:space-y-[90px]  absolute right-0  animation '
				style={{
					bottom: "-250px",
				}}
			>
				{WorksText.map((work, i) => (
					<div
						className={`${
							// newbottomCount === i
							// 	? "flex flex-col justify-center pl-[2rem] sm:pl-0 gap-[16px] md:gap-[24px]  h-[331px]"
							// 	: "fade justify-center opacity-10 flex flex-col pl-[2rem] sm:pl-0 gap-[16px] md:gap-[24px]  h-[331px]"
							"flex flex-col justify-center px-[2rem]  gap-[16px] md:gap-[24px]  h-[331px]"
						}`}
						key={i}
					>
						<div className='flex flex-col gap-[0px] md:gap-[4%]'>
							<div className='flex items-center gap-[4px] md:gap-[8px] '>
								<span className='flex items-center justify-center rounded-full h-[24px] w-[24px] md:h-[32px] md:w-[32px] p-2 border border-[#EAE8E4] text-[#EAE8E4] text-[12px] md:text-[16px] tracking-[0.5px] font-lyt  '>
									{work.number}
								</span>
								<hr className='bg-[#EAE8E4] w-[44px] md:w-[81px]  ' />
								<span className='flex items-center justify-center rounded-full h-[24px] w-[24px] md:h-[32px] md:w-[32px] p-2 border border-[#EAE8E4]  text-[#EAE8E4] text-[12px] md:text-[16px] tracking-[0.5px] font-lyt'>
									06
								</span>
							</div>

							<h1 className=' text-[24px] md:text-[40px]  text-[#EAE8E4] leading-[50px] md:leading-[60px] tracking-[2.5px] '>
								{work.name}
							</h1>
						</div>
						<a
							href={work.href}
							className='text-[#DE3F3B] text-[16px] md:text-[24px] leading-[24px] md:leading-[29px] tracking-[0.5px] font-md'
						>
							View
						</a>
					</div>
				))}
			</div> */}
		</motion.div>
	);

	// return (
	// 	<div className='flex w-full h-full relative'>
	// 		<div className='w-[30%] flex flex-col space-y-[72px]  md:space-y-[90px]  absolute top-0 items-center'>
	// 			{WorksImage.map((image, i) => (
	// 				<div
	// 					className={` w-[400px] h-[300px] relative overflow-hidden `}
	// 					style={{
	// 						backgroundImage: `url${image.image}`,
	// 					}}
	// 					key={i}
	// 				>
	// 					<motion.div
	// 						initial={{ top: "0%" }}
	// 						whileInView={{ top: "-100%" }}
	// 						viewport={{ once: true }}
	// 						className='absolute top-[0%]  bg-[#111821] right-0 h-full w-full overlayAnimation'
	// 					></motion.div>
	// 				</div>
	// 			))}
	// 		</div>

	// 		<div className='w-[68%] flex flex-col space-y-[72px]  md:space-y-[90px]  absolute bottom-[360px] right-0 bg-rd'>
	// 			{WorksText.map((work, i) => (
	// 				<motion.div
	// 					className='flex flex-col  justify-center px-[2rem]  gap-[16px] bg-red md:gap-[24px]  w-[400px] h-[300px] opacityAnition'						
	// 					key={i}
	// 				>
	// 					<div className='flex flex-col gap-[0px] md:gap-[4%]'>
	// 						<div className='flex items-center gap-[4px] md:gap-[8px]  text-[#EAE8E4]'>								
	// 							{work.number}/5
	// 						</div>

	// 						<h1 className=' text-[24px] md:text-[40px]  text-[#EAE8E4] leading-[50px] md:leading-[60px] tracking-[2.5px] '>
	// 							{work.name}
	// 						</h1>
	// 					</div>
	// 					<a
	// 						href={work.href}
	// 						className='text-[#DE3F3B] text-[16px] md:text-[24px] leading-[24px] md:leading-[29px] tracking-[0.5px] font-md'
	// 					>
	// 						View
	// 					</a>
	// 				</motion.div>
	// 			))}
	// 		</div>
	// 	</div>
	// );
};

export default LeftSideWorks;
