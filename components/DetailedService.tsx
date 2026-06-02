
import React from 'react';

const DetailedServices: React.FC = () => {
  const services = [
    {
      id: '01',
      title: 'Web Development',
      description: 'Fast, modern web applications built using Next.js and React that look great and load instantly on all devices.',
      tech: ['Next.js', 'React', 'TypeScript', 'Edge Runtime', '+More'],
      icon: 'captive_portal'
    },
    {
      id: '02',
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly layouts and animations designed to make your software intuitive and easy to navigate.',
      tech: ['Figma', 'Motion', 'Design Systems', 'A11y', '+More' ],
      icon: 'palette'
    },
    {
      id: '03',
      title: 'Custom Software',
      description: 'Bespoke software systems built to match your workflows, from internal databases to automated business portals.',
      tech: ['Go', 'PostgreSQL', 'Databases', 'APIs', '+More'],
      icon: 'terminal'
    },
    {
      id: '04',
      title: 'E-commerce Platforms',
      description: 'High-converting online stores built on modern platforms or custom backends, fully optimized for checkouts, payments, and speed.',
      tech: ['Shopify', 'Stripe', 'WooCommerce', 'Analytics', '+More'],
      icon: 'shopping_bag'
    },
    {
      id: '05',
      title: 'AI Integration',
      description: 'Integrating smart AI features and data models to automate manual tasks and power smart features.',
      tech: ['Gemini API', 'Vector DBs', 'Python', 'LLMs', '+More'],
      icon: 'database'
    },
    {
      id: '06',
      title: 'Cybersecurity',
      description: 'Thorough security audits and encryption protocols to protect your business systems and client data.',
      tech: ['Audits', 'IAM', 'Encryption', 'AuthN', '+More'],
      icon: 'shield_lock'
    }
  ];

  return (
    <section id="services-detailed" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <span className="text-primary font-mono text-[10px] tracking-[0.6em] uppercase block mb-6">Core Competencies</span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white">
               What we <br/> <span className="text-zinc-600 font-medium">build.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light max-w-xs md:text-right mt-8 md:mt-0">
            A full suite of design and development services to solve your technical and business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative p-12 bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all duration-700 overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 size-16 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-[10px] text-zinc-700 group-hover:text-primary transition-colors">{service.id} //</span>
                <span className="material-symbols-outlined text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all text-3xl font-light">
                  {service.icon}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h3>
              
              <p className="text-zinc-500 text-sm leading-relaxed font-light mb-12 h-24 overflow-auto">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tech.map(t => (
                  <span key={t} className="px-2 py-1 border border-white/5 bg-zinc-900/50 text-[8px] font-mono tracking-widest text-zinc-600 uppercase group-hover:border-primary/20 group-hover:text-zinc-400 transition-all">
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover highlight line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-6 group"
          >
            {/* <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase group-hover:text-white transition-colors">
              Request Full Capability Deck
            </span> */}
            {/* <div className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-sm group-hover:text-bg-dark">download</span>
            </div> */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
