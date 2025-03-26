import { HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/HeaderComponents/Header';
import { Footer } from './components/FooterComponents/Footer';
import { HomePage } from './pages/HomePages/HomePage';
import { AboutPages } from './pages/AboutPages/AboutPages';
import { ProjectsPage } from './pages/ProjectsPages/ProjectsPage';
import { ContactPages } from './pages/ContactsPages/ContactPages';
import { Lines } from './components/Lines';
import { NotFound } from './pages/NotFound/NotFound';
import { ProjectPageById } from './pages/ProjectsPageById/ProjectsPageById';
import { HelmetProvider } from 'react-helmet-async';
import './styles/App.css';
import './styles/lines.css';
import ScrollToTop from './components/ScrollToTop';

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
          <Route path="/projects/:id" element={<ProjectPageById />} />
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
