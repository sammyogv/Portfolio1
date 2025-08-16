
function SingleSKill ({imgSvg,text}){

    return(
        <div className="hover:-translate-y-10 transition-all duration-500 ">
           <div className="flex flex-col items-center gap-2 relative">
                <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-dark-grey hover:scale-105 transform transition-all duration-500 text-5xl border-4 border-orange">
                    {imgSvg}
                </div>      
                <p className="text-white font-bold ">{text}</p>      
            </div> 
            <div className="w-[100px] h-[80px] absolute bg-orange top-[50px] -z-10"></div>
        </div>
    )
}

export default SingleSKill

