import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);  

  return (
    <section id="faq" className="p-5 pb-20 mx-auto max-w-4xl">
      <h1 
        className="font-serif text-7xl my-10"
        style={{ fontFamily: 'Phase' }}
      >
        <span className="pr-3">
          { t('about.title') }
        </span>
      </h1>
      <Trans 
        i18nKey="about.text"
        components={{
          1: <h1 className="my-3 font-bold text-xl" />,
          3: <h1 className="my-3 font-bold text-xl" />,
          5: <h1 className="my-3 font-bold text-xl" />,
          br: <br />,
        }}
      >
        der Text
      </Trans>
      
    </section>
  )
}

export default About;