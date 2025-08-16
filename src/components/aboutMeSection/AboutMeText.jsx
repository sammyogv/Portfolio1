import React from "react";

function AboutMeText(){


    return(

        <div className="flex flex-col md:text-left sm:text-center md:items-start sm:items-center gap-4 p-7">
            <h2 className="text-5xl text-cyan ">About Me</h2>
            <p className="text-white text-2xl">
                I’m Ogbu Samuel, a passionate Front-End Web Developer with 1 year of hands-on experience building modern, 
                responsive, and user-friendly websites. I enjoy turning ideas into functional, visually appealing interfaces using HTML, 
                CSS, JavaScript, and React. Always eager to learn, I’m driven by curiosity, creativity, and the desire to deliver clean, 
                efficient code that makes a real impact
            </p>

            <button className="flex items-center border-orange text-lg rounded-full border mt-2 py-2 px-4 hover:bg-orange transition-all duration-500 text-white cursor-pointer sm:self-center md:self-start">My Project</button>
        </div>
    )
}

export default AboutMeText



