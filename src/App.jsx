import './App.css'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'

import Registration from './components/Registration'
import Programme from './components/Programme'
import FAQ from './components/FAQ'
import IconQuestionmark from './components/IconQuestionmark'
import IconInfo from './components/IconInfo'

function App() {

  const { t, i18n } = useTranslation()
  const location = useLocation();

  const formattedStartDate = new Date('2024-08-01').toLocaleDateString(i18n.language)
  const formattedEndDate = new Date('2024-08-12').toLocaleDateString(i18n.language)

  useEffect(() => {
    console.log('location', location.hash)
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);    

  return (
    <div>
      <section id="registration" className="p-5 mx-auto max-w-4xl pb-20">
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="col-span-1">
            <h1 
              className="font-serif text-7xl"
              style={{ fontFamily: 'Phase' }}
            >
              <span className="pr-3">From A <br/> to Be</span>
              <div className="inline-flex whitespace-nowrap">
                <Link to ="/faq" className="mx-3 w-16">
                  <IconQuestionmark />
                </Link>
                <Link to ="/program" className="mx-3 w-16">
                  <IconInfo />
                </Link>                
              </div>
            </h1>
            <p className="text-2xl my-10">
              { formattedStartDate } - { formattedEndDate}
            </p>
            <p className="text-2xl">
              <Trans i18nKey="heroDescription">
                Workshops with <a className="whitespace-nowrap underline" href="https://www.muenchner-kammerspiele.de/de/wir/13127-ula-liagait" target="_blank">Ula Liagaite</a>, 
                AnttoLogy, <a className="whitespace-nowrap underline" href="https://www.tatianaheuman.com/" target="_blank">Tatiana Heumann</a> 
                and <a className="whitespace-nowrap underline" href="https://florenciacurci.com/" target="_blank">Florencia Curci</a>
              </Trans>
            </p>
          </div>
          <div className="col-span-1 flex justify-start mt-3">
            <Registration />
          </div>
        </div>
      </section>  
      <Programme />
      <FAQ />
    </div>
  )
}

export default App