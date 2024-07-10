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
          place="top"
        >
          <Trans 
            i18nKey="faq.tooltip.question"
            components={{
              LinkFaq: <Link to="/#faq" className="font-bold underline" />,
            }}
          />
        </InfoBox>
        <InfoBox 
          type="info"
          id="faq-info"
          place="top"
        >
          <Trans 
            i18nKey="faq.tooltip.info"
            components={{
              LinkContact: <Link to="/contact" className="font-bold underline" />
            }}
          />
        </InfoBox>              
      </div>
      <div className="px-1 mt-5">
      {faq.map((item, index) => (
        <details key={`faq_${index}`}>
          <summary className="text-xl">
            { item.question }
          </summary>
          <Trans 
            i18nKey="faq.items.question"
            components={{
              LinkMapsKeingarten: <a href="https://maps.app.goo.gl/JaVsrCGgtCqHax3j8" target="_blank" rel="noreferrer" className="font-bold underline" />,
              LinkMapsBracke: <a href="https://maps.app.goo.gl/jb9xSSSv9LmMzb1q7" target="_blank" rel="noreferrer" className="font-bold underline" />,
              LinkMapsFire: <a href="https://maps.app.goo.gl/P2XuTu2P6ECZ6Qzz7" target="_blank" rel="noreferrer" className="font-bold underline" />,
              LinkContact: <Link to="/contact" className="font-bold underline" />,
              i: <i />,
              br: <br />,
            }}
          >
            { item.answer }
          </Trans>
        </details>
      ))}
      </div>
      
    </section>
  )
}

export default FAQ;