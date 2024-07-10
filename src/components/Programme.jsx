import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

import InfoBox from "./InfoBox";

const Programme = () => {
  
  const { t } = useTranslation();
  const program = t('program.items', { returnObjects: true });
  
  return (
    <section id="program" className="p-5 mx-auto max-w-4xl">
      <h1 
        className="font-serif text-6xl sm:text-7xl my-10"
        style={{ fontFamily: 'Phase' }}
      >
        <span className="pr-3">
          { t('program.title') }
        </span>
      </h1>
      <div className="flex gap-3 mt-5 mb-16">
        <InfoBox 
          type="question"
          id="program-question"
          place="top"
        >
          <Trans 
            i18nKey="program.tooltip.question"
            components={{
              LinkFaq: <Link to="/#faq" className="font-bold underline" />,
              LinkContact: <Link to="/contact" className="font-bold underline" />
            }}
          />
        </InfoBox>
        <InfoBox 
          type="info"
          id="program-info"
          place="top"
        >
          <Trans 
            i18nKey="program.tooltip.info"
            components={{
              LinkRegistration: <Link to="/#registration" className="font-bold underline" />
            }}
          />
        </InfoBox>              
      </div>

      {program.map((item, index) => (
        <article key={`program_${index}`} className="mb-10">
          <p className="mt-5 text-xl">
            <Trans
              i18nKey="program.items.date"
              components={{
                strong: <strong />,
              }}
            >
              { item.date }
            </Trans>
            <br />
            <i className="font-semibold">
              { item.title }
            </i>
            <br />
            <Trans
              i18nKey="program.items.description"
              components={{
                1: <Link to={t(item.link1)} className="whitespace-nowrap underline" />,
                3: item.link2 ? <Link to={item.link2} className="whitespace-nowrap underline" /> : <span />,
              }}
            >
              { item.description }
            </Trans>
          </p>
          <p className="mt-5 max-w-2xl">
            { item.text }
          </p>
        </article>
      ))}
    </section>
  )
}

export default Programme;