import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import CategorySection from './components/CategorySection.tsx'
import AppDownload from './components/AppDownload.tsx'
import Footer from './components/Footer.tsx'
import DetailPage from './components/DetailPage.tsx';

function App() {

  return (
    <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <CategorySection />
                <AppDownload />
                <Footer />
              </>
            }
          />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
    </>
  )
}

export default App
