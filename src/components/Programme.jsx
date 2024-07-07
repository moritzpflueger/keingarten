import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import IconInfo from "./IconInfo";

const Programme = () => {
  
  const { t } = useTranslation();
  
  return (
    <section className="p-5 mx-auto max-w-4xl">
      <h1 
        className="font-serif text-8xl my-5"
        style={{ fontFamily: 'Phase' }}
      >
        <span className="pr-3">From A to Be</span>
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <div className="w-20">
            <IconInfo />
          </div>
          <p>
            { t('program.infoText') }
          </p>
        </div>
      </div>

      {new Array(10).fill().map((item, index) => (
      <article key={`program_${index}`}>
        <p className="mt-5">
          <strong> 01.08.2024 - 07.08.2024,</strong> daily between 16:00-18:00h
          <br/><i>A move towards a fiction of coexistence</i>
          <br/>with <Link className="whitespace-nowrap underline">Ula Liagaite</Link> and <Link className="whitespace-nowrap underline">AnttoLogy</Link>
        </p>
        <p
          className="mt-5"
          style={{ columnCount: 2, columnGap: '1em' }}
        >
          An action, a move, a collective effort to dig deeper in an ongoing practice. It invites those at keingarten who want to move, play, build and listen together, while being guided through movement practice composed of simple physical exercises and tasks. We meet on a daily basis, get our hands dirty and build a swing?
        </p>
      </article>        
      ))}         
    </section>
  )
}

export default Programme;