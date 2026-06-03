
import React from 'react';

const Capabilities: React.FC = () => {
  const items = [
    {
      title: 'E-Commerce Solutions',
      label: 'Digital Retail',
      details: 'Turnkey online storefronts and payment integrations designed to drive sales and scale seamlessly.',
      icon: 'shopping_bag',
      tags: ['Shopify', 'Stripe', 'Custom Checkout', 'Analytics']
    },
    {
      title: 'AI Integration',
      label: 'Automation',
      details: 'Smart systems that handle complex tasks automatically, saving your team hundreds of hours.',
      icon: 'smart_toy',
      tags: ['Gemini API', 'LLM Agents', 'Workflows', 'Automation']
    },
    {
      title: 'Seamless Scaling',
      label: 'Performance',
      details: 'Software that feels just as fast for 1 million users as it does for 10 users.',
      icon: 'rocket_launch',
      tags: ['Edge Runtime', 'Caching', 'Database Optimizations']
    },
    {
      title: 'Reliable Security',
      label: 'Safety',
      details: 'Deep-level protection for your data and your users, built directly into the foundation.',
      icon: 'gpp_maybe',
      tags: ['AES-256', 'SSL/TLS', 'IAM Security', 'Compliance']
    }
  ];

  return (
    <section id="capabilities" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-[10px] tracking-[0.6em] uppercase block mb-6 font-mono">Our Capabilities</span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-none">
              How we help you <br /> 
              <span className="text-zinc-600 font-light">thrive.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light max-w-sm border-l border-zinc-800 pl-8 leading-relaxed text-sm md:text-base">
            Custom software development for businesses that want high-quality results, seamless usability, and long-term growth.
          </p>
        </div>

        {/* 2x2 Typography-First Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
          {items.map((item, idx) => (
            <a
              key={idx}
              href="#services-detailed"
              className="group block space-y-6 transition-all duration-300"
            >
              {/* Top Accent Line & Number */}
              <div className="flex items-center gap-4">
                <span className="text-primary font-mono text-xs font-light">0{idx + 1}</span>
                <div className="h-[1px] bg-primary/20 flex-grow group-hover:bg-primary transition-all duration-500 origin-left" />
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-zinc-600 text-xl font-light group-hover:text-primary transition-colors duration-300">
                  {item.icon}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-zinc-500 font-light text-sm md:text-base leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                {item.details}
              </p>

              {/* Tags (bullet style) */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-[10px] font-mono text-zinc-600">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="flex items-center gap-2">
                    {tIdx > 0 && <span className="size-1 bg-zinc-800 rounded-full" />}
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;
