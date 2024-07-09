import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import iconInstagram from '../assets/iconInstagram.svg';
import iconWhatsapp from '../assets/iconWhatsapp.svg';

const Contact = () => {

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);  

  return (
    <section id="contact" className="p-5 pb-20 mx-auto max-w-4xl">
      <h1 
        className="font-serif text-7xl my-10"
        style={{ fontFamily: 'Phase' }}
      >
        <span className="pr-3">
          { t('contact.title') }
        </span>
      </h1>
      <p className="mb-5">
        Mail: <a className="underline" href="mailto:keingarten.xyz@gmail.com">keingarten.xyz@gmail.com</a>
      </p>
      <div className="flex gap-5">
        <a className="underline" href="https://chat.whatsapp.com/EKrevz698XsGSmPkDYo74V">
          <img src={iconWhatsapp} alt="Whatsapp" className="w-11 h-11 inline-block" />
        </a>
        <a className="underline" href="https://www.instagram.com/keingarten.xyz/">
          <img src={iconInstagram} alt="Instagram" className="w-12 h-12 inline-block" />
        </a>        
      </div>
      
    </section>
  )
}

export default Contact;