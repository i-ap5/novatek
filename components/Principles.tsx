
import React from 'react';

const Principles: React.FC = () => {
  const items = [
    {
      icon: 'token',
      title: 'Radical Simplicity',
      description: 'we believe that beauty is the removal of the unnecessary. every line of code serves a purpose.'
    },
    {
      icon: 'architecture',
      title: 'Structural Integrity',
      description: 'software is a building. we ensure the foundations are deep enough to support the future.'
    },
    {
      icon: 'memory',
      title: 'Performance First',
      description: 'milliseconds matter. our engineering culture is centered around extreme optimization.'
    },
    {
      icon: 'all_inclusive',
      title: 'Infinite Scale',
      description: 'we build systems that grow with you, moving seamlessly from 100 users to 100 million.'
    }
  ];

  return (
    <section className="border-b border-border-light bg-zinc-900/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div key={idx} className={`p-12 group border-border-light hover:bg-zinc-800/20 transition-all duration-500 ${
              idx < 3 ? 'border-b md:border-b-0 md:border-r' : ''
            }`}>
              <span className="text-primary material-symbols-outlined mb-8 text-3xl font-light group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
