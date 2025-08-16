import React from "react";
import skillimage from '../../assets/images/subSkills.jpg'


function SubSkill(){


    return(
        <div className="relative border-y-2 border-light-grey ">
            <div className="absolute bg-gradient-to-r from-orange to-cyan h-full w-full opacity-50">

            </div>
            <img src={skillimage} alt="subskill image" />
        </div>
    )
}

export default SubSkill