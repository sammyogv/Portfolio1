import React from "react";

import AboutImage from "../../assets/images/about-me.jpg" 

function AboutMeImage(){


    return(
        <div className="h-[500px] w-[300px] relative">
            <div className="h-[500px] w-[300px] absolute rounded-[100px] overflow-hidden">
                <img src={AboutImage} alt="About Me" 
                className="h-full w-auto object-cover "
                />

            </div>
            <div className="h-[500px] w-[300px] absolute bg-orange left-[-30px] bottom-[-30px]  -z-10 rounded-bl-[120px] rounded-br-[20px] rounded-tr-[120px] rounded-tl-[20px]">

            </div>
        </div>
    )
}

export default AboutMeImage

