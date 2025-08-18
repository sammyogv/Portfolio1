
import SingleSkill from "./singleskill"
import AllSkill from "./AllSkills.jsx"
import SkillText from "./SkillText.jsx"
import AllSkillsSM from "./AllSkillsSM.jsx"
import SubSkill from "./SubSkill.jsx"
import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants";


function SkillMain(){


    return(
        <div id="skills">
            <motion.div 
            variants={fadeIn("right",0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0}}
            className="max-w-[1200px] min-h-[300px] relative overflow-hidden px-4 mx-auto">
                <SkillText/>
            </motion.div>
            <div className="sm:hidden lg:block">
                <AllSkill/>
            </div>
            <div className="lg:hidden sm:block">
                <AllSkillsSM/>
            </div>
            <div>
                <SubSkill/>
            </div>

        </div>
    )
}

export default SkillMain 


