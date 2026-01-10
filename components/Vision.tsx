
import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="border-t border-border-light">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="p-16 md:p-24 border-b lg:border-b-0 lg:border-r border-border-light flex flex-col justify-between aspect-square lg:aspect-auto">
          <span className="text-primary text-xs font-bold tracking-[0.5em] block uppercase">Vision</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mt-6">
            we build for the next <span className="text-primary font-medium">decade</span>, not the next quarter.
          </h2>
        </div>
        <div className="p-16 md:p-24 bg-zinc-900/5 space-y-12">
          <div className="space-y-6">
            <h4 className="text-white text-lg font-mono tracking-wider uppercase">meticulous engineering</h4>
            <p className="text-zinc-500 font-light leading-relaxed">
              our journey has always been about quality over volume. we limit our client intake to ensure every project receives the depth of focus required to achieve technical excellence.
            </p>
          </div>
          <div className="space-y-6 pt-12 border-t border-border-light">
            <h4 className="text-white text-lg font-mono tracking-wider uppercase">sustainable growth</h4>
            <p className="text-zinc-500 font-light leading-relaxed">
              by staying small and specialized, we maintain the agility to pivot with emerging technologies while preserving the stability of our core architectural principles.
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
