import Image from "next/image";
import React from "react";

const HomepageMain = () => {
	if (typeof window != "undefined") {
		var path = document.querySelectorAll(".squiggle-animated path");
        var pathArr = Array.from(path)
        pathArr.forEach((path)=> {
            var length = path.getTotalLength()
            // Clear any previous transition
		path.style.transition = path.style.WebkitTransition = "none";
		// Set up the starting positions
		path.style.strokeDasharray = length + " " + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
			"stroke-dashoffset 2s ease-in-out";
		// Go!
		path.style.strokeDashoffset = "0";
        })
		
		
	}

	return (
		<div className='flex flex-col gap-[8px] justify-center items-center mt-[120px] overflow-hidden'>
			<div className='flex gap-[8px] items-center '>
				{" "}
				<Image
					src='./images/Hand Waving.svg'
					height={32}
					width={32}
					alt='wave'
					className='hidden md:block'
				/>
				<Image
					src='./images/Hand Waving.svg'
					height={24}
					width={24}
					alt='wave'
					className='md:hidden block'
				/>
				<p className='text-[18px] md:text-[24px] leading-[22px] md:leading-[29px] tracking-[0.5px] md:tracking-[1.4px] text-[#252C35] '>
					Hello, I’m Ezomon Glory
				</p>
			</div>

			<div className='text-[40px] sm:text-[60px] sm:leading-[100px] lg:text-[106px] xl:text-[136px] lg:leading-[163px]  tracking-[-0.5px] font-front-end text-[#111821]  '>
				Frontend-Engineer
			</div>

			<div className='relative overflow-x-hidden'>
				{/* <div className='line h-[80px] w-screen'></div> */}

				<svg
					width='1500'
					height='80'
					viewBox='0 0 1500 47'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
                    className="path squiggle-animated hidden lg:block"
				>
					<path
						// className='squiggle-animated path'
						d='M0 15.4804C101.977 6.36199 206.919 -3.75583 308.982 3.4458C329.664 4.90499 336.233 11.5957 323.807 15.4804L251.51 36.6854C227.274 43.794 242.34 46.0542 259.764 46.4572C370.51 45.981 482.961 36.8115 593.593 30.3851L837.154 16.2368C963.778 8.76254 1123.7 5.44028 1250.6 10.6656C1276.97 11.751 1269.95 17.7761 1249.41 21.3385C1203.85 29.2375 1157.82 33.1705 1112.73 33.9859C1102.66 34.1682 1105.26 31.2926 1112.62 29.0999C1134.35 22.6264 1187.15 23.4535 1218.57 24.0288L1267.79 26.0451C1326.3 29.8708 1382.89 29.8878 1500 29.0392'
						stroke='#000'
						strokeOpacity='0.5'
						strokeMiterlimit='22.9256'
						strokeDasharray='2000.00 2000.00'
						strokeDashoffset='0.00'
					/>
				</svg>

				<svg
					width='1000'
					height='80'
					viewBox='250 0 900 80'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
                    className="path squiggle-animated hidden md:block lg:hidden"
				>
					<path
						// className='squiggle-animated path'
						d='M0 15.4804C101.977 6.36199 206.919 -3.75583 308.982 3.4458C329.664 4.90499 336.233 11.5957 323.807 15.4804L251.51 36.6854C227.274 43.794 242.34 46.0542 259.764 46.4572C370.51 45.981 482.961 36.8115 593.593 30.3851L837.154 16.2368C963.778 8.76254 1123.7 5.44028 1250.6 10.6656C1276.97 11.751 1269.95 17.7761 1249.41 21.3385C1203.85 29.2375 1157.82 33.1705 1112.73 33.9859C1102.66 34.1682 1105.26 31.2926 1112.62 29.0999C1134.35 22.6264 1187.15 23.4535 1218.57 24.0288L1267.79 26.0451C1326.3 29.8708 1382.89 29.8878 1000 29.0392'
						stroke='#000'
						strokeOpacity='0.5'
						strokeMiterlimit='22.9256'
						strokeDasharray='1000.00 1000.00'
						strokeDashoffset='0.00'
					/>
				</svg>

				<svg
					width='400'
					height='40'
					viewBox='0 0 400 40'
					fill='none'
					className='path squiggle-animated block md:hidden '
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M0 8.28225C26.5565 3.69657 53.8852 -1.39173 80.4642 2.23C85.85 2.96383 87.5608 6.32861 84.3247 8.28225L65.4975 18.9463C59.1859 22.5213 63.1095 23.6579 67.6468 23.8606C96.487 23.6211 125.771 19.0098 154.582 15.7779L218.009 8.66267C250.984 4.90381 292.63 3.23304 325.676 5.86085C332.545 6.40672 330.716 9.4368 325.366 11.2283C313.504 15.2007 301.515 17.1787 289.774 17.5888C287.151 17.6804 287.829 16.2343 289.745 15.1316C295.403 11.876 309.155 12.292 317.337 12.5813L330.153 13.5953C345.392 15.5192 360.127 15.5278 400 15.1011'
						stroke='#4D545D'
						sstrokeOpacity='0.5'
						strokeMiterlimit='22.9256'
						strokeDasharray='1000.00 1000.00'
						strokeDashoffset='0.00'
					/>
				</svg>

				<a
					href='#'
					className='flex gap-[4px] text-[#DE3F3B] rounded-[32px]  p-[16px] border border-[#DE3F3B] w-[116px] h-[40px] md:w-[149px] md:h-[61px] items-center justify-center bg-white center cursor-pointer'
				>
					<h1 className=' text-[16px] md:text-[24px] leading-[24px] md:leading-[29px] tracking-[0.5px]  '>
						Let’s Talk
					</h1>
					<Image
						src='./images/call_made.svg'
						width={24}
						height={24}
						alt='north-east arrow'
						className='hidden md:block'
					/>

					<Image
						src='./images/call_made.svg'
						width={14}
						height={14}
						alt='north-east arrow'
						className='md:hidden block'
					/>
				</a>
			</div>
		</div>
	);
};

export default HomepageMain;
