import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DetailedServices: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const services = [
    {
      id: '01',
      title: 'Web Development',
      description: 'Fast, modern web applications built using Next.js and React that look great and load instantly on all devices.',
      tech: ['Next.js', 'React', 'TypeScript', 'Edge Runtime', 'Tailwind']
    },
    {
      id: '02',
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly layouts and animations designed to make your software intuitive and easy to navigate.',
      tech: ['Figma', 'Motion', 'Design Systems', 'A11y', 'Prototyping']
    },
    {
      id: '03',
      title: 'Custom Software',
      description: 'Bespoke software systems built to match your workflows, from internal databases to automated business portals.',
      tech: ['Go', 'PostgreSQL', 'Databases', 'APIs', 'Docker']
    },
    {
      id: '04',
      title: 'E-commerce Platforms',
      description: 'High-converting online stores built on modern platforms or custom backends, fully optimized for checkouts, payments, and speed.',
      tech: ['Shopify', 'Stripe', 'WooCommerce', 'Analytics', 'GraphQL']
    },
    {
      id: '05',
      title: 'AI Integration',
      description: 'Integrating smart AI features and data models to automate manual tasks and power smart features.',
      tech: ['Gemini API', 'Vector DBs', 'Python', 'LLMs', 'Prompt Eng']
    },
    {
      id: '06',
      title: 'Cybersecurity',
      description: 'Thorough security audits and encryption protocols to protect your business systems and client data.',
      tech: ['Audits', 'IAM', 'Encryption', 'AuthN', 'SSL/TLS']
    }
  ];

  return (
    <section id="service" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-[10px] tracking-[0.6em] uppercase block mb-6 font-mono">Core Competencies</span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-none">
              What we <br /> <span className="text-primary font-light">build.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light max-w-sm border-l border-zinc-800 pl-8 leading-relaxed text-sm md:text-base">
            A full suite of design and development services to solve your technical and business challenges.
          </p>
        </div>

        {/* Accordion List with Hover Expand Effect */}
        <div className="divide-y divide-white/5 border-t border-b border-white/5">
          {services.map((service, idx) => {
            const isOpen = idx === activeIdx;
            return (
              <div 
                key={idx} 
                className="py-6 transition-all duration-300"
                onMouseEnter={() => setActiveIdx(idx)}
              >
                {/* Accordion Trigger Header */}
                <div
                  onClick={() => setActiveIdx(isOpen ? -1 : idx)}
                  className="flex justify-between items-center cursor-pointer group"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-[10px] font-mono transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-zinc-700'}`}>
                      {service.id}
                    </span>
                    <h3 className={`text-xl md:text-2xl font-light tracking-tight transition-all duration-300 ${isOpen ? 'text-white translate-x-2' : 'text-zinc-500 group-hover:text-zinc-350 group-hover:translate-x-1'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <span className={`material-symbols-outlined text-sm transition-all duration-300 ${isOpen ? 'text-primary translate-x-0 opacity-100 rotate-90' : 'text-zinc-650 opacity-50 group-hover:text-zinc-450 group-hover:translate-x-1'}`}>
                    chevron_right
                  </span>
                </div>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[38px] md:pl-[56px] pr-4 pt-4 pb-2">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                          {/* Description (8 columns on md/lg) */}
                          <div className="md:col-span-8">
                            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          {/* Tech Badges / Right side details (4 columns on md/lg) */}
                          <div className="md:col-span-4 flex flex-wrap md:flex-col gap-2 items-start md:border-l md:border-white/5 md:pl-6">
                            <div className="text-[9px] font-mono tracking-[0.2em] text-zinc-500 font-bold uppercase hidden md:block mb-1 select-none">
                              Technologies
                            </div>
                            <div className="flex flex-wrap gap-1.5 w-full">
                              {service.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 bg-white/[0.02] border border-white/[0.05] text-[8px] font-mono tracking-widest text-zinc-500 uppercase rounded select-none"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DetailedServices;
