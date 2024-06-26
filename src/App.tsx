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

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Lines />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPages />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
