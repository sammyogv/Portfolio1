
import ContactMeForm from "./ContactMeForm.jsx"

function ContactMeLeft(){

    return(
        <div>
        <div className="flex flex-col px-4 gap-5">
            <h2 className="text-orange  md:text-3xl font-special font-bold">Get In Touch</h2>
            <p className="text-xl text-white">Feel free to reach out if you want to collaborate, <br/>
                you are just a few clicks away
            </p>
            <ContactMeForm/>
        </div>
        </div>

    )
}

export default ContactMeLeft

