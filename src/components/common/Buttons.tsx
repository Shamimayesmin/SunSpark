import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Buttons = () => {
    //  // Handler For Back
    //  const scrollBack = () => {
    //       //@ts-ignore
    //     document.getElementById("blog-card-content").scrollLeft -= 350;
    // };

    // // Handler For Slide Next
    // const scrollNext = () => {
    //     //@ts-ignore
    //     document.getElementById("blog-card-content").scrollLeft += 350;
    // };


    // Handler For Back
	const scrollBack = () => {
		//@ts-ignore
	    document.getElementById("blog-card-content").scrollLeft -= 350;
	};

	// Handler For Slide Next
	const scrollNext = () => {
		//@ts-ignore
	    document.getElementById("blog-card-content").scrollLeft += 350;
	};

	// const scrollBack = () => {
    //     //@ts-ignore
	// 	setScrollPosition((prevPosition: number) => prevPosition - 350);
	//   };

	//   const scrollNext = () => {
    //     //@ts-ignore
	// 	setScrollPosition((prevPosition: number) => prevPosition + 350);
	//   };
    return (
        <>
            {/* Button For Slide Back */}
            <button
                onClick={scrollBack}
                className="md:p-3 p-1 m-1 rounded-full bg-slate-300 hover:bg-slate-600"
            >
                <IoIosArrowBack />
            </button>
            {/* Button For Slide Next */}
            <button
                onClick={scrollNext}
                className="md:p-3 p-1 m-1 rounded-full bg-slate-300 hover:bg-slate-600"
            >
                <IoIosArrowForward />
            </button>
        </>
    );
};

export default Buttons;


