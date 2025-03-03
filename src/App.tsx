import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VisionPage from './pages/VisionPage';
import TeamPage from './pages/TeamPage';
import SolutionsPage from './pages/SolutionsPage';
import TechnologyPage from './pages/TechnologyPage';
import CaseStudyPage from './pages/CaseStudyPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/case-study" element={<CaseStudyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;