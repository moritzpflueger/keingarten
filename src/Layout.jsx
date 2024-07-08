import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import LanguageSelector from './components/LanguageSelector'
import CookieBanner from './components/CookieBanner';

function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <div 
      className="flex flex-col"
      style={{ paddingTop: `${headerHeight}px`}}
    >
      <Header 
        handleMenuClick={() => setMenuIsVisible(true)}
        onHeightChange={(height) => setHeaderHeight(height)}
      />
      <Menu 
        showMenu={menuIsVisible}
        hideMenu={() => setMenuIsVisible(false)} 
      />
      
      <LanguageSelector className="p-5 " />    
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App