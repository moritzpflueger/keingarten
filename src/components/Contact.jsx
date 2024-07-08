import { useEffect } from "react";
import { useTranslation } from "react-i18next";

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
      <p>
        Mail: <a className="underline" href="mailto:keingarten.xyz@gmail.com">keingarten.xyz@gmail.com</a>
      </p>
      
    </section>
  )
}

export default Contact;