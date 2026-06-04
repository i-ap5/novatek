import React from 'react';

const Approach: React.FC = () => {
  const capabilities = [
    {
      title: 'Online Stores',
      details: 'Storefronts and payment setups built to sell products and handle high traffic.',
      icon: 'shopping_bag'
    },
    {
      title: 'AI & Automation',
      details: 'AI features and smart systems that automate tasks to save your team time.',
      icon: 'smart_toy'
    },
    {
      title: 'Fast Performance',
      details: 'Websites and apps built to load fast on any device, for any number of users.',
      icon: 'rocket_launch'
    },
    {
      title: 'Secure Systems',
      details: 'Built-in protection to keep your company data and customer info completely safe.',
      icon: 'gpp_maybe'
    }
  ];

  const steps = [
    { id: '01', title: 'Listen', desc: 'We study your goals and talk through your ideas to figure out the best plan.' },
    { id: '02', title: 'Blueprint', desc: 'We map out the system design and how it will work before writing any code.' },
    { id: '03', title: 'Build', desc: 'We write clean code and launch using modern, automated setup tools.' },
    { id: '04', title: 'Test & Support', desc: 'We check everything for speed and security before handing it over to you.' }
  ];

  return (
    <section id="capabilities" className="py-24 md:py-32 bg-bg-dark relative overflow-hidden border-t border-border-light">
      {/* Background ambient lights */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-primary/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* 1. THE WHY (Philosophy) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-16">
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase block mb-6 font-mono">01 / The Why</span>
            <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              We build for the next <span className="bg-gradient-to-r from-primary to-yellow-800 bg-clip-text text-transparent font-medium">decade</span>, not the next quarter.
            </h3>
          </div>
          <div className="lg:col-span-7 space-y-10 pl-0 lg:pl-12 lg:border-l lg:border-white/5">
            <div>
              <h4 className="text-white text-lg font-medium mb-3">Focus on Quality</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                We take on only a few projects at a time. This means our team can focus 100% on your project and build it right.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-medium mb-3">Stay Flexible</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                As a small team, we adapt quickly. We use modern tools to keep your software stable, secure, and ready to grow.
              </p>
            </div>
          </div>
        </div>

        {/* 2. THE WHAT (Capabilities) - ZIG ZAG REVERSE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-16 border-t border-white/5">
          {/* Header on Right for Desktop */}
          <div className="lg:col-span-5 lg:order-2 pl-0 lg:pl-12">
            <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase block mb-6 font-mono">02 / The What</span>
            <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              What we are <br className="hidden md:block" />
              <span className="text-zinc-500 font-light">capable of.</span>
            </h3>
          </div>

          {/* Grid on Left for Desktop */}
          <div className="lg:col-span-7 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-8 pr-0 lg:pr-12 lg:border-r lg:border-white/5">
            {capabilities.map((item, idx) => (
              <div key={idx} className="group">
                <span className="material-symbols-outlined text-primary/60 text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.icon}
                </span>
                <h4 className="text-white text-base font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-zinc-400 font-light text-xs leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. THE HOW (Process) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start py-16 border-t border-white/5">
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase block mb-6 font-mono">03 / The How</span>
            <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              How we <br className="hidden md:block" />
              <span className="text-zinc-500 font-light">get it done.</span>
            </h3>
          </div>

          <div className="lg:col-span-7 space-y-12 pl-0 lg:pl-12 lg:border-l lg:border-white/5 relative">
            {/* Vertical line connecting steps (Desktop only) */}
            <div className="hidden sm:block absolute left-[63px] top-4 bottom-4 w-[1px] bg-white/5" />

            {steps.map((step) => (
              <div key={step.id} className="relative z-10 flex gap-6 group">
                <div className="size-8 rounded-full bg-bg-dark border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-400 group-hover:border-primary group-hover:text-primary transition-all duration-300 shrink-0 mt-0.5">
                  {step.id}
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Approach;
