
import ExperienceTopLeft from "./ExperienceTopLeft.jsx"
import ExperienceTopMiddle from "./ExperienceTopMiddle.jsx"
import ExperienceTopRight from "./ExperienceTopRight.jsx"

function ExperienceTop(){

    return(
        <>
        <div className="flex md:flex-row sm:flex-col justify-center items-center ">
            <ExperienceTopLeft/>
            <ExperienceTopMiddle/>
            <ExperienceTopRight/>
           
        </div>
         <div className="w-full h-1 bg-light-grey mt-8 opacity-50 ">

            </div>
        </>
    )
}

export default ExperienceTop
