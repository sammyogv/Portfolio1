import React from "react";
import HeroText from "./HeroText.jsx";
import HeroPic from "./HeroPic.jsx";
import HeroGradient from "./HeroGradient.jsx";



function HeroMain(){

    return(
        <div className= "pt-40 pb-16px">
            <div className="flex sm:flex-col md:flex-row mx-auto px-4 max-w-[1200px] justify-between relative items-center" >
                <HeroText/>
                <HeroPic/>
            </div>
            <HeroGradient/>
        </div>
    )
}

export default HeroMain



