import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'

function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header 
        handleMenuClick={() => setMenuIsVisible(true)}
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