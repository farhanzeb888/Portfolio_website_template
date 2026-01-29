
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-[#daa520] selection:text-white">
      {/* Persistent Animated Background */}
      <ParticleBackground />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <div id="about">
          <About />
        </div>
        
        <div id="services">
          <Services />
        </div>
        
        <div id="portfolio">
          <Portfolio />
        </div>
        
        <div id="testimonials">
          <Testimonials />
        </div>
        
        <div id="contact">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
