import IconInfo from "./IconInfo";
import IconQuestionmark from "./IconQuestionmark";
import { useTranslation } from "react-i18next";

const FAQ = () => {

  const { t } = useTranslation();
  const faq = t('faq.items', { returnObjects: true });

  return (
    <section className="p-5 max-w-3xl">
      <h1 
        className="font-serif text-7xl my-5"
        style={{ fontFamily: 'Phase' }}
      >
        <span className="pr-3">From A to Be</span>
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="w-20">
            <IconQuestionmark />
          </div>
          <p>{ t('faq.text1') }</p>
        </div>
        <div className="flex gap-5">
          <div className="w-20">
            <IconInfo />
          </div>
          <p>{ t('faq.text2') }</p>
        </div>
      </div>
      <div className="px-1 mt-5">
      {faq.map((item) => (
        <details>
          <summary>{ item.question }</summary>
          <p>{ item.answer }</p>
        </details>        
      ))}
      </div>
      
    </section>
  )
}

export default FAQ;