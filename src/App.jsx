import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Menu from './components/Menu'

function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <>
      <Header 
        handleMenuClick={() => setMenuIsVisible(true)}
      />
      <Menu 
        showMenu={menuIsVisible}
        hideMenu={() => setMenuIsVisible(false)} 
      />    

      <section className="px-5">

        {letters.map((letter, index) => (
          <span key={index}>{letter}..........<br /></span>
        ))}

      </section>  

      <section className="p-5">
        {letters.map((letter, index) => (
          <div key={index} className="py-5">
            <h2 className="text-8xl">{letter}</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default App