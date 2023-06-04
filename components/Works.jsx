import React, { useCallback, useRef, useEffect, useState } from "react";
import LeftSideWorks from "./LeftSideWorks";
import { WorksData } from "../Data";

const Works = ({ setNewTop }) => {
	const workRef = useRef(null);
	const ref = useRef(null);
	const leftRef = useRef();
	let counter = 0;
	let topp = 0;
	let nTop = 0;

	const [count, setCount] = useState(0);
	const [Top, setTop] = useState(0);

	useEffect(() => {
		console.log(count + "counter ");
	}, [count]);

	



	const scroll = () => {
		if (count >= WorksData.length - 2) {
			// const par = workRef.current.parentNode;
            // parentScroll()              
            // console.log(par)
            // console.log(workRef.current.parentNode.style.top)            
            setNewTop(2)
			return;
		}
        console.log(workRef.current)        
		const divElement = workRef.current.children;
		const childHeight = divElement[1].children[count];
		const rectVals = childHeight.getBoundingClientRect();
		for (const key in rectVals) {
			if (key === "top") {
				const top = rectVals[key];
				console.log(top);
				topp = top;
			}
		}
		console.log(topp);

		if (topp <= -200) {
			counter = count;
			setCount(counter + 1);
			nTop = parseInt(divElement[1].style.top.replace("px", ""));
			setTop(nTop);
			console.log("i am inside" + Top);
			return;
		}

		// if (counter > 2) {
		// 	let valAdd = topp + 100;
		// 	let newTop = divElement[1].style.top.replace("px", "") + valAdd;
		// 	divElement[1].style.top = `-${newTop}px`;
		// }
		let valAdd = topp + 250;
		console.log("i am outside" + Top);
		let newTop = Math.abs(Top) + Math.abs(parseInt(valAdd));
		divElement[1].style.top = `-${Math.abs(newTop)}px`;
	};

	return (
		<div
			className='bg-[#111821] relative overflow-hidden scroll-hidden pb-2  h-[100vh] animation'
			ref={workRef}
			onWheel={scroll}
			onTouchMove={scroll}            
		>
			<h1 className='absolute top-[24px] right-[12px] pr-[80px] text-[16px] leading-[22px] tracking-[0.5px] hidden lg:block text-[#EAE8E4] '>
				Selected works & Exploration{" "}
			</h1>
			<LeftSideWorks ref={leftRef} />
		</div>
	);
};

export default Works;
