import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const logo = '/assets/noVaLogo.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);

        // Track active section only on home page
        if (location.pathname === '/') {
          const sections = ['home', 'capabilities', 'process', 'contact'];
          let currentActive = 'home';

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
                currentActive = section;
                break;
              }
            }
          }
          setActiveSection(currentActive);
        } else {
          setActiveSection('');
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const links = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#capabilities' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Products', href: '/products' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/#contact' }
  ];

  const isActive = (linkHref: string) => {
    if (linkHref.startsWith('/#')) {
      const hash = linkHref.replace('/#', '');
      return location.pathname === '/' && activeSection === hash;
    }
    return location.pathname === linkHref;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 flex items-center ${
        scrolled || isMobileMenuOpen ? 'h-20 bg-bg-dark/95 backdrop-blur-2xl border-b border-white/5' : 'h-24 bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-20 flex items-center justify-between">
          <Link to="/#home" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="size-10 rounded-xl flex items-center justify-center transition-all duration-500">
              <img
                src={logo}
                alt="Novatek logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">Novatek</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map(link => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-sm font-medium transition-all relative group ${
                  isActive(link.href) ? 'text-primary' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Get in touch button */}
            <Link to="/#contact" className="hidden sm:inline-block bg-white text-bg-dark px-6 py-3 text-xs font-bold rounded-full hover:bg-primary transition-all active:scale-95">
              Get in touch
            </Link>

            {/* Mobile Menu Button (Hamburger) */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden size-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-white text-2xl transition-transform duration-300">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Fullscreen Overlay */}
      <div className={`fixed inset-0 z-[190] bg-bg-dark/98 backdrop-blur-3xl lg:hidden flex flex-col justify-center px-8 md:px-12 transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col space-y-8 text-left max-w-md mx-auto w-full">
          <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase block mb-4">Navigation</span>
          {links.map((link, idx) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl md:text-3xl font-light tracking-wide transition-all duration-300 transform ${
                isActive(link.href) ? 'text-primary' : 'text-white hover:text-primary'
              } ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div className={`pt-8 border-t border-white/10 flex flex-col gap-6 transform transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: `${links.length * 75}ms` }}>
            <p className="text-zinc-500 text-xs font-mono">Thanisandra / Bengaluru</p>
            <Link 
              to="/#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-primary text-bg-dark py-4 text-xs font-bold rounded-full uppercase tracking-widest hover:bg-white transition-all duration-300"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
