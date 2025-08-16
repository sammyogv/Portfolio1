import { useState } from 'react'
import './App.css'
import NavbarMain from './components/navbar/NavbarMain.jsx'
import HeroMain from './components/hero/HeroMain.jsx'
import AboutMeMain from './components/aboutMeSection/AboutMeMain.jsx'
import SkillMain from './components/skillsSection/skillMain.jsx'

function App() {
 
  return(
    <>
      <main className='font-body '>
       <NavbarMain/> 
       <HeroMain/>
       <AboutMeMain/>
       <SkillMain/>
      </main>
    </>
  )
}

export default App
