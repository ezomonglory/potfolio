import React from "react";
import HomePageFooter from "./HomePageFooter";
import HomePageHeader from "./HomePageHeader";
import HomepageMain from "./HomepageMain";
import { useRef, useEffect } from "react";

const HomePage = ({scroll}) => {
	const homeRef = useRef(null);    


	return (
		<div ref={homeRef} className='w-screen flex flex-col bg-[#EAE8E4] h-[100vh] relative overflow-hidden' id='home' >
			<HomePageHeader />
            {/* <div className="flex-grow high-screen"></div> */}
			<div className="w-full h-full relative">
            <HomepageMain />
            </div>
            {/* <div className="flex-grow low-screen"></div> */}
			<HomePageFooter scroll={scroll} />
		</div>
	);
};

export default HomePage;
