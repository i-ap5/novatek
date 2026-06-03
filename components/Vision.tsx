
import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="border-t border-border-light">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2">
        <div className="py-16 md:py-24 pr-0 lg:pr-16 pl-0 border-b lg:border-b-0 lg:border-r border-border-light flex flex-col justify-start min-h-[300px] lg:aspect-auto">
          <span className="text-primary font-bold text-[10px] tracking-[0.6em] uppercase block mb-6 font-mono">Vision</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
            we build for the next <span className="text-zinc-650 font-light">decade</span>, not the next quarter.
          </h2>
        </div>
        <div className="py-16 md:py-24 pl-0 lg:pl-16 pr-0 space-y-12">
          <div className="space-y-6">
            <h4 className="text-white text-lg font-sans font-semibold tracking-wide">Focus on Quality</h4>
            <p className="text-zinc-500 font-light leading-relaxed">
              We choose quality over quantity. We limit the number of projects we take on so that our engineering team can give your application the full focus and dedication it deserves.
            </p>
          </div>
          <div className="space-y-6 pt-12 border-t border-border-light">
            <h4 className="text-white text-lg font-sans font-semibold tracking-wide">Staying Agile</h4>
            <p className="text-zinc-500 font-light leading-relaxed">
              Being a specialized, focused team allows us to adopt new technologies quickly while keeping your systems stable, secure, and ready for long-term growth.
            </p>
            <a href="#capabilities" className="inline-flex items-center gap-4 group pt-4">
              <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">explore capabilities</span>
              <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-2 transition-transform">east</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
