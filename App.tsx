import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Principles from './components/Principles';
import Vision from './components/Vision';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DetailedServices from './components/DetailedService';
import Portfolio from './components/Portfolio';
import Products from './components/Products';
import Reveal from './components/Reveal';
import ScrollToHash from './components/ScrollToHash';

const LandingPage: React.FC = () => {
  return (
    <>
      <section id="home">
        <Hero />
        <Reveal>
          <Principles />
        </Reveal>
        <Reveal>
          <Vision />
        </Reveal>
      </section>

      <Reveal>
        <section id="capabilities" className="border-t border-border-light">
          <Capabilities />
        </section>
      </Reveal>

      <Reveal>
        <section id="service" className="border-t border-border-light">
          <DetailedServices />
        </section>
      </Reveal>

      <Reveal>
        <section id="portfolio" className="border-t border-border-light">
          <Portfolio teaser={true} />
        </section>
      </Reveal>

      <Reveal>
        <section id="products" className="border-t border-border-light">
          <Products teaser={true} />
        </section>
      </Reveal>

      <Reveal>
        <section id="process" className="border-t border-border-light">
          <Process />
        </section>
      </Reveal>

      <Reveal>
        <section id="contact" className="border-t border-border-light bg-zinc-900/10">
          <Contact />
        </section>
      </Reveal>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHash />
      <div className="relative bg-bg-dark min-h-screen selection:bg-primary selection:text-bg-dark">
        {/* Lightweight grain texture — static image instead of live SVG filter */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]" style={{ backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMCBggKDA6u9PEIAAAASUlEQVQ4y2NghgIGBgYWBgYGFxgDA4sDAwOLCwODgwsDA0MLAwNDCwMDQwsDg0MLiM3CwMLg4ABiO4DZLGAGCxjBAGazMIyKDCYAAD+lBzFE24P2AAAAAElFTkSuQmCC")', backgroundRepeat: 'repeat', backgroundSize: '48px 48px' }}></div>
        <div className="fixed inset-0 pointer-events-none grid-blueprint z-0 opacity-[0.04]"></div>

        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/portfolio" element={<Portfolio teaser={false} />} />
            <Route path="/products" element={<Products teaser={false} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
