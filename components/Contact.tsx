import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section className="py-24 md:py-32 lg:py-48 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-6"
          >
            Connect Us
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-10 md:mb-12 leading-[0.9]"
          >
            Let's <span className="text-zinc-600 font-bold">talk.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-12">
            <div>                      
              <p className="text-zinc-600 font-mono text-[9px] tracking-[0.4em] uppercase mb-3">Inquiries</p>
              <a href="mailto:info@novateksolutions.in" className="text-xl md:text-2xl font-light text-white hover:text-primary transition-colors break-all">
                info@novateksolutions.in
              </a>
            </div>
            <div>
              <p className="text-zinc-600 font-mono text-[9px] tracking-[0.4em] uppercase mb-3">Location</p>
              <p className="text-xl md:text-2xl font-light text-white">Thanisandra / Bengaluru</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] p-8 md:p-12 border border-white/10 backdrop-blur-3xl relative"
        >
          {/* Decorative Icon - Hidden on small mobile to save space */}
          <div className="absolute top-0 right-0 p-6 md:p-8 hidden sm:block">
            <span className="material-symbols-outlined text-primary/10 text-5xl md:text-6xl">chat_bubble</span>
          </div>

          <form className="space-y-10 md:space-y-12 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <div className="space-y-2 border-b border-zinc-800 pb-3 focus-within:border-primary transition-colors">
                <label className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">Name</label>
                <input type="text" className="w-full bg-transparent border-none focus:ring-0 text-white p-0 text-base md:text-lg placeholder:text-zinc-800" placeholder="Type your name" />
              </div>
              <div className="space-y-2 border-b border-zinc-800 pb-3 focus-within:border-primary transition-colors">
                <label className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-transparent border-none focus:ring-0 text-white p-0 text-base md:text-lg placeholder:text-zinc-800" placeholder="Enter Email" />
              </div>
            </div>
            
            <div className="space-y-2 border-b border-zinc-800 pb-3 focus-within:border-primary transition-colors">
              <label className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">Project Scope</label>
              <textarea className="w-full bg-transparent border-none focus:ring-0 text-white p-0 text-base md:text-lg h-24 md:h-32 resize-none placeholder:text-zinc-800" placeholder="Describe the Infrastructure Challenge"></textarea>
            </div>

            <button className="w-full py-6 md:py-8 bg-primary text-bg-dark font-bold text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase hover:bg-white transition-all active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;