
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { id: '01', title: 'Discovery', desc: 'Analyzing existing debt and ecosystem requirements.', tags: ['SC_AUDIT', 'MAPPING'] },
    { id: '02', title: 'Logic', desc: 'Drafting deterministic blueprints and data-flow logic.', tags: ['BLUEPRINT', 'WAF'] },
    { id: '03', title: 'Deploy', desc: 'Atomic CI/CD deployment with zero-downtime rollback.', tags: ['K8S', 'RUST'] },
    { id: '04', title: 'Harden', desc: 'Post-deployment security audits and stress testing.', tags: ['FEYNMAN', 'STRESS'] }
  ];

  return (
    <div className="py-48 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4 lg:sticky lg:top-48 h-fit">
            <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase block mb-8">SEQUENCE</span>
            <h2 className="text-7xl font-medium tracking-tighter text-white mb-8">Logic <br/> <span className="text-zinc-600 font-bold">Flow.</span></h2>
            <p className="text-zinc-500 font-light leading-relaxed mb-12">
              Our engineering lifecycle is defined by deterministic precision. Every phase is a gate that must be validated by automated protocols.
            </p>
            {/* <div className="p-6 border border-primary/20 bg-primary/5">
              <span className="font-mono text-[9px] text-primary tracking-widest uppercase">system_note</span>
              <p className="text-[11px] text-zinc-400 mt-2">Active phases are monitored via 24/7 telemetry feeds.</p>
            </div> */}
          </div>

          <div className="lg:col-span-8 space-y-px bg-border-light border border-border-light">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-bg-dark p-16 group hover:bg-zinc-900/50 transition-all duration-500 relative">
                <div className="absolute top-0 right-0 p-8">
                  <span className="text-[8rem] font-black text-white/5 group-hover:text-primary/10 transition-colors leading-none">{step.id}</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-xl text-zinc-500 font-light max-w-lg mb-12">
                    {step.desc}
                  </p>
                  <div className="flex gap-4">
                    {step.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 border border-zinc-800 text-[9px] font-mono tracking-widest text-zinc-600 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
