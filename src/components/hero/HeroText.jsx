import React from "react";
import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants";

function HeroText(){


    return(
        <div className="flex gap-5 text-left flex-col pl-8 md:text-left sm:text-center ">
            <motion.h2 
            variants={fadeIn("down",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0}}
            className="text-cyan text-3xl uppercase " >Front end web developer</motion.h2>
            <motion.h1 
             variants={fadeIn("right",0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0}}
            className="text-6xl uppercase text-orange font-special">Ogbu Samuel</motion.h1>

            <motion.p 
            variants={fadeIn("up",0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0}}
            className="text-white font-body text-[1rem] font-bold">A passionate Web Developer and Influencer<br/> 
                with 1 year Experience
            </motion.p>
        </div>
    )
}

export default HeroText