import React from "react";

function HeroText(){


    return(
        <div className="flex gap-5 text-left flex-col pl-8 md:text-left sm:text-center ">
            <h2 className="text-cyan text-3xl uppercase " >Front end web developer</h2>
            <h1 className="text-6xl uppercase text-orange font-special">Ogbu Samuel</h1>

            <p className="text-white font-body text-[1rem] font-bold">A passionate Web Developer and Influencer<br/> 
                with 1 year Experience
            </p>
        </div>
    )
}

export default HeroText