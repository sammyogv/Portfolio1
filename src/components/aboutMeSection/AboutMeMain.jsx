import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";

function AboutMeMain(){


    return(
        <div className="flex md:flex-row sm:flex-col items-center justify-content m-5 gap-5 mb-20">
           <div>
             <AboutMeText/>
           </div>
           <div>
             <AboutMeImage/>
           </div>

        </div>
    )
}

export default AboutMeMain
