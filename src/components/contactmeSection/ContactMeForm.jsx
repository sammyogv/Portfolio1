
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


function ContactMeForm(){

    const form=useRef();

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const [success, setSuccess]=useState('');

    const handleMessage = (e)=>(
        setMessage(e.target.value)
    )

    const handleName = (e)=>(
        setName(e.target.value)
    )

    const handleEmail= (e)=>(
        setEmail(e.target.value)
    )


    

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dxap6zm', 'template_tlhilsf', form.current, {
        publicKey: 'lQoT0CkfLSJd0zXoC',
      })
      .then(
        () => {
          setEmail('')
          setMessage('')
          setName('')
          setSuccess('Message Sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return(
        <div>
            <p className='text-cyan'>{success}</p>
            <form action="" ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-full">
                <input type="text" value={name} onChange={handleName} name='name' placeholder="Your Name" required className="bg-light-brown p-2 h-12 rounded-lg text-white text-xl" />
                <input name='email' value={email} onChange={handleEmail} type="email" placeholder="Your Email" required className="bg-light-brown p-2 h-12 text-white text-xl rounded-lg"/>
                <textarea name="message" value={message} onChange={handleMessage} id="" type='text' required rows={9} cols={50} placeholder="Message" className="text-white text-xl rounded-lg p-2 bg-light-brown" />
                <button type="submit" className="bg-cyan w-full border border-cyan hover:bg-dark-cyan transition-all  duration-500 rounded-lg text-white h-12 font-bold text-xl">Send</button>
            </form>
        </div>
    )
}

export default ContactMeForm

