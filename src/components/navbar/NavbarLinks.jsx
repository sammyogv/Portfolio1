
import { Link, Element } from 'react-scroll';


function NavbarLinks() {
    
    const links = [
        {links: 'About Me', section: 'about'},
        {links: 'Skills', section: 'skills'},
        {links: 'Experience', section: 'experience'},
        {links: 'Projects', section: 'projects'},
        {links: 'Contact', section: 'contact'},
        

    ]

    return(
        <ul className="flex font-bold text-[white] gap-6 text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full ">
            {links.map((link, index) => (
                <li key= {index} className="group">
                    <Link className="cursor-pointer text-[white] hover:text-cyan transition-all duration-500 " to={link.section} duration={500} smooth={true} spy={true} offset={-130} >{link.links}</Link>
                    <div className="mx-auto bg-[cyan] w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                </li>
            )
            
            )}
        </ul>
    )

}


export default NavbarLinks;