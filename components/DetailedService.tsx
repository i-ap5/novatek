
import React from 'react';

const DetailedServices: React.FC = () => {
  const services = [
    {
      id: '01',
      title: 'Web Engineering',
      description: 'High-performance, edge-first web applications built with Next.js, React, and Rust-based backends.',
      tech: ['Next.js', 'Rust', 'TypeScript', 'Edge Runtime', '+More'],
      icon: 'captive_portal'
    },
    {
      id: '02',
      title: 'Interface Design',
      description: 'System-driven UI/UX design focusing on architectural clarity, motion physics, and user efficiency.',
      tech: ['Figma', 'Motion', 'Design Systems', 'A11y', '+More' ],
      icon: 'palette'
    },
    {
      id: '03',
      title: 'Custom Software',
      description: 'Scalable enterprise solutions tailored to specific business logic, from ERPs to custom automation engines.',
      tech: ['Go', 'PostgreSQL', 'Microservices', 'Event-Driven', '+More'],
      icon: 'terminal'
    },
    {
      id: '04',
      title: 'Cloud Systems',
      description: 'Fault-tolerant infrastructure orchestration using Kubernetes and multi-cloud strategies.',
      tech: ['AWS', 'K8s', 'Terraform', 'CI/CD', '+More'],
      icon: 'cloud_done'
    },
    {
      id: '05',
      title: 'AI & Data',
      description: 'Integrating LLMs and machine learning pipelines into existing products for intelligent decision making.',
      tech: ['PyTorch', 'Gemini API', 'Vector DBs', 'Python', '+More'],
      icon: 'database'
    },
    {
      id: '06',
      title: 'Cyber Security',
      description: 'Zero-trust architecture implementation, security audits, and automated threat detection.',
      tech: ['Pentesting', 'IAM', 'Encryption', 'AuthN', '+More'],
      icon: 'shield_lock'
    }
  ];

  return (
    <section id="services-detailed" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <span className="text-primary font-mono text-[10px] tracking-[0.6em] uppercase block mb-6">Core Competencies</span>
            <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-none">
              Technical <br/> <span className="text-zinc-600 font-semibold">verticals.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light max-w-xs md:text-right mt-8 md:mt-0">
            A comprehensive suite of engineering disciplines designed for complex digital challenges.
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
              
              <p className="text-zinc-500 text-sm leading-relaxed font-light mb-12 h-20 overflow-hidden">
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
