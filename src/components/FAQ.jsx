import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import InfoBox from "./InfoBox";

const FAQ = () => {

  const { t } = useTranslation();
  const faq = t('faq.items', { returnObjects: true });

  return (
    <section id="faq" className="p-5 pb-20 mx-auto max-w-4xl">
      <h1 
        className="font-serif text-6xl sm:text-7xl my-10"
        style={{ fontFamily: 'Phase' }}
      >
        <span className="pr-3">
          Frequently
          <br/>Asked
          <br/>Questions
        </span>
      </h1>
      <div className="flex gap-3 mt-5 mb-16">
        <InfoBox 
          type="question"
          id="faq-question"
          place="right"
        >
          <Trans i18nKey={'faq.tooltip.question'}>
            For the duration of your participation you can either <Link className="font-bold underline" to="/#faq">stay at the garden overnight</Link> or register for the <Link className="font-bold underline" to="/#program">daily activities</Link>.
          </Trans>
        </InfoBox>
        <InfoBox 
          type="info"
          id="faq-info"
          place="right"
        >
          <Trans i18nKey={'faq.tooltip.info'}>
            If you want to <Link className="font-bold underline" to="/#faq">stay at the garden overnight</Link>, please bring a tent and camping equipment to enjoy your stay at the <Link className="font-bold underline" to="/about">keingarten</Link>.
          </Trans>
        </InfoBox>              
      </div>
      <div className="px-1 mt-5">
      {faq.map((item) => (
        <details>
          <summary className="text-xl">{ item.question }</summary>
          <p>{ item.answer }</p>
        </details>        
      ))}
      </div>
      
    </section>
  )
}

export default FAQ;