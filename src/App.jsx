import { useEffect } from 'react';
import Navbar from './components/Navbar';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ServicesPage from './Pages/ServicesPage';
import ContactPage from './Pages/ContactPage';
import Home from './Home';
import Footer from './components/Footer'
import ScrollToTop from './ScrollToTop';
import QuestionnaireDevelopmentPage from './Pages/ServicesPages/QuestionnaireDevelopmentPage';
import SurveyProgrammingPage from './Pages/ServicesPages/SurveyProgrammingPage';
import FieldingDataCollectionPage from './Pages/ServicesPages/FieldingDataCollectionPage';
import DataAnalysisPage from './Pages/ServicesPages/DataAnalysisPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurApproachPage from './Pages/OurApproachPage';
import Platform from './Pages/Platform';
import Solutions from './Pages/Solutions';
import Company from './Pages/Company.JSX';
import DataTable from './Pages/DataTable.JSX';
import TermsOfUse from './Pages/TermsOfUse';
import PrivacyPolicy from './Pages/PrivacyPolicy';


function App() {
  useEffect(() => {
    // Create background particles
    const createParticles = () => {
      const container = document.getElementById('particles-container');
      if (!container) return;

      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size
        const size = Math.random() * 6 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random color
        const colors = [
          'rgba(0, 102, 255, 0.6)',
          'rgba(0, 212, 170, 0.5)',
          'rgba(157, 78, 221, 0.4)',
          'rgba(255, 255, 255, 0.3)',
        ];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Random animation
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        particle.style.animation = `particle-float ${duration}s linear ${delay}s infinite`;

        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
      {/* Background Elements */}
      {/* <div id="particles-container" className="fixed inset-0 overflow-hidden pointer-events-none z-0"></div> */}

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Main Content */}
       <BrowserRouter>
       <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/questionnaire-development" element={<QuestionnaireDevelopmentPage />} />
            <Route path="/services/survey-programming" element={<SurveyProgrammingPage />} />
            <Route path="/services/fielding-data-collection" element={<FieldingDataCollectionPage />} />
            <Route path="/services/data-analysis" element={<DataAnalysisPage />} />
            <Route path="/approach" element={<OurApproachPage />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/company" element={<Company />} />
            <Route path="/data-table" element={<DataTable />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />


      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
