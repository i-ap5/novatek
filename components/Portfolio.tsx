import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

// Assets (compressed JPGs — resized to 1200px wide, ~540KB total vs 5MB raw)
const almadina1 = '/assets/almadina1.jpg';
const almadina2 = '/assets/almadina2.jpg';
const foodworld = '/assets/www.foodworldgroup.com_.jpg';

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  date: string;
  description: string;
  tech: string[];
  icon: string;
  color: string;
  problem: string;
  solution: string;
  plainEnglishInfrastructure: string;
  url: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Al Madina Hypermarket — Group E-Commerce",
    category: "Group E-Commerce",
    client: "Al Madina Group",
    date: "Q3 2025",
    url: "https://almadinahypermarket.com/",
    image: almadina1,
    description: "Al Madina Hypermarket is a prominent grocery retailer with multiple outlets across the Gulf. We engineered their group-wide headless commerce web ecosystem, uniting retail inventory, regional catalogs, and delivery logistics under a single web domain.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Shopify Plus"],
    icon: "storefront",
    color: "from-emerald-500/10 via-transparent to-transparent",
    problem: "Al Madina Group required a high-speed, SEO-optimized group storefront to route web users dynamically to regional portals, while syncing real-time inventory and pricing catalogs across multiple borders.",
    solution: "Deployed a high-performance Next.js headless frontend using static-site generation (SSG) for catalog SEO and server-side rendering (SSR) for real-time checkout and price feeds. Linked to Shopify Plus and legacy POS databases via custom sync workers.",
    plainEnglishInfrastructure: "A globally distributed content delivery network (CDN) routing traffic to a high-speed headless Next.js frontend on Vercel. Product catalogs are synchronized in real-time from localized store databases directly into Shopify Plus APIs to ensure pricing consistency across countries."
  },
  {
    id: "02",
    title: "Al Madina UAE — Live Delivery & App Ecosystem",
    category: "Logistics & Mobile",
    client: "Al Madina UAE",
    date: "Q1 2026",
    url: "https://www.almadinahypermarket.ae/",
    image: almadina2,
    description: "The dedicated UAE digital portal powering express grocery delivery across Abu Dhabi, Dubai, and Sharjah. Built with real-time geospatial route tracking, custom mobile driver apps, and automatic dispatch algorithms.",
    tech: ["React Native", "Go", "PostgreSQL", "PostGIS", "Docker"],
    icon: "local_shipping",
    color: "from-blue-500/10 via-transparent to-transparent",
    problem: "Logistical dispatching was bottlenecked by manual driver assignment, leading to delays in delivery times and customer complaints during peak hours.",
    solution: "Engineered a backend auto-dispatch engine in Go with PostGIS spatial indexing. It groups neighboring orders, optimizes travel routes dynamically, and pushes coordinates instantly to the driver companion application.",
    plainEnglishInfrastructure: "A real-time geospatial coordinate engine running on highly available Go microservices. Leverages PostGIS databases to run lightning-fast route optimizations, pushing delivery dispatches directly to drivers via automated background push queues."
  },
  {
    id: "03",
    title: "Food World Group — Enterprise Supply Chain",
    category: "Enterprise Portal",
    client: "Food World Group",
    date: "Q2 2026",
    url: "https://www.foodworldgroup.com/",
    image: foodworld,
    description: "Food World Group operates a vast network of supermarkets, department stores, and food production units. We designed and built their enterprise digital infrastructure, supply chain orchestration layer, and global talent portal.",
    tech: ["React", "TypeScript", "Node.js", "AWS Lambda", "MongoDB"],
    icon: "domain",
    color: "from-amber-500/10 via-transparent to-transparent",
    problem: "Siloed systems across international retail, wholesale supply chains, and employee management made operations slow and data analysis inconsistent.",
    solution: "Architected a unified micro-frontend corporate portal with AWS serverless backends to manage supplier catalogs, track wholesale inventory, and aggregate global HR metrics into real-time operational panels.",
    plainEnglishInfrastructure: "A serverless micro-services architecture running on AWS Lambda. Connects isolated retail, distribution warehouse, and internal HR APIs into a unified corporate portal utilizing secure single-sign-on (SSO) protocols."
  }
];

