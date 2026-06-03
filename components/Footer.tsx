
import React from 'react';
import { Link } from 'react-router-dom';

const logo = '/assets/noVaLogo.png';
const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-16 md:py-24 px-6 md:px-12 bg-bg-dark relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-16">
        <div className="col-span-2 space-y-6 md:space-y-8">
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
          <p className="text-base md:text-lg text-zinc-550 font-light max-w-sm leading-relaxed">
            Building the technical foundations for the next generation of industry leaders.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/company/novateksolutions" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-normal text-zinc-500 hover:text-primary transition-colors uppercase tracking-widest"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/novateksolutions/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-normal text-zinc-500 hover:text-primary transition-colors uppercase tracking-widest"
            >
              Instagram
            </a>
          </div>
        </div>
        
        <div className="col-span-1 space-y-4 md:space-y-6">
          <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-widest">Navigation</h4>
          <nav className="flex flex-col gap-3 md:gap-4">
            <Link className="text-xs md:text-sm text-zinc-500 hover:text-white transition-colors" to="/#home">Home</Link>
            <Link className="text-xs md:text-sm text-zinc-500 hover:text-white transition-colors" to="/#capabilities">Services</Link>
            <Link className="text-xs md:text-sm text-zinc-500 hover:text-white transition-colors" to="/portfolio">Portfolio</Link>
            <Link className="text-xs md:text-sm text-zinc-500 hover:text-white transition-colors" to="/products">Products</Link>
            <Link className="text-xs md:text-sm text-zinc-500 hover:text-white transition-colors" to="/#contact">Contact</Link>
          </nav>
        </div>

        <div className="col-span-1 space-y-4 md:space-y-6">
          <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-widest">Office</h4>
          <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed">
            Novatek Solutions<br/>
            107 J, Monarch Serenity <br /> 
            Thanisandra Main Road<br/>
            Bengaluru, Karnataka- 560077
          </p>
        </div>
      </div>
      
        <div className="max-w-[1400px] mx-auto mt-16 md:mt-24 pt-6 md:pt-8 border-t border-white/5
                flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6
                text-[9px] md:text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase">

            {/* Left block */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <span>Novatek © 2026 All rights reserved.</span>
              <span className="tracking-[0.15em]">
                Designed by{" "}
                <a
                  href="https://trowcode.com"
                  className="text-zinc-200 hover:text-primary transition-colors font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trowcode
                </a>
              </span>
            </div>
          </div>

    </footer>
  );
};

export default Footer;
