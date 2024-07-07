import './App.css'
import { Link } from 'react-router-dom'
import Registration from './components/Registration'
import IconQuestionmark from './components/IconQuestionmark'
import IconInfo from './components/IconInfo'
import { useTranslation, Trans } from 'react-i18next'

function App() {

  const { t, i18n } = useTranslation()

  const formattedStartDate = new Date('2024-08-01').toLocaleDateString(i18n.language)
  const formattedEndDate = new Date('2024-08-12').toLocaleDateString(i18n.language)

  return (
      <section>
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
                <Link to ="/programme" className="mx-3 w-16">
                  <IconInfo />
                </Link>                
              </div>
            </h1>
            <p className="text-2xl my-10">
              { formattedStartDate } - { formattedEndDate}
            </p>
            <p className="text-2xl">
              <Trans i18nKey="heroDescription">
                Workshops with <Link className="whitespace-nowrap underline" to="/">Ula Liagaite</Link>, 
                <Link className="whitespace-nowrap underline" to="/">AnttoLogy</Link>, <Link className="whitespace-nowrap underline" to="/">Tatiana Heumann</Link> 
                and <Link className="whitespace-nowrap underline" to="/">Florencia Curci</Link>
              </Trans>
            </p>
          </div>
          <div className="col-span-1 flex justify-start mt-3">
            <Registration />
          </div>
        </div>

      </section>  
  )
}

export default App