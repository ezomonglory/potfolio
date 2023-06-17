import Image from "next/image";
import React, { useEffect, useRef } from "react";

const FooterBottom = () => {
	const textRef = useRef();

	if (typeof window !== "undefined") {
	}

	useEffect(() => {
		const text = document.getElementById("text");
		console.log(text);
		setInterval(() => {
			// 	text.innerHTML += ` <p   className=" text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white ">
			//     Got a gig for me? Hit me up
			// </p>
			// <div className=" h-[10px] w-[10px] bg-red rounded-full"> </div>`;
		}, 100);

		// const textMobile = document.getElementById("textMobile");
		// setInterval(() => {
		// 	textMobile.innerText += "Got a gig for me? Hit me up.";
		// }, 100);
	});

	// return (
	// 	<div className=' pl-[16px] md:px-[80px] md:mt-[4rem] '>
	// 		<div className='flex flex-col md:flex-row gap-[24px] justify-between md:border-t-[#4D545D] md:border md:border-transparent md:pt-[32px]'>
	// 			<div className='flex flex-col md:flex-row gap-[24px] md:gap-[56px] justify-between '>
	// 				<Link
	// 					href='#'
	// 					className='md:text-[18px] leading-[21.5px] tracking-[0.5px] text-[#111821] font-md '
	// 				>
	// 					Linkedin
	// 				</Link>
	// 				<Link
	// 					href='#'
	// 					className='md:text-[18px] leading-[21.5px] tracking-[0.5px] text-[#111821] font-md '
	// 				>
	// 					Github
	// 				</Link>
	// 				<Link
	// 					href='#'
	// 					className='md:text-[18px] leading-[21.5px] tracking-[0.5px] text-[#111821] font-md '
	// 				>
	// 					Email me
	// 				</Link>
	// 			</div>

	// 			<div>
	// 				<Link
	// 					href='#'
	// 					className='md:text-[18px] leading-[21.5px] tracking-[0.5px] text-[#111821] font-md align-center flex justify-center '
	// 				>
	// 					Designed by David
	// 				</Link>
	// 			</div>
	// 		</div>

	// 	</div>
	// );

	return (
		<div className='bg-[#111821] flex flex-col space-y-[8px] overflow-x-hidden w-full py-8 '>
			<div className='flex flex-col space-y-[8px] mt-[90px]'>
				<hr className='w-full bg-[#EAE8E4] h-[0.5px]' />

				<hr className='w-full bg-[#EAE8E4] h-[0.5px]' />
				<marquee
					width='100%'
					// height='10px'
					className='hidden md:block'
					direction='right'
					behaviour='scroll'
					scrollamount='20'
					hspace='20'
				>
					<div
						className='flex  items-center gap-4 w-full'
						ref={textRef}
						id='text'
					>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className='h-[10px] w-[95px] bg-red text-red-500 rounded-[50%]'>
							{" "}
							.{" "}
						</div>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className=' h-[10px] w-[10px] bg-red rounded-full'> </div>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className=' h-[10px] w-[10px] bg-red rounded-full'> </div>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className=' h-[10px] w-[10px] bg-red rounded-full'> </div>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className=' h-[10px] w-[10px] bg-red rounded-full'> </div>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className=' h-[10px] w-[10px] bg-red rounded-full'> </div>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className=' h-[10px] w-[10px] bg-red rounded-full'> </div>
					</div>
				</marquee>

				<marquee
					width='100%'
					height='30px'
					className='block md:hidden'
					direction='right'
					behaviour='scroll'
					scrollamount='10'
					hspace='20'
				>
					<div
						className='flex  items-center gap-4 w-full'
						ref={textRef}
						id='text'
					>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className='h-[10px] w-[95px] bg-red text-red-500 rounded-[50%]'>
							{" "}
							.{" "}
						</div>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className=' h-[10px] w-[10px] bg-red rounded-full'> </div>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className=' h-[10px] w-[10px] bg-red rounded-full'> </div>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className=' h-[10px] w-[10px] bg-red rounded-full'> </div>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className=' h-[10px] w-[10px] bg-red rounded-full'> </div>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className=' h-[10px] w-[10px] bg-red rounded-full'> </div>
						<p className=' text-[18px md:text-[24px] font-md leading-[18px]  md:leading-[26px] tracking-[1px] text-white '>
							Got a gig for me? Hit me up
						</p>
						<div className=' h-[10px] w-[10px] bg-red rounded-full'> </div>
					</div>
				</marquee>

				<hr className='w-full bg-[#EAE8E4] h-[0.5px]' />

				<hr className='w-full bg-[#EAE8E4] h-[0.5px]' />
			</div>

			<div className='hidden md:block'>
				<div>
					<h1 className='text-[140px] text-center text-[#EAE8E4] leading-[153px] mb-[106px] mt-[54px]'>
						Let&apos;s Connect
					</h1>
				</div>

				<div className='flex justify-between items-center lg:px-[80px] '>
					<h2 className=' text-center text-[#EAE8E4]  text-[18px md:text-[20px] leading leading-[18px]-[md:21.75px]  '>
						Designed by David{" "}
						<span className='text-[#4D545D]'>
							<strike>Out</strike>
						</span>{" "}
						Otu
					</h2>

					<div className='flex items-center justify-between space-x-[32px]'>
						<Image
							src='/images/Gmaik.svg'
							width={20}
							height={20}
							alt='svg-icons'
						/>
						<Image
							src='/images/Gmaik.svg'
							width={20}
							height={20}
							alt='svg-icons'
						/>
						<Image
							src='/images/Gmaik.svg'
							width={20}
							height={20}
							alt='svg-icons'
						/>
					</div>
				</div>
			</div>

            <div className='block md:hidden'>
				<div className="flex flex-col space-y-[20px]">
					<h1 className='text-[72px] text-center text-[#EAE8E4] leading-[72px] mt-[54px]'>
						Let&apos;s Connect
					</h1>

                    <div className='flex items-center  space-x-[24px] mx-auto'>
						<Image
							src='/images/Gmaik.svg'
							width={20}
							height={20}
							alt='svg-icons'
						/>
						<Image
							src='/images/Gmaik.svg'
							width={20}
							height={20}
							alt='svg-icons'
						/>
						<Image
							src='/images/Gmaik.svg'
							width={20}
							height={20}
							alt='svg-icons'
						/>
					</div>
				</div>

				<div className='flex justify-center mt-[72px] items-center mb-[24px]'>
					<h2 className=' text-center text-[#EAE8E4]  text-[18px md:text-[20px] leading leading-[18px]-[md:21.75px]  '>
						Designed by David{" "}
						<span className='text-[#4D545D]'>
							<strike>Out</strike>
						</span>{" "}
						Otu
					</h2>

					
				</div>
			</div>
		</div>
	);
};

export default FooterBottom;
