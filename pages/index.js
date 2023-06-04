import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import Works from "../components/Works";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	const [top, setTop] = useState(1);
	const [height, setHeight] = useState(0);
	const ref = useRef(null);
	const mainRef = useRef(null);
	const sectionRef = useRef(1);

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

    // const Pscroll = (num) => {
    //      console.log("calll")
    //     let topp = mainRef.current.style.top
    //     ref.current = setInterval(() => {
	// 		if (
	// 			Math.abs(parseInt(mainRef.current.style.top.replace("px", ""))) >=
	// 			(window.innerHeight * num)
	// 		) {
	// 			clearInterval(ref.current);
	// 			mainRef.current.style.top = `-${window.innerHeight * num}px`;
	// 			return;
	// 		}

    //         console.log(parseInt(mainRef.current.style.top.replace("px", "")) - 50)
	// 		console.log(
	// 		    Math.abs(parseInt(mainRef.current.style.top.replace("px", ""))) ,
	// 		    window.innerHeight
	// 		);
    //         let T = Math.abs(parseInt(mainRef.current.style.top.replace("px", ""))) + window.innerHeight
    //         mainRef.current.style.top = `-${T}px`
    //         console.log(mainRef.current.style.top, T)

	// 	}, 50);
    // }

	const scroll = (num) => {
		console.log(top, num);
		ref.current = setInterval(() => {
			if (
				Math.abs(parseInt(mainRef.current.style.top.replace("px", ""))) >=
				(window.innerHeight * num)
			) {
				clearInterval(ref.current);
				mainRef.current.style.top = `-${window.innerHeight * num}px`;
				return;
			}

            console.log(parseInt(mainRef.current.style.top.replace("px", "")) - 50)
			console.log(
			    Math.abs(parseInt(mainRef.current.style.top.replace("px", ""))) ,
			    window.innerHeight
			);
			mainRef.current.style.top = `${
				parseInt(mainRef.current.style.top.replace("px", "")) - 50
			}px`;
		}, 50);
        console.log(mainRef.current.style.top);
        // return () => clearInterval(ref.current)
	};

	return (
		<div className=' mx-auto '>
			<Head>
				<title>Ezomon Glory</title>
				<meta name='description' content="Ezomon Glory's Portfolio" />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main
				ref={mainRef}
				className={`fixed h-screen animation `}
				id='main'
				onWheel={() => {
					if (top === 1) {
						scroll(1);
					} else if (top === 2) {					
                        mainRef.current.classList.add('height')
					}
				}}
				onScroll={() => {
					scroll(top);
				}}
				onTouchMove={() => scroll(top)}
				style={{
					top: "0px",                    
				}}
			>
				<HomePage />
				<Works setNewTop={setTop} />
				<Footer />
			</main>
		</div>
	);
}
