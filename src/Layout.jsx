import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'

function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <div 
      className="min-h-[100dvh] flex flex-col"
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
      <Outlet />
    </div>
  )
}

export default App