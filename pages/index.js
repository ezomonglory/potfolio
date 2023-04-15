import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import Works from "../components/Works";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	const [top, setTop] = useState(0);
	const [height, setHeight] = useState(0);
    const sectionRef = useRef(1)

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
        console.log(sectionRef.current)
        console.log(e)
			ref.current = setInterval(() => {		

			if (
				Math.abs(parseInt(mainRef.current.style.top.replace("px", ""))) >=
				window.innerHeight
			) {
                console.log("entered if block")                
				clearInterval(ref.current);
				mainRef.current.style.top = `-${sectionRef.current*window.innerHeight}px`;
                // sectionRef.current +=1
				return;
			}
			console.log(
				Math.abs(parseInt(mainRef.current.style.top.replace("px", ""))) ,
				sectionRef.current*window.innerHeight
			);
			mainRef.current.style.top = `${
				parseInt(mainRef.current.style.top.replace("px", "")) - 50
			}px`;
		}, 50);
		return () => clearInterval(ref.current);

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

	useEffect(() => {
        sectionRef.current = 1
	}, []);

	return (
		<div className=' mx-auto '>
			<Head>
				<title>Ezomon Glory</title>
				<meta name='description' content="Ezomon Glory's Portfolio" />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main
				ref={mainRef}
				className={`fixed h-screen animation`}
				id='main'
				onWheel={scroll}
                onTouchMove={scroll}
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
