import { useState } from 'react'
import './App.css'
import NavbarMain from './components/navbar/NavbarMain.jsx'
import HeroMain from './components/hero/HeroMain.jsx'

function App() {
 
  return(
    <>
      <main className='font-body '>
       <NavbarMain/> 
       <HeroMain/>
      </main>
    </>
  )
}

export default App
