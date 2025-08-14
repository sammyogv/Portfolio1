
function NavbarLinks() {
    
    const links = [
        {links: 'About Me', section: 'about'},
        {links: 'Skills', section: 'skills'},
        {links: 'Projects', section: 'projects'},
        {links: 'Contact', section: 'contact'},
        {links: 'Experience', section: 'experience'}

    ]

    return(
        <ul className="flex font-bold text-[white] gap-6 text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full ">
            {links.map((link, index) => (
                <li key= {index} className="group">
                    <a className="cursor-pointer text-[white] hover:text-cyan transition-all duration-500 " href='#'>{link.links}</a>
                    <div className="mx-auto bg-[cyan] w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                </li>
            )
            
            )}
        </ul>
    )

}


export default NavbarLinks;