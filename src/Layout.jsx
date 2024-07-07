import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Menu from './components/Menu'
import LanguageSelector from './components/LanguageSelector'

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
      <div class="bg-black text-white p-10">
        <p>© 2024 Keingarten</p>
      </div>
    </div>
  )
}

export default App