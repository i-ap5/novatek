
import React from 'react';

const Capabilities: React.FC = () => {
  const items = [
    {
      title: 'E-Commerce Solutions',
      label: 'Digital Retail',
      details: 'Turnkey online storefronts and payment integrations designed to drive sales and scale seamlessly.',
      icon: 'shopping_bag'
    },
    {
      title: 'AI Integration',
      label: 'Automation',
      details: 'Smart systems that handle complex tasks automatically, saving your team hundreds of hours.',
      icon: 'smart_toy'
    },
    {
      title: 'Seamless Scaling',
      label: 'Performance',
      details: 'Software that feels just as fast for 1 million users as it does for 10 users.',
      icon: 'rocket_launch'
    },
    {
      title: 'Reliable Security',
      label: 'Safety',
      details: 'Deep-level protection for your data and your users, built directly into the foundation.',
      icon: 'gpp_maybe'
    }
  ];

  return (
    <section id="capabilities" className="py-32 bg-bg-dark relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase block mb-6">Our Services</span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white">How we help you <br /> <span className="text-zinc-600 font-medium">thrive.</span></h2>
          </div>
          <p className="text-zinc-500 text-lg font-light max-w-sm border-l border-zinc-800 pl-8">
            Custom software development for businesses that want high-quality results and long-term growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <a
              key={idx}
              href="#services-detailed"
              className="group glass-card p-6 md:p-10 rounded-3xl flex flex-col h-full hover:bg-zinc-900/40 transition-all cursor-pointer"
            >
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-primary text-3xl font-light">{item.icon}</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{item.label}</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                  {item.details}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-primary/20 transition-colors">
                <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest group-hover:text-primary transition-colors">Learn more</span>
                <span className="material-symbols-outlined text-zinc-800 group-hover:text-primary transition-all group-hover:translate-x-1">arrow_forward</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
