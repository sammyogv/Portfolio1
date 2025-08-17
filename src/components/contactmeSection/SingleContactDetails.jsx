



function SingleContactDetails({image,text}){


    return(
        <div className="flex gap-3 text-xl  hover:text-cyan transition-all duration-500">
            {image}
            <p>{text}</p>
        </div>
    )
}

export default SingleContactDetails

