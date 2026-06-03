import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectScope: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; projectScope?: string }>({});
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
    if (formData.phone.trim() && !/^[+]*[0-9\s-]{6,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Invalid phone number';
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
    setFormData({ name: '', email: '', phone: '', projectScope: '' });
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
            className="text-primary font-bold text-[10px] tracking-[0.6em] uppercase block mb-6 font-mono"
          >
            Connect Us
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 leading-none"
          >
            Let's <span className="text-zinc-600 font-light">talk.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-550 font-light text-base leading-relaxed mb-10 max-w-md"
          >
            Have a project in mind, want to work together, or just want to say hello? Fill out the form and we'll get back to you shortly.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-12">
            <div>                      
              <p className="text-zinc-650 font-mono text-[9px] tracking-[0.4em] uppercase mb-3">Inquiries</p>
              <a href="mailto:info@novateksolutions.in" className="text-xl md:text-2xl font-light text-white hover:text-primary transition-colors break-all">
                info@novateksolutions.in
              </a>
            </div>
            <div>
              <p className="text-zinc-650 font-mono text-[9px] tracking-[0.4em] uppercase mb-3">Location</p>
              <p className="text-xl md:text-2xl font-light text-white">Thanisandra / Bengaluru</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex flex-col justify-center"
        >
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
                  <div className={`group space-y-2 border-b pb-3 transition-colors duration-500 ${errors.name ? 'border-red-500/50' : 'border-white/5 focus-within:border-primary'}`}>
                    <label className="font-mono text-[9px] text-zinc-650 group-focus-within:text-primary transition-colors duration-500 uppercase tracking-widest flex justify-between">
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
                      className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-white p-0 text-base placeholder:text-zinc-700" 
                      placeholder="Type your name" 
                    />
                  </div>
                  
                  <div className={`group space-y-2 border-b pb-3 transition-colors duration-500 ${errors.email ? 'border-red-500/50' : 'border-white/5 focus-within:border-primary'}`}>
                    <label className="font-mono text-[9px] text-zinc-650 group-focus-within:text-primary transition-colors duration-500 uppercase tracking-widest flex justify-between">
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
                      className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-white p-0 text-base placeholder:text-zinc-700" 
                      placeholder="Enter email" 
                    />
                  </div>

                  <div className={`group space-y-2 border-b pb-3 transition-colors duration-500 md:col-span-2 ${errors.phone ? 'border-red-500/50' : 'border-white/5 focus-within:border-primary'}`}>
                    <label className="font-mono text-[9px] text-zinc-650 group-focus-within:text-primary transition-colors duration-500 uppercase tracking-widest flex justify-between">
                      <span>Phone Number (Optional)</span>
                      {errors.phone && <span className="text-red-500 font-mono lowercase normal-case tracking-normal">{errors.phone}</span>}
                    </label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-white p-0 text-base placeholder:text-zinc-700" 
                      placeholder="Enter phone number" 
                    />
                  </div>
                </div>
                
                <div className={`group space-y-2 border-b pb-3 transition-colors duration-500 ${errors.projectScope ? 'border-red-500/50' : 'border-white/5 focus-within:border-primary'}`}>
                  <label className="font-mono text-[9px] text-zinc-650 group-focus-within:text-primary transition-colors duration-500 uppercase tracking-widest flex justify-between">
                    <span>Project Scope</span>
                    {errors.projectScope && <span className="text-red-500 font-mono lowercase normal-case tracking-normal">{errors.projectScope}</span>}
                  </label>
                  <textarea 
                    value={formData.projectScope}
                    onChange={(e) => {
                      setFormData({ ...formData, projectScope: e.target.value });
                      if (errors.projectScope) setErrors({ ...errors, projectScope: undefined });
                    }}
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-white p-0 text-base h-24 resize-none placeholder:text-zinc-700" 
                    placeholder="Describe the challenge"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary text-white hover:text-bg-dark font-sans font-semibold text-xs tracking-wider py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-3 w-fit active:scale-95 disabled:opacity-50 cursor-pointer mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-xs">refresh</span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="material-symbols-outlined text-xs group-hover:translate-x-1.5 transition-transform">east</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-left py-12 flex flex-col justify-center space-y-6 relative z-10"
              >
                <div className="size-16 rounded-full border border-primary/30 flex items-center justify-center mb-4 bg-primary/5 shadow-lg shadow-primary/5">
                  <span className="material-symbols-outlined text-primary text-2xl">check</span>
                </div>
                <h3 className="text-3xl font-light text-white tracking-tight">Transmission Received</h3>
                <p className="text-zinc-500 text-sm max-w-sm leading-relaxed font-light">
                  Thank you. Our engineering team has received your query. A Lead Architect will reach out to you within 12 business hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="group border border-white/10 hover:border-primary bg-transparent text-white hover:text-bg-dark font-sans font-semibold text-xs tracking-wider py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-fit cursor-pointer"
                >
                  <span>Send another message</span>
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