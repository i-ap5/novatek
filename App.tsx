
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Principles from './components/Principles';
import Vision from './components/Vision';
import Team from './components/Team';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import Contact from './components/Contact';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';
import DetailedServices from './components/DetailedService';
import Reveal from './components/Reveal';

const App: React.FC = () => {
  return (
    <div className="relative bg-bg-dark min-h-screen selection:bg-primary selection:text-bg-dark overflow-x-hidden">
      {/* Universal Grain & Blueprint Grid Overlay - Subtle globally */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="fixed inset-0 pointer-events-none grid-blueprint z-0 opacity-10"></div>

      <Navbar />

      <main className="relative z-10">

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
        <section id="process" className="border-t border-border-light">
          <Process />
        </section>
      </Reveal>

      <Reveal>
        <section id="contact" className="border-t border-border-light bg-zinc-900/10">
          <Contact />
        </section>
      </Reveal>

    </main>


      {/* <AIConsultant /> */}
      <Footer />
    </div>
  );
};

export default App;
