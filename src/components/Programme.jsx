import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

import InfoBox from "./InfoBox";

const Programme = () => {
  
  const { t } = useTranslation();
  
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

      {new Array(10).fill().map((item, index) => (
      <article key={`program_${index}`} className="mb-10">
        <p className="mt-5 text-xl">
          <strong> 01.08.2024 - 07.08.2024,</strong> daily between 16:00-18:00h
          <br/><i className="font-semibold">A move towards a fiction of coexistence</i>
          <br/>with <Link className="whitespace-nowrap underline">Ula Liagaite</Link> and <Link className="whitespace-nowrap underline">AnttoLogy</Link>
        </p>
        <p className="mt-5 max-w-2xl">
          An action, a move, a collective effort to dig deeper in an ongoing practice. It invites those at keingarten who want to move, play, build and listen together, while being guided through movement practice composed of simple physical exercises and tasks. We meet on a daily basis, get our hands dirty and build a swing?
        </p>
      </article>        
      ))}         
    </section>
  )
}

export default Programme;