
import contactimg from "../../assets/images/email-image.png"
import ContactDetails from "./ContactDetails.jsx"
import ContactLinks from "./ContactLinks.jsx"


function ContactMeRight(){

    return(
        <div className="flex flex-col gap-5 justify-center items-center mb-10">
            <img src={contactimg} alt="Contactimage" className="h-[400px] " />
            <div>
                <ContactDetails/>
            </div>
            <div>
                <ContactLinks/>
            </div>
        </div>
    )
}

export default ContactMeRight

