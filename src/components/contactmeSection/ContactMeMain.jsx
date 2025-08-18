
import ContactMeLeft from "./ContactMeLeft.jsx"
import ContactMeRight from "./ContactMeRight.jsx"
import ContactMeText from "./ContactMeText.jsx"

function ContactMeMain(){



    return(
        <div id="contact" className="mt-[150px] mb-20 mx-auto">
            <ContactMeText/>
            <div className="flex pb-5 mt-10 bg-brown md:flex-row sm:flex-col sm:justify-center md:justify-around pt-8 flex-1 gap-12 items-center rounded-2xl">
                <ContactMeLeft/>
                <ContactMeRight/>
            </div>
        </div>
    )
}

export default ContactMeMain 


