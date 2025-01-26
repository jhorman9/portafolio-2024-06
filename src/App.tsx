import { HashRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/lines.css';
import { Header } from './components/HeaderComponents/Header';
import { Footer } from './components/FooterComponents/Footer';
import { HomePage } from './pages/HomePages/HomePage';
import { AboutPages } from './pages/AboutPages/AboutPages';
import { ProjectsPage } from './pages/ProjectsPages/ProjectsPage';
import { ContactPages } from './pages/ContactsPages/ContactPages';
import { Lines } from './components/Lines';
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  
  return (
    <>
    <HelmetProvider>
      <HashRouter>
        <Header />
        <Lines />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </HelmetProvider>
    </>
  )
}

export default App;
