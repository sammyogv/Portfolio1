
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import SingleContactLinks from "./SingleContactLinks.jsx"

function ContactLinks(){


    return(
        <div className="flex text-orange gap-12 text-4xl ">
            <SingleContactLinks link="#" Icon={CiLinkedin} />
            <SingleContactLinks link="#" Icon={FaGithub} />

        </div>
    )
}

export default ContactLinks

