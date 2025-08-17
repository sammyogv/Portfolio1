

function singleContactLinks({link, Icon}){


    return(
        <div className="hover:text-white hover:scale-120 duration-500 transition-all ">
            <a href={link}><Icon/></a>
        </div>
    )
}

export default singleContactLinks

