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

	useEffect(() => {
		window.screen.width < 768
			? setWorksImage(WorksImageMobile)
			: setWorksImage(WorksImageWeb);
	}, []);

	const scroll1 = (e) => {
		
		if (e.deltaY > 0) {
			console.log(count);
			if (count >= WorksImage.length - 2) {
				setNewTop(2);
				return;
			}
			let newCount = count;
			if (count < 0) {
				newCount = 0;
			}
			const divElement = workRef.current.children;
			const childHeight = divElement[1].children[0].children[newCount];
			const rectVals = childHeight.getBoundingClientRect();
			for (const key in rectVals) {
				if (key === "top") {
					const top = rectVals[key];
					topp = top;
				}
			}
			console.log(topp);

			if (topp <= -200) {
				counter = count;
				setCount(counter + 1);
				nTop = parseInt(divElement[1].children[0].style.top.replace("px", ""));
				setTop(nTop);
				return;
			}

			let valAdd = topp + 250;
			let newTop = Math.abs(Top) + Math.abs(parseInt(valAdd));
			// console.log(newTop, valAdd)
			divElement[1].children[0].style.top = `-${Math.abs(newTop)}px`;
		} else {
			const divElement = workRef.current.children;
			let newCount = count + 2;
			if (count >= WorksImage.length - 2) {
				newCount = 5;
			}
			if (count === 0) {
				newCount = 2;
			}
			if (count < 0) {
				setNewTop(4);
				return;
			}
			const childHeight = divElement[1].children[0].children[newCount];
			const rectVals = childHeight.getBoundingClientRect();
			console.log(childHeight, rectVals);
			for (const key in rectVals) {
				if (key === "top") {
					const top = rectVals[key];
					topp = top;
				}
			}

			if (topp >= 550) {
				counter = count;
				setCount(counter - 1);
				nTop = parseInt(divElement[1].children[0].style.top.replace("px", ""));
				setTop(nTop);
				return;
			}

			let valAdd = topp - 590;
			let newTop = Top + Math.abs(parseInt(valAdd));
			divElement[1].children[0].style.top = `${newTop}px`;
		}
	};

	const scroll2 = (e) => {
		if (e.deltaY > 0) {
			// if (bottomCount <= WorksText.length - 2) {
			// 	setNewTop(2);
			// 	return;
			// }
			let newbottomCount = 6;
			if (bottomCount <= 0) {
				newbottomCount = 6;
			}
			if (bottomCount === 1) {
				newbottomCount = 5;
			}

			if (bottomCount === 2) {
				newbottomCount = 4;
			}

			if (bottomCount === 3) {
				newbottomCount = 3;
			}
			if (bottomCount === 4) {
				newbottomCount = 2;
			}
			if (bottomCount >= 5) {
				return;
			}
			console.log(bottomCount + "new");
			const divElement = workRef.current.children;
			const childHeight = divElement[1].children[1].children[newbottomCount];
			const rectVals = childHeight.getBoundingClientRect();
			for (const key in rectVals) {
				if (key === "bottom") {
					const bottom = rectVals[key];
					bottomm = bottom;
				}
			}
			console.log(bottomm);
			if (bottomm >= 900) {
				bottomCounter = bottomCount;
				setbottomCount(bottomCounter + 1);
				nBottom = parseInt(
					divElement[1].children[1].style.bottom.replace("px", ""),
				);
				setBottom(nBottom);
				return;
			}
			let valAdd = bottomm - 917;
			let newTop = Math.abs(Bottom) + Math.abs(parseInt(valAdd));
			divElement[1].children[1].style.bottom = `-${Math.abs(newTop)}px`;
		} else {
			const divElement = workRef.current.children;
			let newbottomCount = 0;
			if (bottomCount < 0) {
				return;
			}
			if (bottomCount === 0) {
				newbottomCount = 4;
			}
			if (bottomCount === 1) {
				newbottomCount = 3;
			}

			if (bottomCount === 2) {
				newbottomCount = 2;
			}

			if (bottomCount === 3) {
				newbottomCount = 1;
			}
			if (bottomCount === 4) {
				newbottomCount = 0;
			}
			if (bottomCount >= 5) {
				newbottomCount = 0;
			}

			console.log(bottomCount, newbottomCount);
			const childHeight = divElement[1].children[1].children[newbottomCount];
			console.log(childHeight);
			const rectVals = childHeight.getBoundingClientRect();
			console.log(rectVals);
			for (const key in rectVals) {
				if (key === "bottom") {
					const bottom = rectVals[key];
					bottomm = bottom;
				}
			}

			if (bottomm <= 80) {
				bottomCounter = bottomCount;
				setbottomCount(bottomCounter - 1);
				console.log("entered here");
				nBottom = parseInt(
					divElement[1].children[1].style.bottom.replace("px", ""),
				);
				setBottom(nBottom);
				return;
			}

			let valAdd = bottomm - 75;
			let newTop = Bottom + Math.abs(parseInt(valAdd));
			console.log(Bottom, newTop, valAdd);
			divElement[1].children[1].style.bottom = `${newTop}px`;
		}
	};

	const scroll = (e) => {
        console.log(e.deltaY);
		if (e.deltaY > 0) {
			if (count >= 5) {
				setNewTop(2);
				setCount(5);
				setbottomCount(5);
				return;
			}
		} else if (e.deltaY < 0) {
			if (count < 0) {
				setNewTop(4);

				setCount(countee);
				setbottomCount(countee);
				return;
			}
		}
		scroll1(e);
		scroll2(e);
	};

	return (
		<div
			className='bg-[#111821] relative overflow-hidden scroll-hidden pb-2  h-[100vh] animation'
			ref={workRef}
			onWheel={(e) => {
				scroll(e);
			}}
			onTouchMove={(e) => {
				scroll(e);
			}}
		>
			<h1 className='absolute top-[24px] right-[12px] pr-[80px] text-[16px] leading-[22px] tracking-[0.5px] hidden lg:block text-[#EAE8E4] z-50'>
				Selected works & Exploration{" "}
			</h1>
			<LeftSideWorks ref={leftRef} count={count} bottomCount={bottomCount} />
		</div>
	);
};

export default Works;
