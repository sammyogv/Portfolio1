
import SingleSkill from "./singleskill"
import AllSkill from "./AllSkills.jsx"
import SkillText from "./SkillText.jsx"
import AllSkillsSM from "./AllSkillsSM.jsx"
import SubSkill from "./SubSkill.jsx"

function SkillMain(){


    return(
        <div id="skills">
            <div className="max-w-[1200px] min-h-[300px] relative overflow-hidden px-4 mx-auto">
                <SkillText/>
            </div>
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


