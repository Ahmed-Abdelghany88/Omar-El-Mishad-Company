import './assets/css/main.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';

import Navbar from './pages/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FooterPage from './pages/footerPage.jsx';
import PortfolioPage from './pages/portfolioPage.jsx';
import { Route, Routes } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from './pages/NotfoundPage.jsx';
function App() {
  return (
    <div className='App'>
      <HelmetProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <FooterPage />
      </HelmetProvider>
    </div>
  );
}

export default App;
