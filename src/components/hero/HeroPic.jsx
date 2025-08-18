import React from "react";
import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants";
import heroImage from "../../assets/images/HexaPic.png";
import { PiHexagonThin } from "react-icons/pi";


function HeroPic(){


    return(
        <motion.div 
         variants={fadeIn("left",0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:false, amount:0}}
        className="h-full flex justify-center items-center relative overflow-clip ">
            <img src={heroImage} alt="Ogbu Samuel" className="max-h-[450px] w-auto " />
            <div className="absolute flex justify-center items-center -z-10 animate-pulse">
                <PiHexagonThin className="md:h-[90%] sm:h-[100%]  text-cyan min-h-[600px] w-auto blur-md animate-[spin_20s_linear_infinite] "/>
            </div>

        </motion.div>
    )
}

export default HeroPic