
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import SkillText from "./SkillText";
import SingleSkill from "./singleskill";
import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants";



function AllSkill(){

    const skills = [
       { skill: "HTML", icon: IoLogoHtml5 },
       {skill:"CSS", icon:FaCss3Alt},
       {skill:"Javascript", icon:IoLogoJavascript },
       {skill:"React", icon:FaReact },
       {skill:"TailwindCss", icon:RiTailwindCssFill },

    ];

    return(
       <div>
             <div className="flex justify-center items-center relative gap-2 max-w-[1200px] mx-auto ">
            {skills.map((item, index) => (
                <motion.div
                variants={fadeIn("right",`0.${index}`)}
                initial="hidden"
                whileInView="show"
                viewport={{once:false, amount:0}}
                >
                <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>} />

                </motion.div>
            ))}
        </div>
       </div>
    )
}

export default AllSkill

