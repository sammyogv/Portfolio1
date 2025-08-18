import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";


function SingleProject({name,year,link,align,image}){


    return(
        <motion.div 
         variants={fadeIn("right",0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0}}
        className={`flex sm:flex-col-reverse w-full gap-8 justify-end ${align === 'left' ? 'md:flex-row': 'md:flex-row-reverse'} items-center`}>
            <div>
                <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
                <h2 className={`text-white text-xl font-thin font-special ${align ==="left" ? 'md:text-right':'md:text-left'}`}>{year}</h2>
                <a href={link} className={`flex text-2xl gap-3 text-cyan font-bold items-center hover:text-orange transition-all duration-500 ${align ==="left"? 'md:justify-end':'md:justify-self-start' }`}>View <BiSolidRightTopArrowCircle /></a>
            </div>
            <div className="max-h-[220px] max-w-[400px] rounded-3xl overflow-hidden relative border border-white hover:scale-110 transition-all duration-500">
                <div className="w-full h-full bg-cyan absolute top-0 right-0 opacity-40 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
                <img src={image} alt="Project Image" className="h-full w-full"/>
            </div>
        </motion.div>
    )
}

export default SingleProject

