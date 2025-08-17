
import SingleContactDetails from "./SingleContactDetails.jsx"
import { MdMarkEmailRead } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";


function ContactDetails(){


    return(
        <div className="text-white flex flex-col gap-2 mb-3">
            <SingleContactDetails image= <MdMarkEmailRead/> text="sammyogv@gmail.com" />
            <SingleContactDetails image= <FaTwitter/> text="......" />
            <SingleContactDetails image= <FaRegAddressCard/> text="West Africa" />

        </div>
    )
}

export default ContactDetails

