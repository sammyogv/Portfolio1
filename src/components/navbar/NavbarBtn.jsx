import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

function NavbarBtn() {

    return(
        <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-[#15d1e9] border flex items-center gap-1  bg-gradient-to-r from-[#15d1e9] to-[orange] hover:scale-110 transition-all duration-500 hover:border-[orange] 0px 0px 20px 0px rgba(94, 186, 220, 0.5) ">
            Hire Me 
            <div className="sm:hidden md:block"><FiArrowDownRight/></div>
        </button>
    )
}

export default NavbarBtn;