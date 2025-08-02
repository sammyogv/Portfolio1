
function NavbarLinks() {
    
    const links = [
        {links: 'About Me', section: 'about'},
        {links: 'Skills', section: 'skills'},
        {links: 'Projects', section: 'projects'},
        {links: 'Contact', section: 'contact'},
        {links: 'Experience', section: 'experience'}

    ]

    return(
        <ul>
            {links.map((link, index) => (
                <li key= {index}>
                    <a href='#'>{link.links}</a>
                </li>
            )
            
            )}
        </ul>
    )

}


export default NavbarLinks;