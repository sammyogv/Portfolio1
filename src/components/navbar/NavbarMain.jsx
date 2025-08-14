
import React from 'react'
import NavbarLogo from './NavbarLogo.jsx'
import NavbarLinks from './NavbarLinks.jsx'
import NavbarBtn from './NavbarBtn.jsx'
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";

function NavbarMain() {

    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu(){
        setMenuOpen(!menuOpen)
    }

    return(
       <nav className='max-w-[1300px] mx-auto px-4 w-full fixed z-20 flex mt-2 gap-4'>
        <div className='flex justify-between w-full max-w-[1200px] mx-auto relative bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange-400 '>
            <NavbarLogo/>
            <div className= {`${menuOpen? 'sm:block': 'sm:hidden'} lg:block`}>
                <NavbarLinks/>
            </div>
            <NavbarBtn/>
        </div>
        <div className='flex lg:hidden sm:block p-6 bg-black justify-center items-center rounded-full border-[0.5px]'>
            <button className='text-2xl border border-orange rounded-full p-3 text-white ' onClick={toggleMenu}>
                <CiMenuBurger />
            </button>
        </div>
       </nav>
    )
}


export default NavbarMain

