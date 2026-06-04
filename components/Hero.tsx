
import React from 'react';
import { Link } from 'react-router-dom';
import Aurora from './Aurora';


const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-24 relative overflow-hidden bg-bg-dark">
      {/* BG */}
      <Aurora />
      
      {/* Subtle overlay to ensure text readability against the flare */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg-dark/20 via-transparent to-bg-dark/40 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-20 relative z-10 text-center flex flex-col items-center">
        
       <div className="animate-fade-up space-y-10 flex flex-col items-start md:items-center text-left md:text-center">
      <div className="inline-flex items-center gap-3">
        <span className="h-[1px] w-6 bg-primary/30"></span>
        <span className="opacity-0 animate-text-reveal delay-1 text-[9px] font-mono tracking-[0.35em] text-primary uppercase">
          Built beyond today
        </span>
        <span className="h-[1px] w-6 bg-primary/30 hidden md:inline-block"></span>
      </div>
      
      <h1 className="opacity-0 animate-text-reveal delay-2 text-7xl sm:text-8xl md:text-9xl font-semibold leading-[0.9] text-white tracking-tighter max-w-4xl selection:bg-white selection:text-bg-dark">
          software built to{" "}
        <span className="text-gray-400 hover:text-primary transition-colors duration-500 cursor-default font-bold">
        endure.
        </span>
      </h1>

      <p className="opacity-0 animate-text-reveal delay-3 text-lg md:text-2xl text-zinc-400 font-regular max-w-2xl leading-relaxed md:mx-auto">
        We build fast, secure, and custom software designed to help your business run smoothly and scale effortlessly.
      </p>

      <div className=" opacity-0 animate-text-reveal delay-4 flex flex-wrap items-center justify-start md:justify-center gap-6 pt-6">
        <a
          href="#contact"
          className="btn-primary relative overflow-hidden group min-w-[220px] text-center border border-primary/20 hover:border-white transition-all"
        >
          <span className="relative z-10">Start Your Project</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </a>

        <Link
          to="/portfolio"
          className="flex items-center gap-3 text-white font-semibold hover:text-primary transition-all group"
        >
          <span className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-sm">play_arrow</span>
          </span>
          Portfolio
        </Link>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Hero;
