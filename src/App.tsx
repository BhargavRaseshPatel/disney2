import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppDownload from './components/AppDownload.tsx';
import CategorySection from './components/CategorySection.tsx';
import DetailPage from './components/DetailPage.tsx';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';

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
