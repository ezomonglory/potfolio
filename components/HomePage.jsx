import React from "react";
import HomePageFooter from "./HomePageFooter";
import HomePageHeader from "./HomePageHeader";
import HomepageMain from "./HomepageMain";
import { useRef, useEffect } from "react";

const HomePage = () => {
	const homeRef = useRef(null);

	// if (typeof window === "undefined"){

	// }

	const scroll = (e) => {
		console.log(e);
        // alert("scrolin")
	};

	// useEffect(() => {
    //     console.log("function caleed")
	// 	const home = document.getElementById("home");
    //     console.log(home)
    //     // document.addEventListener('scroll', (e)=> alert("scrolling") )

	// 	document.addEventListener("scroll", scroll);
	// 	return () => {
	// 		document.removeEventListener("scroll", scroll);
	// 	};
	// }, []);

	return (
		<div ref={homeRef} className='w-screen flex flex-col bg-[#EAE8E4] h-screen relative overflow-hidden' id='home' >
			<HomePageHeader />
            <div className="flex-grow high-screen"></div>
			<HomepageMain />
            <div className="flex-grow max-h-[5%] low-screen"></div>
			<HomePageFooter />
		</div>
	);
};

export default HomePage;
