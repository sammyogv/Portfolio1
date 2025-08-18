import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants";


function SingleExperience({experience}){

    return(
        <motion.div 
        variants={fadeIn("down",0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0.7}}
        className="flex flex-col  border border-orange border-dashed rounded-2xl flex-1 justify-evenly sm:w-[350px] p-8">
            <p className="text-cyan text-2xl font-bold uppercase font-special">{experience.Job}</p>
            <p className="text-orange text-[1.5rem]">{experience.company}</p>
            <p className="text-light-grey font-bold text-[1.2rem]">{experience.year}</p>
            <ul className="list-disc text-white font-bold">
                {experience.responsibilities.map((resp,index)=> (
                    <li key={index}>{resp}</li>
                ))}
            </ul>
        </motion.div>
    )
}

export default SingleExperience