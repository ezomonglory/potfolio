import React, { useCallback, useRef, useEffect, useState } from "react";
import LeftSideWorks from "./LeftSideWorks";
import { WorksImageWeb, WorksImageMobile, WorksText } from "../Data";

const Works = ({ setNewTop }) => {
	const [WorksImage, setWorksImage] = useState([]);
	const workRef = useRef(null);
	const ref = useRef(null);
	const leftRef = useRef();
	let counter = 0;
	let bottomCounter = 0;
	let topp = 0;
	let nTop = 0;
	let countee = 0;
	let nBottom = 0;
	let bottomm = 0;

	const [count, setCount] = useState(0);
	const [bottomCount, setbottomCount] = useState(0);
	const [Top, setTop] = useState(0);
	const [Bottom, setBottom] = useState(0);
	var touchesInAction = {};
	var mobileDirection;

	if (typeof window != "undefined") {
		var path = document.querySelectorAll(".squiggle-animated path");
		var pathArr = Array.from(path);
		pathArr.forEach((path) => {
			var length = path.getTotalLength();
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
		});
	}

	// useEffect(() => {
	// 	window.screen.width < 768
	// 		? setWorksImage(WorksImageMobile)
	// 		: setWorksImage(WorksImageWeb);
	// }, []);

	// const scroll1 = (dir) => {

	// 	if (dir > 0) {
	// 		console.log(count);
	// 		if (count >= WorksImage.length - 2) {
	// 			setNewTop(2);
	// 			return;
	// 		}
	// 		let newCount = count;
	// 		if (count < 0) {
	// 			newCount = 0;
	// 		}
	// 		const divElement = workRef.current.children;
	// 		const childHeight = divElement[1].children[0].children[newCount];
	// 		const rectVals = childHeight.getBoundingClientRect();
	// 		for (const key in rectVals) {
	// 			if (key === "top") {
	// 				const top = rectVals[key];
	// 				topp = top;
	// 			}
	// 		}
	// 		console.log(topp);

	// 		if (topp <= -200) {
	// 			counter = count;
	// 			setCount(counter + 1);
	// 			nTop = parseInt(divElement[1].children[0].style.top.replace("px", ""));
	// 			setTop(nTop);
	// 			return;
	// 		}

	// 		let valAdd = topp + 250;
	// 		let newTop = Math.abs(Top) + Math.abs(parseInt(valAdd));
	// 		// console.log(newTop, valAdd)
	// 		divElement[1].children[0].style.top = `-${Math.abs(newTop)}px`;
	// 	} else {
	// 		const divElement = workRef.current.children;
	// 		let newCount = count + 2;
	// 		if (count >= WorksImage.length - 2) {
	// 			newCount = 5;
	// 		}
	// 		if (count === 0) {
	// 			newCount = 2;
	// 		}
	// 		if (count < 0) {
	// 			setNewTop(4);
	// 			return;
	// 		}
	// 		const childHeight = divElement[1].children[0].children[newCount];
	// 		const rectVals = childHeight.getBoundingClientRect();
	// 		console.log(childHeight, rectVals);
	// 		for (const key in rectVals) {
	// 			if (key === "top") {
	// 				const top = rectVals[key];
	// 				topp = top;
	// 			}
	// 		}

	// 		if (topp >= 550) {
	// 			counter = count;
	// 			setCount(counter - 1);
	// 			nTop = parseInt(divElement[1].children[0].style.top.replace("px", ""));
	// 			setTop(nTop);
	// 			return;
	// 		}

	// 		let valAdd = topp - 590;
	// 		let newTop = Top + Math.abs(parseInt(valAdd));
	// 		divElement[1].children[0].style.top = `${newTop}px`;
	// 	}
	// };

	// const scroll2 = (dir) => {
	// 	if (dir > 0) {
	// 		// if (bottomCount <= WorksText.length - 2) {
	// 		// 	setNewTop(2);
	// 		// 	return;
	// 		// }
	// 		let newbottomCount = 6;
	// 		if (bottomCount <= 0) {
	// 			newbottomCount = 6;
	// 		}
	// 		if (bottomCount === 1) {
	// 			newbottomCount = 5;
	// 		}

	// 		if (bottomCount === 2) {
	// 			newbottomCount = 4;
	// 		}

	// 		if (bottomCount === 3) {
	// 			newbottomCount = 3;
	// 		}
	// 		if (bottomCount === 4) {
	// 			newbottomCount = 2;
	// 		}
	// 		if (bottomCount >= 5) {
	// 			return;
	// 		}
	// 		console.log(bottomCount + "new");
	// 		const divElement = workRef.current.children;
	// 		const childHeight = divElement[1].children[1].children[newbottomCount];
	// 		const rectVals = childHeight.getBoundingClientRect();
	// 		for (const key in rectVals) {
	// 			if (key === "bottom") {
	// 				const bottom = rectVals[key];
	// 				bottomm = bottom;
	// 			}
	// 		}
	// 		console.log(bottomm);
	// 		if (bottomm >= 900) {
	// 			bottomCounter = bottomCount;
	// 			setbottomCount(bottomCounter + 1);
	// 			nBottom = parseInt(
	// 				divElement[1].children[1].style.bottom.replace("px", ""),
	// 			);
	// 			setBottom(nBottom);
	// 			return;
	// 		}
	// 		let valAdd = bottomm - 917;
	// 		let newTop = Math.abs(Bottom) + Math.abs(parseInt(valAdd));
	// 		divElement[1].children[1].style.bottom = `-${Math.abs(newTop)}px`;
	// 	} else {
	// 		const divElement = workRef.current.children;
	// 		let newbottomCount = 0;
	// 		if (bottomCount < 0) {
	// 			return;
	// 		}
	// 		if (bottomCount === 0) {
	// 			newbottomCount = 4;
	// 		}
	// 		if (bottomCount === 1) {
	// 			newbottomCount = 3;
	// 		}

	// 		if (bottomCount === 2) {
	// 			newbottomCount = 2;
	// 		}

	// 		if (bottomCount === 3) {
	// 			newbottomCount = 1;
	// 		}
	// 		if (bottomCount === 4) {
	// 			newbottomCount = 0;
	// 		}
	// 		if (bottomCount >= 5) {
	// 			newbottomCount = 0;
	// 		}

	// 		console.log(bottomCount, newbottomCount);
	// 		const childHeight = divElement[1].children[1].children[newbottomCount];
	// 		console.log(childHeight);
	// 		const rectVals = childHeight.getBoundingClientRect();
	// 		console.log(rectVals);
	// 		for (const key in rectVals) {
	// 			if (key === "bottom") {
	// 				const bottom = rectVals[key];
	// 				bottomm = bottom;
	// 			}
	// 		}

	// 		if (bottomm <= 80) {
	// 			bottomCounter = bottomCount;
	// 			setbottomCount(bottomCounter - 1);
	// 			console.log("entered here");
	// 			nBottom = parseInt(
	// 				divElement[1].children[1].style.bottom.replace("px", ""),
	// 			);
	// 			setBottom(nBottom);
	// 			return;
	// 		}

	// 		let valAdd = bottomm - 75;
	// 		let newTop = Bottom + Math.abs(parseInt(valAdd));
	// 		console.log(Bottom, newTop, valAdd);
	// 		divElement[1].children[1].style.bottom = `${newTop}px`;
	// 	}
	// };

	function touchStartHandler(event) {
		var touches = event.changedTouches;

		for (var j = 0; j < touches.length; j++) {
			/* store touch info on touchstart */
			touchesInAction["$" + touches[j].identifier] = {
				identifier: touches[j].identifier,
				pageX: touches[j].pageX,
				pageY: touches[j].pageY,
			};
		}
	}

	function touchEndHandler(event) {
		var touches = event.changedTouches;

		for (var j = 0; j < touches.length; j++) {
			/* access stored touch info on touchend */
			var theTouchInfo = touchesInAction["$" + touches[j].identifier];
			theTouchInfo.dx =
				touches[j].pageX -
				theTouchInfo.pageX; /* x-distance moved since touchstart */
			theTouchInfo.dy =
				touches[j].pageY -
				theTouchInfo.pageY; /* y-distance moved since touchstart */
			mobileDirection = theTouchInfo.dy;

			mobileScroll(mobileDirection)
			
		}

		/* determine what gesture was performed, based on dx and dy (tap, swipe, one or two fingers etc. */
	}

	//     const scroll2 = (dir) => {
	//         const divElement = workRef.current.children;
	// 		console.log(dir);
	// 		const childHeight = divElement[2].children[0];
	// 		if (dir > 0) {
	// 			if (childHeight.style.top.replace("px", "") > -1700) {
	// 				console.log(
	// 					parseInt(childHeight.style.top.replace("px", "")) +
	// 						Math.abs(parseInt(dir)),
	// 				);
	// 				childHeight.style.top = `${
	// 					parseInt(childHeight.style.top.replace("px", "")) +
	// 					Math.abs(parseInt(dir))
	// 				}px `;
	// 				// childHeight.style.top = `${-350 + 10}px `
	// 			}
	// 		} else if (dir < 0) {
	// 			if (childHeight.style.top.replace("px", "") <= 0) {
	// 				childHeight.style.top = `${
	// 					childHeight.style.top.replace("px", "") - Math.abs(dir)
	// 				}px `;
	// 			} else {
	// 				childHeight.style.top = "0px";
	// 			}
	// 		}
	//     }

    const mobileScroll = (dir) => {
        alert(dir)
	
		const divElement = workRef.current.children;
		const childHeight = divElement[2].children[0];
		if (dir < 0) {
			if (childHeight.style.top.replace("px", "") > -1700) {
				childHeight.style.top = `${
					childHeight.style.top.replace("px", "") + Maths.abs(parseInt(dir))
				}px `;
			} else {
				setNewTop(2);
			}
		} else if (dir > 0) {
			if (childHeight.style.top.replace("px", "") <= 0) {
				childHeight.style.top = `${
					childHeight.style.top.replace("px", "") + Maths.abs(parseInt(dir))
				}px `;
			} else {
				console.log("reached here");
				setNewTop(4);
			}
		}

		// up postive down negtive for mobile reverse
		// if (dir > 0) {
		// 	if (count >= 5) {
		// 		setNewTop(2);
		// 		setCount(5);
		// 		setbottomCount(5);
		// 		return;
		// 	}
		// } else if (dir < 0) {
		// 	if (count < 0) {
		// 		setNewTop(4);
		// 		setCount(countee);
		// 		setbottomCount(countee);
		// 		return;
		// 	}
		// }
		// scroll1(dir);
		// scroll2(dir);	

    }

	const scroll = (dir) => {
		const divElement = workRef.current.children;
		const childHeight = divElement[2].children[0];
		if (dir > 0) {
			if (childHeight.style.top.replace("px", "") > -1700) {
				childHeight.style.top = `${
					childHeight.style.top.replace("px", "") - dir
				}px `;
			} else {
				setNewTop(2);
			}
		} else if (dir < 0) {
			if (childHeight.style.top.replace("px", "") <= 0) {
				childHeight.style.top = `${
					childHeight.style.top.replace("px", "") - dir
				}px `;
			} else {
				console.log("reached here");
				setNewTop(4);
			}
		}

		// up postive down negtive for mobile reverse
		// if (dir > 0) {
		// 	if (count >= 5) {
		// 		setNewTop(2);
		// 		setCount(5);
		// 		setbottomCount(5);
		// 		return;
		// 	}
		// } else if (dir < 0) {
		// 	if (count < 0) {
		// 		setNewTop(4);
		// 		setCount(countee);
		// 		setbottomCount(countee);
		// 		return;
		// 	}
		// }
		// scroll1(dir);
		// scroll2(dir);
	};

	return (
		<div
			className='bg-[#111821] relative  pb-2  h-full animation w-full'
			ref={workRef}
			onWheel={(e) => {
				let dir;

				scroll(e.deltaY);
			}}
			onTouchStart={(e) => {
				touchStartHandler(e);
			}}
			onTouchEnd={(e) => {
				touchEndHandler(e);
			}}
		>
			<h1 className='  lg:pl-[80px] pt-[2%] text-[40px] leading-[48px] tracking-[-0.5px]  lg:block text-[#EAE8E4] z-50'>
				Selected works <br /> & Exploration{" "}
			</h1>

			<div className='relative overflow-x-hidden w-screen'>
				{/* <div className='line h-[80px] w-screen'></div> */}

				<svg
					width='1500'
					height='100'
					viewBox='0 0 1500 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='path squiggle-animated hidden lg:block'
				>
					<path
						// className='squiggle-animated path'
						d='M0 15.4804C101.977 6.36199 206.919 -3.75583 308.982 3.4458C329.664 4.90499 336.233 11.5957 323.807 15.4804L251.51 36.6854C227.274 43.794 242.34 46.0542 259.764 46.4572C370.51 45.981 482.961 36.8115 593.593 30.3851L837.154 16.2368C963.778 8.76254 1123.7 5.44028 1250.6 10.6656C1276.97 11.751 1269.95 17.7761 1249.41 21.3385C1203.85 29.2375 1157.82 33.1705 1112.73 33.9859C1102.66 34.1682 1105.26 31.2926 1112.62 29.0999C1134.35 22.6264 1187.15 23.4535 1218.57 24.0288L1267.79 26.0451C1326.3 29.8708 1382.89 29.8878 1500 29.0392'
						stroke='#fff'
						strokeOpacity='0.5'
						strokeMiterlimit='22.9256'
						strokeDasharray='2000.00 2000.00'
						strokeDashoffset='0.00'
					/>
				</svg>

				<svg
					width='1002'
					height='65'
					viewBox='0 0 1002 45'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='path squiggle-animated hidden md:block lg:hidden'
				>
					<path
						d='M1 15.4804C71.8174 6.36199 144.694 -3.75583 215.571 3.4458C229.933 4.90499 234.495 11.5957 225.866 15.4804L175.66 36.6854C158.829 43.794 169.292 46.0542 181.391 46.4572C258.299 45.981 336.389 36.8115 413.217 30.3851L582.357 16.2368C670.291 8.76254 781.348 5.44028 869.469 10.6656C887.788 11.751 882.908 17.7761 868.642 21.3385C837.01 29.2375 805.039 33.1705 773.731 33.9859C766.735 34.1682 768.544 31.2926 773.653 29.0999C788.74 22.6264 825.413 23.4535 847.232 24.0288L881.408 26.0451C922.045 29.8708 961.339 29.8878 1001 29.0392'
						stroke='#4D545D'
						stroke-opacity='0.5'
						stroke-miterlimit='22.9256'
					/>
				</svg>

				<svg
					width='652'
					height='47'
					viewBox='0 0 652 47'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='mobile-lg md:hidden path squiggle-animated mb-8'
				>
					<path
						d='M1 15.4804C47.0313 6.36199 94.4011 -3.75583 140.471 3.4458C149.807 4.90499 152.772 11.5957 147.163 15.4804L114.529 36.6854C103.589 43.794 110.39 46.0542 118.254 46.4572C168.244 45.981 219.003 36.8115 268.941 30.3851L378.882 16.2368C436.039 8.76254 508.226 5.44028 565.505 10.6656C577.412 11.751 574.24 17.7761 564.968 21.3385C544.406 29.2375 523.626 33.1705 503.275 33.9859C498.728 34.1682 499.904 31.2926 503.224 29.0999C513.031 22.6264 536.868 23.4535 551.051 24.0288L573.265 26.0451C599.679 29.8708 625.22 29.8878 651 29.0392'
						stroke='#4D545D'
						stroke-opacity='0.5'
						stroke-miterlimit='22.9256'
					/>
				</svg>

				<svg
					width='400'
					height='60'
					viewBox='0 0 400 30'
					fill='none'
					className='path squiggle-animated mobile mb-4'
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
			</div>

			<div className='relative overflow-hidden h-full w-full'>
				<LeftSideWorks ref={leftRef} count={count} bottomCount={bottomCount} />
			</div>
		</div>
	);
};

export default Works;
