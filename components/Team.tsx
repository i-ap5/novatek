
import React from 'react';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const members: TeamMember[] = [
    {
      name: 'alex rivera',
      role: 'founder / lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      status: 'active'
    },
    {
      name: 'sarah chen',
      role: 'design head',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
      status: 'offline'
    },
    {
      name: 'marcus vane',
      role: 'security lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      status: 'active'
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <div>
            <span className="text-primary text-xs font-bold tracking-[0.5em] mb-4 block">curators / 02</span>
            <h2 className="text-5xl md:text-6xl font-extralight italic">the team.</h2>
          </div>
          <div className="max-w-md">
            <p className="text-zinc-500 font-light leading-relaxed">
              a collective of architects, engineers, and designers unified by a single obsession: building things that last.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-16">
          {members.map((member, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[4/5] bg-zinc-900 border border-border-light overflow-hidden mb-6 relative">
                <img 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                  src={member.image}
                />
                <div className={`absolute bottom-4 right-4 h-2 w-2 rounded-full ${
                  member.status === 'active' ? 'bg-primary shadow-[0_0_8px_#e4b538]' : 'bg-zinc-700'
                }`}></div>
              </div>
              <h4 className="text-sm font-medium">{member.name}</h4>
              <p className="text-[10px] text-zinc-600 tracking-widest mt-1 uppercase font-mono">{member.role}</p>
            </div>
          ))}

          {/* Open Role Card */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-zinc-900/50 border border-border-light border-dashed overflow-hidden mb-6 relative flex items-center justify-center p-8 text-center group-hover:bg-zinc-900 group-hover:border-primary/50 transition-all duration-300">
              <div className="space-y-4">
                <span className="text-primary material-symbols-outlined text-4xl font-thin group-hover:rotate-90 transition-transform">add</span>
                <p className="text-[10px] text-zinc-500 tracking-widest uppercase font-mono">open <br/> role</p>
              </div>
            </div>
            <h4 className="text-sm font-medium">join the lab</h4>
            <p className="text-[10px] text-zinc-600 tracking-widest mt-1 uppercase font-mono">view positions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
