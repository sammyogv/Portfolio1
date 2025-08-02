
import React from 'react'
import NavbarLogo from './NavbarLogo.jsx'
import NavbarLinks from './NavbarLinks.jsx'
import NavbarBtn from './NavbarBtn.jsx'

function NavbarMain() {



    return(
       <nav className='max-w-[1300px] mx-auto px-4 w-full fixed z-20 flex mt-2 gap-4'>
        <div className='flex justify-between w-full max-w-[1200px] mx-auto relative bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange-400 '>
            <NavbarLogo/>
            <NavbarLinks/>
            <NavbarBtn/>
        </div>
       </nav>
    )
}


export default NavbarMain

