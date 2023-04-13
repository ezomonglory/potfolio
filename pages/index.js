import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import Works from "../components/Works";

export default function Home() {
	// if (typeof window != "undefined") {
	// 	var path = document.querySelector(".squiggle-animated path");
	// 	var length = path.getTotalLength();
	// 	// Clear any previous transition
	// 	path.style.transition = path.style.WebkitTransition = "none";
	// 	// Set up the starting positions
	// 	path.style.strokeDasharray = length + " " + length;
	// 	path.style.strokeDashoffset = length;
	// 	// Trigger a layout so styles are calculated & the browser
	// 	// picks up the starting position before animating
	// 	path.getBoundingClientRect();
	// 	// Define our transition
	// 	path.style.transition = path.style.WebkitTransition =
	// 		"stroke-dashoffset 2s ease-in-out";
	// 	// Go!
	// 	path.style.strokeDashoffset = "0";
	// }

	return (
		<div className="max-w-[1500px] mx-auto">
			<Head>
				<title>Ezomon Glory</title>
				<meta name='description' content="Ezomon Glory's Portfolio" />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className=''>				
				<HomePage />
				<Works />
				<Footer />
			</main>
		</div>
	);
}
