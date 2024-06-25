import './App.css'
import { Link } from 'react-router-dom'
import test1 from './assets/test1.webp'

function App() {

  return (
      <section 
        className="
          flex-1
          relative
          my-8
          mx-4
          font-mono
          font-semibold
          dotted-background
        "
      >
        <div 
          className="flex items-center justify-center w-full h-full absolute"
        >
          <h1 className="relative z-10 text-[clamp(2rem,_24vw,_10rem)] leading-[1.2] font-serif font-bold -translate-y-8">
            From <br/> A to <br/> Be
          </h1>
          <div className="absolute">
            <img src={test1} />
          </div>
        </div>

        <div className="absolute -top-1 left-0 bg-white pr-1">
          aktuell
        </div>
        <div className="absolute -top-1 -right-2 bg-white px-2">
          O1.O8.2O24-12.O8.2O24
        </div>
        <div className="absolute bottom-11 left-0">
          <span className="bg-white pr-1">mit Ula Liagaite</span> <br />
          <span className="bg-white pr-1">Tatiana Heumann</span> <br />
          <span className="bg-white pr-1">Florencia Curci</span> <br />
        </div>
        <div className="absolute -bottom-1 -right-2 bg-white px-2">
          <Link to="/impressum">weitere Informationen</Link>
        </div>

      </section>  
  )
}

export default App