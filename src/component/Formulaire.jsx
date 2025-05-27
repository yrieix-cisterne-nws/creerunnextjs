import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_SECRET_KEY;

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          form.current.reset() // Reset du formulaire si réussi
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col mx-24 rounded-lg w-full max-w-md'>
      <input type="text" name="user_name" placeholder='Prénom et nom' required className='mb-6 py-2 bg-gray-200'/>
      <input type="email" name="user_email" placeholder='Email' required className='mb-6 py-2 px-2 bg-gray-200'/>
       <textarea name="message" required placeholder="Bonjour" className='mb-6 py-2 px-2 bg-gray-200'/>
      <input type="submit" value="Envoyer" className='bg-gray-400 py-2 px-2 cursor-pointer'/>
    </form>
  );
};