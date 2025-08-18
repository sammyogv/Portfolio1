

function FooterSection(){

     const links = [
        {link: 'About Me', section: 'about'},
        {link: 'Skills', section: 'skills'},
        {link: 'Projects', section: 'projects'},
        {link: 'Contact', section: 'contact'},
        {link: 'Experience', section: 'experience'}

    ]

    return(
        <div className="mx-auto max-w-[1200px]">
            <div className="w-full h-1 bg-light-grey">

            </div>
            <div className="md:flex sm:hidden justify-between mx-auto gap mt-10">
                <p className="text-light-grey text-3xl uppercase ">Ogbu samuel</p>
                <ul className="flex gap-4 text-xl text-light-grey">
                    {links.map((items, index) => (
                        <li key={index}><a href="#" className="hover:text-white ">{items.link}</a></li>
                    ))}
                </ul>
               
            </div>
             <div className="text-light-grey text-right text-xl mt-4">
                    &copy; 2024 Ogbu Samuel | All Rights Reserved
             </div>
        </div>
    )
}

export default FooterSection