
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-48">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div>
          <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase block mb-6">Connect Us</span>
          <h2 className="text-7xl md:text-8xl font-medium tracking-tighter text-white mb-12">Let's  <span className="text-zinc-600 font-bold">talk.</span></h2>
          <div className="space-y-12">
            <div>                      
              <p className="text-zinc-600 font-mono text-[9px] tracking-[0.4em] uppercase mb-4">Inquiries</p>
              <a href="mailto:info@novateksolutions.in" className="text-2xl font-light text-white hover:text-primary transition-colors">info@novateksolutions.in</a>
            </div>
            <div>
              <p className="text-zinc-600 font-mono text-[9px] tracking-[0.4em] uppercase mb-4">Location</p>
              <p className="text-2xl font-light text-white">Thanisandra / Bengaluru</p>
            </div>
          </div>
        </div>

        <div className="bg-white/[0.02] p-12 border border-border-light backdrop-blur-3xl relative">
          <div className="absolute top-0 right-0 p-8">
            <span className="material-symbols-outlined text-primary/20 text-6xl">chat_bubble</span>
          </div>
          <form className="space-y-12 relative z-10">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-2 border-b border-zinc-800 pb-4">
                <label className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">Name</label>
                <input type="text" className="w-full bg-transparent border-none focus:ring-0 text-white p-0 text-lg placeholder:text-zinc-800" placeholder="Type your name" />
              </div>
              <div className="space-y-2 border-b border-zinc-800 pb-4">
                <label className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-transparent border-none focus:ring-0 text-white p-0 text-lg placeholder:text-zinc-800" placeholder="Enter Email" />
              </div>
            </div>
            <div className="space-y-2 border-b border-zinc-800 pb-4">
              <label className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">Project Scope</label>
              <textarea className="w-full bg-transparent border-none focus:ring-0 text-white p-0 text-lg h-32 resize-none placeholder:text-zinc-800" placeholder="Describe the Infrastructure Challenge"></textarea>
            </div>
            <button className="w-full py-8 bg-primary text-bg-dark font-bold tracking-[0.5em] uppercase hover:bg-white transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
