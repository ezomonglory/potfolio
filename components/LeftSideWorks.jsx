import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { WorksImageWeb, WorksImageMobile, WorksText } from "../Data";


const LeftSideWorks = ({ count, bottomCount }) => {
 const [WorksImage, setWorksImage] = useState([])

	let newCount = count + 1;
    let newbottomCount = bottomCount + 5
	if (count <= 0) {
		newCount = 1;
	}

	if (count >= 5) {
		newCount = 5;
	}

    if (bottomCount <= 0) {
        newbottomCount = 5;
    }
    if (bottomCount === 1) {
        newbottomCount = 4;
    }

    if (bottomCount === 2) {
        newbottomCount = 3;
    }

    if (bottomCount === 3) {
        newbottomCount = 2;
    }
    if (bottomCount === 4) {
        newbottomCount = 1;
    }
    if (bottomCount >= 5) {				
        newbottomCount = 0;
        
    }

    useEffect(()=> {
        window.screen.width < 768 ?  setWorksImage(WorksImageMobile) : setWorksImage(WorksImageWeb)
    }, [])
    
    
	return (
		<div className='flex h-screen'>
			<div
				className='flex flex-col space-y-[72px] w-[50%]  md:space-y-[90px] sm:pl-[16px] lg:pl-[80px] absolute left-0  animation '
				style={{
					top: "-250px",
				}}
			>
				{WorksImage.map((work, i) => (
					<div
						className={`flex gap-[32px] work-space-img lg:gap-24 items-center `}
						key={work.number}
						id={work.id}
					>
						<Image
							src={work.image}
							width={360}
							height={480}
							alt={"image"}
							className={` ${
								newCount === i
									? "work-border hidden md:block "
									: "opacity-20 work-border hidden md:block fade "
							}`}
						/>

						<Image
							src={work.image}
							width={200}
							height={296}
							alt={"image"}
							className={` ${
								newCount + 1 === i
									? "work-border md:hidden block "
									: "opacity-20 work-border md:hidden block fade "
							}`}
						/>
					</div>
				))}
			</div>

			<div
				className='flex flex-col flex-grow w-[50%]  space-y-[72px] md:space-y-[90px]  absolute right-0  animation '
				style={{
					bottom: "-250px",
				}}
			>
				{WorksText.map((work, i) => (
					<div
						className={`${
							newbottomCount === i
								? "flex flex-col justify-center pl-[2rem] sm:pl-0 gap-[16px] md:gap-[24px]  h-[331px]"
								: "fade justify-center opacity-10 flex flex-col pl-[2rem] sm:pl-0 gap-[16px] md:gap-[24px]  h-[331px]"
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
			</div>
		</div>
	);
};

export default LeftSideWorks;
