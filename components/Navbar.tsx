
import React, { useState, useEffect } from 'react';
import logo from '../assets/moVaLogo.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#capabilities' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 flex items-center ${
      scrolled ? 'h-20 bg-bg-dark/80 backdrop-blur-2xl border-b border-white/5' : 'h-24 bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
<div className="size-10 rounded-xl flex items-center justify-center
                transition-all duration-500">
                      <img
              src={logo}
              alt="Novatek logo"
              className="w-full h-full object-contain"
            />
            {/* <span className="material-symbols-outlined text-bg-dark text-xl font-bold">architecture</span> */}
          </div>
          <span className="text-2xl font-medium font-urban tracking-tight                                                                                                                     q text-white group-hover:text-primary transition-colors">novatek</span>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end pr-6 border-r border-white/10">
            <span className="text-[10px] font-bold text-zinc-600 tracking-widest uppercase">System Status</span>
            <div className="flex items-center gap-2">
              <span className="size-1.5 bg-green-500 rounded-full"></span>
              <span className="text-[10px] font-bold text-green-500 uppercase">Operational</span>
            </div>
          </div>
          <a href="#contact" className="bg-white text-bg-dark px-6 py-3 text-xs font-bold rounded-full hover:bg-primary transition-all active:scale-95">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
