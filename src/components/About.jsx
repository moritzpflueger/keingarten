// import IconInfo from "./IconInfo";
// import IconQuestionmark from "./IconQuestionmark";
import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation();

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
      <p>
        { t('about.text') }
      </p>
      
    </section>
  )
}

export default About;