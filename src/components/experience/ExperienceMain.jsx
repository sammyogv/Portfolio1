import ExperienceText from "./ExperienceText.jsx"
import ExperienceTop from "./ExperienceTop.jsx"
import AllExperience from "./AllExperience.jsx"
import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants";


function Experiencemain(){


    return(
        <div id="experience">
            <motion.div 
            variants={fadeIn("left",0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0.7}} >
                <ExperienceText/>
            </motion.div>
            <motion.div variants={fadeIn("left",0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0}} >
                <ExperienceTop/>
            </motion.div>
            
            <AllExperience/>
        </div>
    )
}

export default Experiencemain

