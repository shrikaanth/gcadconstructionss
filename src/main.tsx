import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import BasementPage from './pages/BasementPage.tsx';
import HomeRenovationPage from './pages/HomeRenovationPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import HomeUpdatedPage from './pages/HomeUpdatedPage.tsx';
import PortfolioPage from './pages/PortfolioPage.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homeupdated" element={<HomeUpdatedPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/basement-renovation" element={<BasementPage />} />
        <Route path="/home-renovation" element={<HomeRenovationPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
