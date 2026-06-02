import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', projectScope: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; projectScope?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.projectScope.trim()) newErrors.projectScope = 'Project scope is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request latency
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', projectScope: '' });
  };

  return (
    <section className="py-24 md:py-32 lg:py-48 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
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
            className="text-5xl md:text-7xl font-light tracking-tight text-white mb-10 md:mb-12 leading-[0.9]"
          >
            Let's <span className="text-zinc-600 font-medium">talk.</span>
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
          className="bg-bg-surface/95 p-8 md:p-12 border border-white/10 relative min-h-[480px] flex flex-col justify-center"
        >
          {/* Decorative Icon */}
          <div className="absolute top-0 right-0 p-6 md:p-8 hidden sm:block">
            <span className="material-symbols-outlined text-primary/10 text-5xl md:text-6xl">chat_bubble</span>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-10 md:space-y-12 relative z-10" 
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                  <div className={`space-y-2 border-b pb-3 focus-within:border-primary transition-colors ${errors.name ? 'border-red-500/50' : 'border-zinc-800'}`}>
                    <label className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest flex justify-between">
                      <span>Name</span>
                      {errors.name && <span className="text-red-500 font-mono lowercase normal-case tracking-normal">{errors.name}</span>}
                    </label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className="w-full bg-transparent border-none focus:ring-0 text-white p-0 text-base md:text-lg placeholder:text-zinc-500" 
                      placeholder="Type your name" 
                    />
                  </div>
                  
                  <div className={`space-y-2 border-b pb-3 focus-within:border-primary transition-colors ${errors.email ? 'border-red-500/50' : 'border-zinc-800'}`}>
                    <label className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest flex justify-between">
                      <span>Email Address</span>
                      {errors.email && <span className="text-red-500 font-mono lowercase normal-case tracking-normal">{errors.email}</span>}
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className="w-full bg-transparent border-none focus:ring-0 text-white p-0 text-base md:text-lg placeholder:text-zinc-500" 
                      placeholder="Enter Email" 
                    />
                  </div>
                </div>
                
                <div className={`space-y-2 border-b pb-3 focus-within:border-primary transition-colors ${errors.projectScope ? 'border-red-500/50' : 'border-zinc-800'}`}>
                  <label className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest flex justify-between">
                    <span>Project Scope</span>
                    {errors.projectScope && <span className="text-red-500 font-mono lowercase normal-case tracking-normal">{errors.projectScope}</span>}
                  </label>
                  <textarea 
                    value={formData.projectScope}
                    onChange={(e) => {
                      setFormData({ ...formData, projectScope: e.target.value });
                      if (errors.projectScope) setErrors({ ...errors, projectScope: undefined });
                    }}
                    className="w-full bg-transparent border-none focus:ring-0 text-white p-0 text-base md:text-lg h-24 md:h-32 resize-none placeholder:text-zinc-500" 
                    placeholder="Describe the Infrastructure Challenge"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 md:py-8 bg-primary text-bg-dark font-bold text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase hover:bg-white transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-55"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-sm">refresh</span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 flex flex-col items-center justify-center space-y-6 relative z-10"
              >
                <div className="size-20 rounded-full border-2 border-primary flex items-center justify-center mb-4 bg-primary/10 shadow-[0_0_20px_rgba(228,181,56,0.2)] animate-pulse">
                  <span className="material-symbols-outlined text-primary text-4xl font-bold">check</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Transmission Received</h3>
                <p className="text-zinc-400 text-sm max-w-sm leading-relaxed font-light">
                  Thank you. Our engineering team has received your query. A Lead Architect will reach out to you within 12 business hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 border border-white/10 hover:border-primary/50 text-white hover:text-primary px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;