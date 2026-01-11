
import React from 'react';
import Aurora from './Aurora';
import LiquidEther from './LiquidEther';

const Hero: React.FC = () => {
  const pillars = [
    { title: 'Built to Scale', desc: 'Infrastructure that grows effortlessly.', icon: 'trending_up' },
    { title: 'Cleaner Code', desc: 'Zero technical debt architecture.', icon: 'auto_awesome' },
    { title: 'Ironclad Security', desc: 'Modern data protection standards.', icon: 'verified_user' }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-8 md:px-12 relative overflow-hidden bg-bg-dark">
      {/* BG */}
      <Aurora />
      
      {/* Subtle overlay to ensure text readability against the flare */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg-dark/20 via-transparent to-bg-dark/40 pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto w-full relative z-10 text-center flex flex-col items-center">
        
       <div className="animate-fade-up space-y-10 flex flex-col items-start md:items-center text-left md:text-center">
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl hover:border-primary/40 transition-colors">
        <span className="size-2 bg-primary rounded-full animate-pulse"></span>
        <span className="opacity-0 animate-text-reveal delay-1 text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
          Built beyond today
        </span>
      </div>
      
      <h1 className="opacity-0 animate-text-reveal delay-2 text-7xl md:text-9xl font-semibold leading-[0.9] text-white tracking-tighter max-w-4xl selection:bg-white selection:text-bg-dark">
          software built to{" "}
        <span className="text-gray-400 hover:text-primary transition-colors duration-500 cursor-default font-bold">
        endure.
        </span>
      </h1>

      <p className="opacity-0 animate-text-reveal delay-3 text-l md:text-2xl text-grey-400 font-regular max-w-2xl leading-relaxed md:mx-auto">
        Novatek crafts high-performance digital systems that are fast, secure, and ready for global enterprise scale.
      </p>

      <div className=" opacity-0 animate-text-reveal delay-4 flex flex-wrap items-center justify-start md:justify-center gap-6 pt-6">
        <a
          href="#contact"
          className="btn-primary relative overflow-hidden group min-w-[220px] text-center border border-primary/20 hover:border-white transition-all"
        >
          <span className="relative z-10">Start Your Project</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </a>

        <a
          href="#capabilities"
          className="flex items-center gap-3 text-white font-semibold hover:text-primary transition-all group"
        >
          <span className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-sm">play_arrow</span>
          </span>
          Capabilities
        </a>
      </div>
    </div>


        {/* Packed Pillars Section - Centered Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {pillars.map((pillar, i) => (
            <div 
              key={i} 
              className="p-8 rounded-3xl glass-card group hover:-translate-y-2 relative overflow-hidden text-center flex flex-col items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-bg-dark transition-all duration-500 relative z-10 shadow-inner group-hover:shadow-primary/50">
                <span className="material-symbols-outlined text-2xl font-light">{pillar.icon}</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{pillar.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
{/* 
        <div className="mt-20 flex items-center gap-4 text-zinc-600 font-mono text-[9px] tracking-[0.4em] uppercase animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <span className="h-px w-10 bg-zinc-800"></span>
          <span>Next Intake: February 2026</span>
          <span className="h-px w-10 bg-zinc-800"></span>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
