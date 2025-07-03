import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import CategorySection from './components/CategorySection.tsx'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <CategorySection />
    </>
  )
}

export default App
