
import ExperienceInfo from "./ExperienceInfo.jsx"

function ExperienceTopLeft(){

    return(
        <div className="flex flex-col items-center justify-center gap-12 mt-10 w-[40%]">
            <h2 className="text-orange text-4xl uppercase font-bold font-special">Since 2022</h2>
            <div className="flex flex-row justify-around items-center">
                <ExperienceInfo number="1" text="Year" />
                <div className="text-light-grey text-6xl">-</div>
                <ExperienceInfo number="15" text="Websites"/>
            </div>
            <div>
                <p className="text-light-grey text-center text-2xl items-center flex justify-center">
                    Over the past year, I have honed my front-end development skills by building responsive and visually appealing websites. 
                </p>
            </div>
            <ExperienceInfo number="$500" text="Max Budget"/>
        </div>
    )
}

export default ExperienceTopLeft
