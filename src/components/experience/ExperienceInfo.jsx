

function ExperienceInfo({number, text}){

    return(
        <div className="flex flex-col justify-center items-center gap-2 px-10">
            <p className="text-cyan font-bold text-4xl">{number}</p>
            <p className="text-white text-3xl">{text}</p>
        </div>
    )
}

export default ExperienceInfo