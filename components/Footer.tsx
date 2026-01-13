
import React from 'react';
import logo from '../assets/noVaLogo.png';
const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-24 px-8 md:px-12 bg-bg-dark relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-zinc-800 rounded-lg flex items-center justify-center">
              {/* <span className="text-primary text-lg material-symbols-outlined">architecture</span> */}
               <img
              src={logo}
              alt="Novatek logo"
              className="w-6 h-6 object-contain"
            />
            </div>
            <span className="text-white font-bold tracking-tighter text-2xl">Novatek</span>
          </div>
          <p className="text-lg text-zinc-500 font-light max-w-sm leading-relaxed">
            Building the technical foundations for the next generation of industry leaders.
          </p>
          <div className="flex gap-4">
            {['LinkedIn', 'Twitter', 'GitHub'].map(social => (
              <a key={social} href="#" className="text-xs font-bold text-zinc-600 hover:text-primary transition-colors uppercase tracking-widest">{social}</a>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-widest">Navigation</h4>
          <nav className="flex flex-col gap-4">
            <a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#home">About</a>
            <a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#capabilities">Services</a>
            <a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#process">Process</a>
            <a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#contact">Contact</a>
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-widest"> Office</h4>
          <p className="text-sm text-zinc-500 font-light leading-relaxed">
            Novatek Solutions<br/>
            107 J, Monarch Serenity <br /> 
            Thanisandra Main Road<br/>
            Bengaluru, Karnataka- 560077
          </p>
        </div>
      </div>
      
        <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-white/5
                flex flex-col md:flex-row justify-between items-center gap-6
                text-[10px] text-zinc-700 font-bold tracking-[0.2em] uppercase">

            {/* Left block */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <span>Novatek © 2026 All rights reserved.</span>
              <span className="tracking-[0.15em]">
                Designed by{" "}
                <a
                  href="https://trowcode.com"
                  className="hover:text-zinc-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trowcode
                </a>
              </span>
            </div>

            {/* Right links */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-zinc-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-zinc-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

    </footer>
  );
};

export default Footer;