const Portfolio: React.FC<{ teaser?: boolean }> = ({ teaser = false }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const handleProjectClick = (project: Project) => {
    if (teaser) {
      navigate('/portfolio');
    } else {
      setActiveProject(project);
    }
  };

  return (
    <div className={teaser ? "" : "pt-12"}>
      <section id="portfolio" className="py-32 bg-bg-dark relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
            <div className="max-w-2xl">
              <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase block mb-6">Our Work</span>
              <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white">
                Featured <br /> <span className="text-zinc-600 font-medium">projects.</span>
              </h2>
            </div>
            <p className="text-zinc-500 text-lg font-light max-w-sm border-l border-zinc-800 pl-8">
              Real-world solutions we've delivered for businesses across industries, driving growth and operational excellence.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {projects.map((project) => (
              <div
                key={project.title}
                onClick={() => handleProjectClick(project)}
                className="group relative cursor-pointer glass-card rounded-3xl overflow-hidden flex flex-col justify-between min-h-[480px]"
              >
                {/* Visual Accent Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                
                {/* Blended Browser Mockup: edge-to-edge at the top of the card */}
                <div className="w-full relative aspect-video bg-zinc-950 border-b border-white/10 flex flex-col overflow-hidden">
                  {/* Simulated URL bar and dots */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-white/5 z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-[#ff5f56]/80"></span>
                      <span className="size-1.5 rounded-full bg-[#ffbd2e]/80"></span>
                      <span className="size-1.5 rounded-full bg-[#27c93f]/80"></span>
                    </div>
                    <div className="text-[8px] font-mono text-zinc-500 bg-black/40 px-3 py-0.5 rounded border border-white/5 select-none truncate max-w-[180px] text-center">
                      {project.url.replace('https://', '').replace('www.', '')}
                    </div>
                    <span className="material-symbols-outlined text-[10px] text-zinc-600">lock</span>
                  </div>
                  
                  {/* Viewport screenshot */}
                  <div className="flex-1 w-full overflow-hidden relative bg-zinc-950">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700 ease-out" 
                    />
                    
                    {/* Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                    
                    {/* Dynamic light reflection sweep on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
                  </div>
                </div>

                {/* Text Content Area: padded */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-primary/60">{project.id} //</span>
                        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">{project.category}</span>
                      </div>
                      <span className="material-symbols-outlined text-primary/30 group-hover:text-primary group-hover:scale-110 transition-all text-2xl font-light">
                        {project.icon}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-medium text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
                    <div className="flex gap-1.5">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="px-2 py-0.5 border border-white/5 bg-zinc-900/50 text-[8px] font-mono tracking-wider text-zinc-500 uppercase rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-primary transition-colors">
                      View Case Study
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Teaser CTA Button */}
          {teaser && (
            <div className="mt-16 flex justify-center">
              <Link 
                to="/portfolio" 
                className="group border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary text-white hover:text-bg-dark font-mono text-[10px] tracking-widest uppercase py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg shadow-primary/5"
              >
                Explore All Case Studies
                <span className="material-symbols-outlined text-xs group-hover:translate-x-1.5 transition-transform">east</span>
              </Link>
            </div>
          )}
        </div>

        {/* Case Study Detail Modal - z-index updated to z-[150] to prevent blocking navigation menu */}
        <AnimatePresence>
          {!teaser && activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[150] bg-bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 pt-24"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="bg-bg-surface border border-primary/20 max-w-4xl w-full rounded-3xl p-6 md:p-8 overflow-y-auto max-h-[80vh] shadow-2xl relative text-zinc-300"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/5">
                  <div>
                    <span className="text-primary font-mono text-xs tracking-widest block uppercase mb-1">{activeProject.category}</span>
                    <h3 className="text-xl md:text-2xl font-medium text-white">{activeProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="size-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">close</span>
                  </button>
                </div>

                {/* Main side-by-side desktop layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                  
                  {/* Left Column: Image & Info (col-span-5) */}
                  <div className="md:col-span-5 space-y-6">
                    {/* Browser Mockup Frame */}
                    <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl flex flex-col">
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-900 border-b border-white/5">
                        <span className="size-2 rounded-full bg-red-500/80"></span>
                        <span className="size-2 rounded-full bg-yellow-500/80"></span>
                        <span className="size-2 rounded-full bg-green-500/80"></span>
                      </div>
                      <div className="w-full aspect-video overflow-hidden">
                        <img 
                          src={activeProject.image} 
                          alt={activeProject.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>

                    {/* Metadata stack */}
                    <div className="bg-zinc-950/40 p-4 rounded-xl border border-white/5 space-y-3.5 text-xs font-light">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-500 font-mono uppercase tracking-wider text-[10px]">Client</span>
                        <span className="text-zinc-300 font-medium">{activeProject.client}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-500 font-mono uppercase tracking-wider text-[10px]">Timeline</span>
                        <span className="text-zinc-300 font-medium">{activeProject.date}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-500 font-mono uppercase tracking-wider text-[10px]">Website</span>
                        <a
                          href={activeProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-1 font-mono text-xs"
                        >
                          Visit Site <span className="material-symbols-outlined text-[10px]">open_in_new</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Challenge, Approach, Tech, and System Architecture (col-span-7) */}
                  <div className="md:col-span-7 space-y-5 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase mb-1">Challenge</h4>
                        <p className="text-zinc-300 font-light leading-relaxed text-xs md:text-sm">{activeProject.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase mb-1">Our Approach</h4>
                        <p className="text-zinc-300 font-light leading-relaxed text-xs md:text-sm">{activeProject.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase mb-1">System Infrastructure</h4>
                        <p className="text-zinc-300 font-light leading-relaxed text-xs md:text-sm">{activeProject.plainEnglishInfrastructure}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <h4 className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tech.map(t => (
                          <span key={t} className="text-[9px] font-mono bg-zinc-900 border border-white/5 px-2.5 py-0.5 rounded text-zinc-400">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                  <a
                    href="#contact"
                    onClick={() => setActiveProject(null)}
                    className="btn-primary text-xs py-2.5 px-6 shadow-none"
                  >
                    Discuss Similar Project
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Portfolio;
