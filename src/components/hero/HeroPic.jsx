import React from "react";

import heroImage from "../../assets/images/HexaPic.png";
import { PiHexagonThin } from "react-icons/pi";


function HeroPic(){


    return(
        <div className="h-full flex justify-center items-center relative overflow-clip ">
            <img src={heroImage} alt="Ogbu Samuel" className="max-h-[450px] w-auto " />
            <div className="absolute flex justify-center items-center -z-10 animate-pulse">
                <PiHexagonThin className="md:h-[90%] sm:h-[100%]  text-cyan min-h-[600px] w-auto blur-md animate-[spin_20s_linear_infinite] "/>
            </div>

        </div>
    )
}

export default HeroPic