import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import Works from "../components/Works";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	const [top, setTop] = useState(0);
	const [height, setHeight] = useState(0);

	if (typeof window != "undefined") {
		// var path = document.querySelector(".squiggle-animated path");
		// var length = path.getTotalLength();
		// // Clear any previous transition
		// path.style.transition = path.style.WebkitTransition = "none";
		// // Set up the starting positions
		// path.style.strokeDasharray = length + " " + length;
		// path.style.strokeDashoffset = length;
		// // Trigger a layout so styles are calculated & the browser
		// // picks up the starting position before animating
		// path.getBoundingClientRect();
		// // Define our transition
		// path.style.transition = path.style.WebkitTransition =
		// 	"stroke-dashoffset 2s ease-in-out";
		// // Go!
		// path.style.strokeDashoffset = "0";
	}

	// useEffect(()=> {
	//     setHeight(window.innerHeight)
	// }, [])

	const ref = useRef(null);
	const mainRef = useRef(null);
	const scroll = (e) => {
		console.log(e);

		// document.getElementById("main").style.top= top-height
		// ref.current = setInterval(() => {
		// 	setHeight((current) => {
		// 		console.log(current, Math.abs(current) === window.innerHeight);
		// 		if (Math.abs(current) === window.innerHeight)
		// 			return clearInterval(ref.current);
		// 		return current + 50;
		// 	});
		// }, 50);
	};

	// useEffect(() => {
	// 	ref.current = setInterval(() => {
	// 		// setHeight((current) => {
	// 		// 	console.log(current, Math.abs(current) === window.innerHeight);
	// 		// 	if (Math.abs(current) >= window.innerHeight) {
	// 		//         clearInterval(ref.current)
	// 		// 		return window.innerHeight;
	// 		// 	}
	// 		// 	return current + 50;
	// 		// });

	// 		if (
	// 			Math.abs(parseInt(mainRef.current.style.top.replace("px", ""))) >=
	// 			window.innerHeight
	// 		) {
	// 			clearInterval(ref.current);
	// 			mainRef.current.style.top = `-${window.innerHeight}px`;
	// 			return;
	// 		}
	// 		console.log(
	// 			`${parseInt(mainRef.current.style.top.replace("px", ""))}`,
	// 			Math.abs(parseInt(mainRef.current.style.top.replace("px", ""))) >=
	// 				window.innerHeight,
	// 			window.innerHeight,
    //             parseInt(mainRef.current.style.top.replace("px", ""))
	// 		);
	// 		mainRef.current.style.top = `${
	// 			parseInt(mainRef.current.style.top.replace("px", "")) - 50
	// 		}px`;
	// 	}, 50);
	// 	return () => clearInterval(ref.current);
	// }, []);

	return (
		<div className='max-w-[1500px] mx-auto '>
			<Head>
				<title>Ezomon Glory</title>
				<meta name='description' content="Ezomon Glory's Portfolio" />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main
				ref={mainRef}
				className={`fixed h-screen`}
				id='main'
				onWheel={scroll}
				style={{
					top: 0,
				}}
			>
				<HomePage />
				<Works />
				<Footer />
			</main>
		</div>
	);
}
