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
	const mainRef = useRef();
	const heightRef = useRef(1);

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
    
    useEffect(()=> {
        window.addEventListener("scroll", (e)=> {            
            console.log(e)
        })
    })
  

	const scroll = (num) => {      
        
        if (num === 1 ){
            ref.current = setInterval(() => {          
                if (
                    Math.abs(parseInt(mainRef.current.style.marginTop.replace("px", ""))) >=
                    (mainRef.current.clientHeight * num)
                ) {                    
                    clearInterval(ref.current);
                    mainRef.current.style.marginTop = `-${mainRef.current.clientHeight * num}px`;               
                    return;
                }            			
                mainRef.current.style.marginTop = `${
                    parseInt(mainRef.current.style.marginTop.replace("px", "")) - 50
                }px`;
            }, 50);
        }

        if(num === 4){            
            const newHeight = parseInt(mainRef.current.style.top.replace("px", "")) + mainRef.current.clientHeight            
            mainRef.current.style.top = `${newHeight}px`  
            if (parseInt(mainRef.current.style.top.replace("px", "")) >=
            (mainRef.current.clientHeight)) {                                  
                mainRef.current.style.top = `+${(mainRef.current.clientHeight )}px`   
            }
            setTop(5)
            return;
        }

        if(num === 2){            
            const newHeight = parseInt(mainRef.current.style.top.replace("px", "")) - mainRef.current.clientHeight            
            mainRef.current.style.top = `${newHeight}px`  
            if (Math.abs(parseInt(mainRef.current.style.top.replace("px", ""))) >=
            (height)) {                                  
                mainRef.current.style.top = `-${(mainRef.current.clientHeight )}px`   
            }
            return;
        }
        if(num === 3){                       
            mainRef.current.style.top = `0px`   
            return;
        }
		if (top === 5) {
            mainRef.current.style.top = `0px`   
            return;
        }
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
				className='fixed h-screen animation' 
				id='main'
				onWheel={()=>                                        
                    scroll(top, mainRef.current.clientHeight)}                	
				onTouchMove={() => {                    
					scroll(top, mainRef.current.clientHeight)}                	
				}
				
				style={{
					marginTop: '0px',
                    top:'0px',
				}}
			>                        
				<HomePage />
				<Works setNewTop={setTop} />
				<Footer setNewTop={setTop}/>
			</main>
		</div>
	);
}
