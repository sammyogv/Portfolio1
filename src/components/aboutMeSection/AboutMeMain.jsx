import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants";

function AboutMeMain(){


    return(
        <div id="about" className="flex md:flex-row sm:flex-col items-center justify-content m-5 gap-5 mb-20">
           <motion.div variants={fadeIn("down",0.4)}
                               initial="hidden"
                               whileInView="show"
                               viewport={{once:false, amount:0.7}}>
             <AboutMeText/>
           </motion.div>
           <motion.div
            variants={fadeIn("up",0.4)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{once:false, amount:0.7}}
           >
             <AboutMeImage/>
           </motion.div>

        </div>
    )
}

export default AboutMeMain
