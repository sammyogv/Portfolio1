import React from "react";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import SkillText from "./SkillText";
import SingleSkill from "./singleskill";


function AllSkillsSM(){

    const skills = [
       { skill: "HTML", icon: IoLogoHtml5 },
       {skill:"CSS", icon:FaCss3Alt},
       {skill:"Javascript", icon:IoLogoJavascript },
       {skill:"React", icon:FaReact },
       {skill:"TailwindCss", icon:RiTailwindCssFill },

    ];

    return(
        <div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-7">
                {skills.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <item.icon className="text-6xl bg-orange"/>
                        <p className="mt-4 text-4xl text-white">{item.skill}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllSkillsSM
