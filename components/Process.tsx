import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { id: '01', title: 'Discovery', desc: 'We analyze your business goals, target audience, and existing technical systems.', tags: ['Planning', 'Audit'] },
    { id: '02', title: 'Design', desc: 'We create clear system blueprints and map out the visual user flows.', tags: ['Blueprint', 'Workflow'] },
    { id: '03', title: 'Development', desc: 'We write clean, optimized code and launch using automated, secure systems.', tags: ['Develop', 'Launch'] },
    { id: '04', title: 'Testing', desc: 'We run thorough security checks and load tests to ensure complete stability.', tags: ['Security', 'Testing'] }
  ];

  return (
    <section id="process" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-primary/[0.01] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-[10px] tracking-[0.6em] uppercase block mb-6 font-mono">Our Process</span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-none">
              How we <br /> 
              <span className="text-zinc-600 font-light">work.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light max-w-sm border-l border-zinc-800 pl-8 leading-relaxed text-sm md:text-base">
            We follow a structured, step-by-step approach to guarantee that every system we build is high-performance, stable, and ready to scale.
          </p>
        </div>

        {/* 4-Column Timeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="group block space-y-6 transition-all duration-300"
            >
              {/* Top Accent Line & Number */}
              <div className="flex items-center gap-4">
                <span className="text-primary font-mono text-xs font-light">{step.id}</span>
                <div className="h-[1px] bg-primary/20 flex-grow group-hover:bg-primary transition-all duration-500 origin-left" />
              </div>

              {/* Step Title */}
              <h3 className="text-2xl font-light text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 font-light text-sm md:text-base leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                {step.desc}
              </p>

              {/* Tags (bullet style) */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 text-[9px] font-mono text-zinc-650">
                {step.tags.map((tag, tIdx) => (
                  <span key={tag} className="flex items-center gap-1.5">
                    {tIdx > 0 && <span className="size-1 bg-zinc-800 rounded-full" />}
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
