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
        <span className="pr-3">Summer Program</span>
      </h1>
      <div className="flex gap-3 mt-5 mb-16">
        <InfoBox 
          type="question"
          id="program-question"
          place="top"
        >
          <Trans i18nKey="program.tooltip.question">
            For the duration of your <Link className="font-bold underline" to="/#registration">participation</Link> you can either stay at the garden over night or come during the <Link className="font-bold underline" to="/#program">daily activities</Link>.
          </Trans>
        </InfoBox>
        <InfoBox 
          type="info"
          id="program-info"
          place="top"
        >
          <Trans i18nKey="program.tooltip.info">
            If you want to <Link className="font-bold underline" to="/#faq">stay at the garden overnight</Link>, please bring a tent and camping equipment to enjoy your stay at the <Link className="font-bold underline" to="/about">keingarten</Link>.
          </Trans>
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
              {item.date}
            </Trans>
            <br />
            <i className="font-semibold">{item.title}</i>
            <br />
            <Trans
              i18nKey="program.items.description"
              components={{
                1: <Link to={t(item.link1)} className="whitespace-nowrap underline" />,
                3: item.link2 ? <Link to={item.link2} className="whitespace-nowrap underline" /> : <span />,
              }}
            >
              {item.description}
            </Trans>
          </p>
          <p className="mt-5 max-w-2xl">
            {t(item.text)}
          </p>
        </article>
      ))}
    </section>
  )
}

export default Programme;