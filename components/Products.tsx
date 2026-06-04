import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Stat {
  value: string;
  suffix: string;
  label: string;
}

interface Product {
  id: string;
  tag: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  impact: string;
  stats: Stat[];
  features: string[];
}

const products: Product[] = [
  {
    id: "01",
    tag: "HEALTHCARE SYSTEMS - 01",
    title: "SmartClinic — Intelligent Practice Management Suite",
    shortDescription: "A clinic booking system that makes scheduling easy for patients, includes a high-contrast mode for elderly visitors, and helps manage urgent walk-ins.",
    problem: "Healthcare clinics struggle with high patient no-shows, complex booking interfaces that confuse older patients, inefficient prescription generation, and manual management of critical emergency availability slots.",
    solution: "A unified practice suite featuring a 30-minute interval booking grid, automated patient reminders, a visual 'Elder Mode' with simplified navigation, and a clinical AI prescription module with doctor-in-the-loop validation.",
    impact: "Reduces patient no-shows by 90% via proactive notification logs. Accelerates prescription time using AI recommendations with complete clinical oversight. Improves booking completion rates for visual/cognitively challenged patients.",
    stats: [
      { value: "-90%", suffix: "No-Shows", label: "Automated alerts" },
      { value: "30m", suffix: "Interval", label: "Intelligent grid" },
      { value: "22pt", suffix: "Font Size", label: "Elder accessibility mode" }
    ],
    features: [
      "Intelligent Grid: 30-min slots with hidden emergency reserves",
      "Elder Mode: High contrast, 22pt typography, simple wizard",
      "AI Prescriptions: Diagnosis-to-medication suggesting with clinical logs"
    ]
  },
  {
    id: "02",
    tag: "LANGUAGE & AUDIO - 04",
    title: "Sentiment Analysis — Ecommerce Review Intelligence",
    shortDescription: "A smart dashboard that reads thousands of online store reviews and instantly groups them so you can see what customers love or complain about.",
    problem: "An ecommerce platform struggled to understand what customers were most talking about across thousands of product reviews. Manual reading was unscalable, leaving negative sentiment and recurring complaint topics undetected until they affected ratings.",
    solution: "Built a sentiment analysis pipeline to categorise reviews by topic, surface the most discussed subjects and classify sentiment per category. Integrated with the product review feed to deliver real-time topic trend dashboards for merchandising and support teams.",
    impact: "Negative sentiment detection response improved by 50%, enabling faster interventions. Actionable topic insights drove a 15% increase in campaign success rates and helped product teams prioritise improvements based on what customers talked about most.",
    stats: [
      { value: "50%", suffix: "Faster", label: "Negative detection" },
      { value: "+15%", suffix: "Campaigns", label: "Success rate lift" },
      { value: "Topic", suffix: "Clusters", label: "Auto-categorised" }
    ],
    features: [
      "Ecommerce: Product review feed",
      "Topic Categorisation: Most-talked subjects",
      "Trend Dashboard: Real-time insights"
    ]
  },
  {
    id: "03",
    tag: "LANGUAGE & AUDIO - 03",
    title: "Echo Link — Offline RAG Document Extraction",
    shortDescription: "A secure search assistant that lets your team chat with documents and get answers from contracts or reports without uploading files to the internet.",
    problem: "Organizations handling large volumes of unstructured documents such as contracts, invoices and legal agreements struggled with manual extraction that was slow, error-prone and inconsistent across varying document formats.",
    solution: "Fine-tuned LLM deployed offline for document extraction across tables, key-value pairs and long-form text. Integrated with existing document management systems via LLM APIs and added human-in-the-loop validation pipelines for edge cases.",
    impact: "Document processing time reduced by 70%, enabling faster operational cycles. Labor costs cut by up to 40% through automation. Data extraction accuracy improved from 85% to 98%, significantly reducing compliance risks.",
    stats: [
      { value: "70%", suffix: "Faster", label: "Processing time" },
      { value: "40%", suffix: "Cost Cut", label: "Labor automation" },
      { value: "98%", suffix: "Accuracy", label: "Up from 85%" }
    ],
    features: [
      "Multi-format Docs: Contracts, invoices, legal",
      "Offline Deployment: Air-gapped LLM pipeline",
      "RAG Architecture: Context-aware retrieval"
    ]
  },
  {
    id: "04",
    tag: "VOICE AGENTS - 02",
    title: "Hospitality Voice — AI Support & Sales Agent",
    shortDescription: "An automated phone assistant that answers customer calls, books guest stays, and helps sales teams manage reservation requests.",
    problem: "Hospitality chains handling multi-property guest calls struggled with high volumes, inconsistent service and agents tied up on repetitive booking and availability queries. Sales teams had no scalable way to run proactive outreach across large lead pipelines.",
    solution: "Built a voice AI agent handling inbound support calls with NLU intent resolution, TTS response generation and CRM-API integration. Paired with an AI sales assistant for proactive lead outreach, qualification and conversion tracking across the hospitality chain.",
    impact: "1,847 calls handled daily at 91.4% automation rate. AI sales assistant engaged 1,284 leads at 18.4% conversion rate with $48k projected revenue. Human agents freed to handle escalations only, improving service quality and sales efficiency at scale.",
    stats: [
      { value: "91.4%", suffix: "Automation", label: "Voice AI agent" },
      { value: "1,284", suffix: "Leads", label: "18.4% conv. rate" },
      { value: "$48k", suffix: "Revenue", label: "Q3 projected" }
    ],
    features: [
      "Voice AI: Control Center call routing",
      "Live Activity Feed: Real-time caller intent",
      "AI Sales Assistant: Lead conversion at scale"
    ]
  }
];

const sentimentClusters: Record<string, string> = {
  "Overall Performance": "AI Consensus: High performance yields a 96% positive rating. Users highlight the M3 processor's ability to handle demanding compilation scripts and Docker configurations without stuttering.",
  "Battery Life": "AI Consensus: Outstanding endurance noted. Multiple buyers report a stable 18+ hour lifespan under continuous load, eliminating regular charging dependencies.",
  "Screen Quality": "AI Consensus: The 500-nit Liquid Retina display gets highly rated for color precision and outdoor clarity. Ideal for visual validation workflows.",
  "Portability": "AI Consensus: The sleek chassis design is praised for travelers. It offers the lightweight benefits of a tablet but compiles code like a workspace.",
  "M3 Chip Speed": "AI Consensus: Benchmark scores show a 32% increase in speed over prior chips. Build times are cut in half for enterprise web platforms.",
  "Build Quality": "AI Consensus: Excellent durability feedback. Space black anodized finish resists smudges and keys remain highly tactile after months of intensive use."
};

const ProductsTeaser: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="products" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-primary/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-[10px] tracking-[0.6em] uppercase block mb-6 font-mono">AI Suite</span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-none">
              Proprietary <br />
              <span className="text-zinc-600 font-light">products.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light max-w-sm border-l border-zinc-800 pl-8 leading-relaxed text-sm md:text-base">
            Advanced language, audio, and reasoning pipelines packaged into production-ready software suites.
          </p>
        </div>

        {/* Vertical Editorial Directory List */}
        <div className="border-t border-white/5">
          {products.map((p, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={p.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group border-b border-white/5 py-10 transition-all duration-300 hover:bg-white/[0.01] px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
              >
                <Link
                  to="/products"
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center cursor-pointer"
                >
                  {/* Index Number */}
                  <div className="col-span-1 md:col-span-1 flex items-center gap-2">
                    <span className="text-zinc-650 font-mono text-sm group-hover:text-primary transition-colors duration-300">
                      {p.id}
                    </span>
                    <span className={`size-1 bg-primary rounded-full transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
                  </div>

                  {/* Title and Category Tag */}
                  <div className="col-span-1 md:col-span-5 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl md:text-4xl font-light text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                        {p.title.split(" — ")[0]}
                      </h3>

                      {/* Micro badge for SmartClinic */}
                      {p.id === "01" && isHovered && (
                        <span className="text-[8px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="material-symbols-outlined text-[10px]">medical_services</span> Elder Mode
                        </span>
                      )}

                      {/* Micro rating for Sentiment Analysis */}
                      {p.id === "02" && isHovered && (
                        <span className="text-[8px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full">★ 4.8</span>
                      )}

                      {/* Micro document count for Echo Link */}
                      {p.id === "03" && isHovered && (
                        <span className="text-[8px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="material-symbols-outlined text-[10px]">description</span> RAG
                        </span>
                      )}

                      {/* Micro Waveform Icon for Hospitality Voice */}
                      {p.id === "04" && isHovered && (
                        <div className="flex items-center gap-0.5 h-3">
                          <span className="w-[1.5px] bg-primary h-full animate-[pulse_1s_infinite]"></span>
                          <span className="w-[1.5px] bg-primary h-[60%] animate-[pulse_0.8s_infinite_100ms]"></span>
                          <span className="w-[1.5px] bg-primary h-[80%] animate-[pulse_1.2s_infinite_200ms]"></span>
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block">
                      {p.tag.split(" - ")[0]}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="col-span-1 md:col-span-4">
                    <p className="text-zinc-500 font-light text-sm md:text-base leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                      {p.shortDescription}
                    </p>
                  </div>

                  {/* Key Impact Statistic */}
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start md:items-end">
                    <span className="text-2xl font-light text-primary font-mono leading-none mb-1">
                      {p.stats[0].value}
                    </span>
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest text-left md:text-right">
                      {p.stats[0].label.replace("detection", "detect")}
                    </span>
                  </div>
                </Link>

                {/* Smooth Expanding Specs & Features */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-48 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                    }`}
                >
                  <div className="hidden md:block md:col-span-1" /> {/* Spacer */}
                  <div className="col-span-1 md:col-span-11 flex flex-wrap gap-2 text-[9px] font-mono">
                    {p.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="border border-white/5 bg-zinc-900/40 text-zinc-400 px-3 py-1 rounded-full hover:border-primary/10 transition-colors"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <Link
            to="/products"
            className="group border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary text-white hover:text-bg-dark font-sans font-semibold text-xs tracking-wider py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg shadow-primary/5"
          >
            Explore our products
            <span className="material-symbols-outlined text-xs group-hover:translate-x-1.5 transition-transform">east</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

// 2. FULL EDITORIAL VERTICAL SCROLL WORKSPACE COMPONENT (FOR DEDICATED ROUTE)
const ProductsWorkspace: React.FC = () => {
  // Sentiment Analysis mockup state
  const [selectedCluster, setSelectedCluster] = useState("Overall Performance");

  // Echo Link states
  const [activeDoc, setActiveDoc] = useState("Saudi_Oil_Annual_Report_2024.pdf");
  const [chatHistory, setChatHistory] = useState([
    {
      role: 'user',
      text: "What were the key crude oil production milestones in Saudi Arabia for 2024?"
    },
    {
      role: 'assistant',
      ref: "Saudi_Oil_Annual_Report_2024.pdf Page 5 - Production Overview",
      text: "In 2024, Saudi Arabia maintained its position as the world's leading crude oil exporter, sustaining average daily production of 9.6 million barrels per day. The Kingdom's Ghawar field continued to..."
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Hospitality Voice states
  const [activeCalls, setActiveCalls] = useState(24);
  const [callsToday, setCallsToday] = useState(1847);
  const [simulationActive, setSimulationActive] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([
    "System initialized.",
    "Pipeline: Ready to resolve guest calls."
  ]);

  // SmartClinic states
  const [urgentSymptom, setUrgentSymptom] = useState(false);
  const [elderModeActive, setElderModeActive] = useState(false);

  // Simulate Hospitality calls in background
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (simulationActive) {
      interval = setInterval(() => {
        setActiveCalls(prev => Math.max(15, prev + Math.floor(Math.random() * 5) - 2));
        setCallsToday(prev => prev + 1);
        const logEvents = [
          "Incoming Call: Booking request routing...",
          "Resolved via Voice-AI: Checkout date extended.",
          "Incoming Call: High priority escalations to Desk.",
          "Resolved via CRM-API: Booking slot locked."
        ];
        const randomLog = logEvents[Math.floor(Math.random() * logEvents.length)];
        setSimulationLogs(prev => [randomLog, ...prev.slice(0, 3)]);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [simulationActive]);

  // Handle suggested question selection in Echo Link
  const handleQuestionClick = (qText: string, refDoc: string, refText: string) => {
    if (isTyping) return;
    setIsTyping(true);

    setChatHistory(prev => [...prev, { role: 'user', text: qText }]);

    setTimeout(() => {
      setIsTyping(false);
      setChatHistory(prev => [...prev, {
        role: 'assistant',
        ref: refDoc,
        text: refText
      }]);
    }, 1200);
  };

  const handleDocClick = (docName: string) => {
    setActiveDoc(docName);
    const docQueries: Record<string, { q: string, ref: string, ans: string }> = {
      "Saudi_Oil_Annual_Report_2024.pdf": {
        q: "What were the key crude oil production milestones in Saudi Arabia for 2024?",
        ref: "Saudi_Oil_Annual_Report_2024.pdf Page 5",
        ans: "In 2024, Saudi Arabia maintained its position as the world's leading crude oil exporter, sustaining average daily production of 9.6 million barrels per day. The Kingdom's Ghawar field continued to..."
      },
      "ME_Upstream_Production_Q4_2024.pdf": {
        q: "Show summary statistics for Q4 2024 upstream production.",
        ref: "ME_Upstream_Production_Q4_2024.pdf Page 3 - Q4 Telemetry",
        ans: "Q4 production averaged 8.9M barrels per day. Rig counts stabilized at 112 active deployments with refinery throughput up by 2.4%."
      },
      "Saudi_Refinery_Operations_2024.pdf": {
        q: "What is the processing efficiency for downstream assets?",
        ref: "Saudi_Refinery_Operations_2024.pdf Page 14 - Downstream Efficiency",
        ans: "Refinery operations showed a processing efficiency increase of 4.2% in 2024. Downstream utilization reached a record 94% average."
      },
      "GCC_Energy_Sustainability_Report.pdf": {
        q: "What is the green energy transition status for 2024?",
        ref: "GCC_Energy_Sustainability_Report.pdf Page 8 - ESG Transition",
        ans: "Renewable energy integration in the GCC power grid saw a record 45% capacity expansion in 2024, driven primarily by PV solar projects."
      },
      "Vision2030_Energy_Strategy_KSA.pdf": {
        q: "What are the carbon reduction targets under KSA Vision 2030?",
        ref: "Vision2030_Energy_Strategy_KSA.pdf Page 45 - Carbon Goals",
        ans: "The targets mandate a reduction of 278 million tons of carbon dioxide equivalent per annum by 2030, deploying massive solar and wind grids."
      }
    };

    const target = docQueries[docName];
    if (target) {
      handleQuestionClick(target.q, target.ref, target.ans);
    }
  };

  const renderInteractiveMockup = (idx: number) => {
    if (idx === 0) {
      // SmartClinic Practice Management Simulator (Minimal, Simple)
      return (
        <div className="flex-1 flex flex-col justify-between text-zinc-300 font-sans text-xs w-full max-w-full overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center pb-2.5 border-b border-white/5 mb-3">
            <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">SmartClinic Intake Console</span>
            <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1.5 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              SYSTEM ACTIVE
            </span>
          </div>

          {/* Central Workspace Card */}
          <div className={`p-3 rounded-2xl border transition-all duration-300 flex-1 flex flex-col justify-between mb-3 min-h-0 ${
            elderModeActive ? 'bg-white text-black border-black font-bold text-sm' : 'bg-white/[0.01] border-white/5 text-zinc-400'
          }`}>
            {elderModeActive ? (
              <div className="space-y-4 font-sans font-bold text-center py-4">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 block uppercase font-mono">Elder Accessibility Mode</span>
                <h4 className="text-xl font-black text-black leading-tight">CHOOSE DATE</h4>
                <div className="flex gap-2 justify-center pt-2">
                  <button className="border-2 border-black bg-black text-white px-4 py-2.5 text-xs font-black uppercase tracking-wider hover:bg-zinc-800 transition-colors">
                    Today
                  </button>
                  <button className="border-2 border-black bg-white text-black px-4 py-2.5 text-xs font-black uppercase tracking-wider hover:bg-zinc-100 transition-colors">
                    Tomorrow
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 min-h-0">
                <div className="flex justify-between items-center text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                  <span>30-Minute Schedule Log</span>
                  <span>Patient Intake</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-zinc-950 p-2.5 border border-white/5 rounded-xl text-[10px] font-mono">
                    <span className="text-zinc-400">09:30 AM — Standard Check-in</span>
                    <span className="text-zinc-550">Scheduled</span>
                  </div>
                  <div className="flex justify-between items-center bg-zinc-950 p-2.5 border border-white/5 rounded-xl text-[10px] font-mono">
                    <span className="text-zinc-400">10:30 AM — Patient Consult</span>
                    <span className="text-zinc-550">Active</span>
                  </div>
                  <div className={`flex justify-between items-center p-2.5 border rounded-xl text-[10px] font-mono transition-all duration-300 ${
                    urgentSymptom 
                      ? 'bg-red-500/10 border-red-500/30 text-red-400' 
                      : 'bg-zinc-950/20 border-dashed border-zinc-800 text-zinc-650'
                  }`}>
                    <span>11:00 AM — Emergency Slot</span>
                    <span className={urgentSymptom ? "text-red-400 animate-pulse font-bold" : "text-zinc-600"}>
                      {urgentSymptom ? "Unlocked & Available" : "Emergency Reserve Locked"}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Micro Stats Footer inside the card */}
            {!elderModeActive && (
              <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-zinc-600 w-full min-w-0">
                <span>AI PRESCRIPTION: SIGNED & AUDITED</span>
                <span className="text-primary font-bold">90% NO-SHOW REDUCTION</span>
              </div>
            )}
          </div>

          {/* Simple Control Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setUrgentSymptom(!urgentSymptom)}
              className={`flex-1 py-2.5 rounded-xl text-[9px] font-mono font-bold tracking-wider uppercase transition-all duration-300 border ${
                urgentSymptom
                  ? 'bg-red-500/10 border-red-500/30 text-red-400'
                  : 'bg-white/5 border-white/10 hover:border-red-500/20 text-zinc-500 hover:text-red-400'
              }`}
            >
              {urgentSymptom ? "Clear Urgent Mode" : "Urgent Symptom Trigger"}
            </button>

            <button
              onClick={() => setElderModeActive(!elderModeActive)}
              className={`flex-1 py-2.5 rounded-xl text-[9px] font-mono font-bold tracking-wider uppercase transition-all duration-300 border ${
                elderModeActive
                  ? 'bg-black border-2 border-black text-white hover:bg-zinc-800'
                  : 'bg-white/5 border-white/10 hover:border-primary/40 text-primary'
              }`}
            >
              Elder Theme: {elderModeActive ? "ON" : "OFF"}
            </button>
          </div>
        </div>
      );
    }

    if (idx === 1) {
      // Sentiment Analysis mockup
      return (
        <div className="flex-1 flex flex-col justify-between text-zinc-300 font-sans text-xs w-full max-w-full overflow-hidden">
          {/* Header */}
          <div className="flex flex-wrap justify-between items-center gap-2 pb-3 border-b border-white/5 mb-4">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase min-w-0 truncate">Review Intelligence Feed</span>
            <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1.5 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              LIVE RUNNING
            </span>
          </div>

          <div className="flex-1 flex flex-col sm:grid sm:grid-cols-12 gap-4 overflow-hidden min-w-0 w-full">
            {/* Left Part: Score & AI Analysis */}
            <div className="col-span-12 sm:col-span-7 space-y-4 min-w-0 w-full">
              {/* Score */}
              <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                <span className="text-3xl font-light text-white font-mono">4.8</span>
                <div className="flex flex-col">
                  <div className="flex text-primary text-sm font-bold">★★★★★</div>
                  <span className="text-[10px] text-zinc-500 font-mono">Based on 147 reviews</span>
                </div>
              </div>

              {/* AI Summary */}
              <div className="bg-zinc-900/40 border border-white/5 p-3 rounded-xl space-y-1.5 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-[2px] bg-primary w-1/3"></div>
                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">interactive consensus</span>
                <p className="text-[10px] text-zinc-400 font-light leading-relaxed h-[85px] overflow-y-auto scrollbar-thin transition-all duration-300">
                  {sentimentClusters[selectedCluster]}
                </p>
              </div>
            </div>

            {/* Right Part: Key Clusters & Visuals */}
            <div className="col-span-12 sm:col-span-5 space-y-3 min-w-0 w-full">
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">click to analyze</span>
              <div className="space-y-1 h-[120px] sm:h-[155px] overflow-y-auto pr-1 scrollbar-thin">
                {[
                  { label: "Overall Performance", count: 21 },
                  { label: "Battery Life", count: 24 },
                  { label: "Screen Quality", count: 19 },
                  { label: "Portability", count: 17 },
                  { label: "M3 Chip Speed", count: 14 },
                  { label: "Build Quality", count: 8 }
                ].map((tag) => (
                  <button
                    key={tag.label}
                    onClick={() => setSelectedCluster(tag.label)}
                    className={`flex justify-between items-center text-[9px] w-full text-left border px-2 py-1.5 rounded-lg transition-all ${selectedCluster === tag.label
                        ? 'bg-primary/10 border-primary/30 text-white font-semibold'
                        : 'bg-white/[0.01] hover:bg-white/[0.03] border-white/5 text-zinc-550'
                      }`}
                  >
                    <span className="truncate">{tag.label}</span>
                    <span className="font-mono text-primary bg-primary/5 px-1.5 py-0.5 rounded text-[8px]">{tag.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer details */}
          <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-2 justify-between items-center text-[9px] font-mono text-zinc-600 w-full min-w-0">
            <span className="truncate flex-1 text-left">Active Cluster: {selectedCluster}</span>
            <span className="text-primary font-bold shrink-0">96.4% Accuracy Rating</span>
          </div>
        </div>
      );
    }

    if (idx === 2) {
      // Echo Link mockup (Offline RAG)
      return (
        <div className="flex-1 flex flex-col text-zinc-300 font-sans text-xs w-full max-w-full overflow-hidden">
          {/* Main Layout Grid */}
          <div className="flex-1 flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-4 overflow-hidden h-full w-full min-w-0">
            {/* Left Panel: Document Picker */}
            <div className="col-span-12 sm:col-span-4 sm:border-r border-white/5 flex flex-col pr-0 sm:pr-2 min-h-0 min-w-0 w-full mb-3 sm:mb-0">
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">air-gapped document index</span>
              <div className="flex-1 overflow-y-auto space-y-1 h-[75px] sm:h-auto scrollbar-thin">
                {[
                  "Saudi_Oil_Annual_Report_2024.pdf",
                  "ME_Upstream_Production_Q4_2024.pdf",
                  "Saudi_Refinery_Operations_2024.pdf",
                  "GCC_Energy_Sustainability_Report.pdf",
                  "Vision2030_Energy_Strategy_KSA.pdf"
                ].map((docName) => (
                  <button
                    key={docName}
                    onClick={() => handleDocClick(docName)}
                    className={`w-full text-left p-1.5 rounded transition-all text-[8px] font-mono truncate border flex items-center gap-1.5 ${activeDoc === docName
                        ? 'bg-primary/10 border-primary/20 text-white'
                        : 'bg-white/[0.01] hover:bg-white/[0.03] border-white/5 text-zinc-500'
                      }`}
                  >
                    <span className="material-symbols-outlined text-[9px] shrink-0">description</span>
                    <span className="truncate">{docName}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Panel: Simulated Chat Workspace */}
            <div className="col-span-12 sm:col-span-8 flex flex-col justify-between h-full pl-0 sm:pl-2 min-h-0 min-w-0 w-full">
              <div className="flex-1 overflow-y-auto space-y-2 mb-2 pr-1 scrollbar-thin h-[100px] sm:h-[135px]">
                {chatHistory.map((chat, index) => (
                  <div key={index} className={`flex flex-col space-y-1 ${chat.role === 'user' ? 'items-end' : 'items-start'}`}>
                    {chat.role === 'assistant' && chat.ref && (
                      <div className="text-[7px] font-mono text-primary flex items-center gap-1 px-1 max-w-full">
                        <span className="material-symbols-outlined text-[10px] text-zinc-650 shrink-0">bookmark</span>
                        <span className="truncate">{chat.ref}</span>
                      </div>
                    )}
                    <div className={`text-[10px] p-2.5 rounded-2xl max-w-[95%] font-light leading-relaxed ${chat.role === 'user'
                        ? 'bg-primary/10 border border-primary/20 text-zinc-300 rounded-tr-none'
                        : 'bg-white/[0.02] border border-white/5 text-zinc-400 rounded-tl-none'
                      }`}>
                      {chat.text}
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex-col items-start space-y-1">
                    <span className="text-[8px] font-mono text-zinc-605">Assistant querying index...</span>
                    <div className="bg-white/[0.02] border border-white/5 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Suggested Followups */}
              <div className="pt-2 border-t border-white/5 space-y-1.5">
                <span className="text-[8px] font-mono tracking-wider text-zinc-650 uppercase block">suggested questions</span>
                <div className="space-y-1 h-[45px] overflow-y-auto scrollbar-none">
                  {[
                    {
                      q: "What is the proven hydrocarbon reserve estimate?",
                      ref: "Saudi_Oil_Annual_Report_2024.pdf Page 12",
                      ans: "As of late 2024, the region's proven hydrocarbon reserves are estimated at 267.2 billion barrels of oil equivalent."
                    },
                    {
                      q: "Which fields had the highest production increase?",
                      ref: "ME_Upstream_Production_Q4_2024.pdf Page 3",
                      ans: "The Safaniya offshore field recorded the highest increase, stepping up by 150,000 bpd following modernization."
                    }
                  ].map((f, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuestionClick(f.q, f.ref, f.ans)}
                      className="text-[8px] text-primary/80 hover:text-primary leading-tight truncate block text-left w-full transition-colors cursor-pointer"
                    >
                      ↳ {f.q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Bar */}
              <div className="mt-3 flex gap-2 w-full min-w-0">
                <input
                  disabled
                  type="text"
                  placeholder="Ask anything about your documents..."
                  className="flex-1 bg-zinc-900 border border-white/5 p-2 rounded-xl text-[10px] text-zinc-400 placeholder:text-zinc-600 focus:outline-none min-w-0 w-full"
                />
                <button className="bg-primary text-bg-dark text-[9px] font-bold px-3 py-2 rounded-xl font-mono active:scale-95 transition-all shrink-0">
                  Ask
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (idx === 3) {
      // Hospitality Voice mockup
      return (
        <div className="flex-1 flex flex-col justify-between text-zinc-300 font-sans text-xs w-full max-w-full overflow-hidden">
          {/* Top KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 w-full min-w-0">
            {[
              { label: "Active Calls", value: activeCalls, sub: "Live queue" },
              { label: "Calls Today", value: callsToday, sub: "+12% vs yest" },
              { label: "Avg Duration", value: "2:34", sub: "Secs" },
              { label: "Automation", value: "91.4%", sub: "Resolution" }
            ].map((kpi, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/5 p-2 rounded-xl text-center min-w-0">
                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block mb-0.5 truncate">{kpi.label}</span>
                <span className="text-xs font-semibold text-white font-mono transition-all duration-300 truncate">{kpi.value}</span>
                <span className="text-[8px] text-zinc-650 block mt-0.5 truncate">{kpi.sub}</span>
              </div>
            ))}
          </div>

          {/* Main body: Flow graph & Agent */}
          <div className="flex-1 flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-4 overflow-hidden min-w-0 w-full">
            {/* Flow Visualization & Interactive Logger */}
            <div className="col-span-12 sm:col-span-6 bg-zinc-900/30 border border-white/5 p-3 rounded-2xl flex flex-col justify-between h-full mb-4 sm:mb-0 min-w-0 w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">simulation logs</span>
                <button
                  onClick={() => setSimulationActive(!simulationActive)}
                  className={`px-2 py-0.5 rounded text-[8px] font-mono border transition-all ${simulationActive
                      ? 'bg-red-500/10 border-red-500/30 text-red-400'
                      : 'bg-primary/10 border-primary/30 text-primary'
                    }`}
                >
                  {simulationActive ? "STOP" : "START"}
                </button>
              </div>

              {/* Live Console Output */}
              <div className="flex-1 bg-zinc-950 p-2 rounded-lg border border-white/5 font-mono text-[8px] text-zinc-400 overflow-y-auto space-y-1 h-[100px] scrollbar-thin">
                {simulationLogs.map((log, idx) => (
                  <div key={idx} className="truncate">
                    <span className="text-zinc-650">&gt;</span> {log}
                  </div>
                ))}
              </div>
            </div>

            {/* AI Sales Agent details */}
            <div className="col-span-12 sm:col-span-6 bg-zinc-900/30 border border-white/5 p-3 rounded-2xl flex flex-col justify-between h-full min-w-0 w-full">
              <div className="space-y-3 min-w-0">
                <div className="flex items-center gap-2 pb-1 border-b border-white/5 min-w-0">
                  <div className="size-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-primary shrink-0">MT</div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] text-white block leading-tight font-medium truncate">Marcus Thorne</span>
                    <span className="text-[8px] text-zinc-500 block leading-tight truncate">Director of Ops</span>
                  </div>
                </div>

                {/* Lead Snippet */}
                <div className="bg-zinc-950 p-2 rounded-lg border border-white/5 text-[9px] text-zinc-400 font-light leading-relaxed h-[45px] overflow-y-auto scrollbar-thin">
                  "Hello Marcus! I noticed TechFlow scaled engineering by 40%..."
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 text-[9px] font-mono">
                <div className="bg-white/[0.01] p-1.5 border border-white/5 rounded">
                  <span className="text-zinc-650 block">LEADS</span>
                  <span className="text-white font-bold">1,284</span>
                </div>
                <div className="bg-white/[0.01] p-1.5 border border-white/5 rounded">
                  <span className="text-zinc-650 block">CONV.</span>
                  <span className="text-white font-bold">18.4%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer details */}
          <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-2 justify-between items-center text-[9px] font-mono text-zinc-650 w-full min-w-0">
            <span className="truncate flex-1 text-left">Active Workspace: Hospitality Voice</span>
            <span className="text-primary font-bold animate-pulse shrink-0">$48k Q3 Projected</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-bg-dark min-h-screen text-zinc-300 w-full max-w-full overflow-hidden">

      {/* 1. Header Hero section */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-20 pt-28 sm:pt-36 pb-12 sm:pb-16 relative">
        <div className="absolute top-10 left-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/5 pb-10 gap-8">
          <div>
            <span className="text-primary font-bold text-[10px] tracking-[0.6em] uppercase block mb-6 font-mono">PROPRIETARY SYSTEMS</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white">
              The AI <span className="text-zinc-650 font-medium">Suite.</span>
            </h1>
          </div>
          <p className="text-zinc-400 text-base md:text-lg font-light max-w-xl border-l border-zinc-800 pl-8 leading-relaxed lg:mb-1">
            State-of-the-art telemetry, document querying, and voice automation workflows engineered for high-availability enterprise environments.
          </p>
        </div>
      </div>

      {/* 2. Vertical list of products with high-end editorial separation */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-20 pb-32 space-y-20 sm:space-y-36">
        {products.map((p, idx) => {
          const isAlternate = idx % 2 !== 0;

          return (
            <div
              key={p.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center relative py-8 sm:py-12 border-b border-white/5 last:border-0 w-full max-w-full min-w-0 overflow-hidden`}
            >
              {/* Product specific background glowing orb — hidden on mobile to prevent overflow */}
              <div className={`absolute -top-10 ${isAlternate ? 'left-10' : 'right-10'} w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full blur-[120px] pointer-events-none hidden sm:block ${idx === 0 ? 'bg-emerald-500/5' : idx === 1 ? 'bg-primary/5' : 'bg-blue-500/5'
                }`}></div>

              {/* Details column */}
              <div className={`col-span-1 lg:col-span-5 flex flex-col justify-center min-w-0 w-full ${isAlternate ? 'lg:order-2' : ''
                }`}>
                <div className="space-y-6">
                  <div>
                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[9px] font-mono tracking-widest text-primary uppercase inline-block mb-4">
                      {p.tag}
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-light leading-tight tracking-tight text-white break-words">
                      {p.title}
                    </h2>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <h5 className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase mb-1.5">business problem</h5>
                      <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">{p.problem}</p>
                    </div>
                    <div>
                      <h5 className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase mb-1.5">deployed solution</h5>
                      <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">{p.solution}</p>
                    </div>
                  </div>

                  {/* Integrated Statistics Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 border-t border-white/5 w-full min-w-0">
                    {p.stats.map(s => (
                      <div key={s.label} className="flex flex-col min-w-0">
                        <span className="text-lg sm:text-3xl md:text-4xl font-light text-primary font-mono leading-none mb-1.5">{s.value}</span>
                        <span className="text-[9px] sm:text-xs md:text-sm font-light text-zinc-400 font-mono leading-tight truncate">{s.suffix}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Mockup Panel column */}
              <div className={`col-span-1 lg:col-span-7 flex items-center justify-center relative overflow-hidden min-w-0 w-full ${isAlternate ? 'lg:order-1' : ''
                }`}>
                <div className="w-full max-w-full bg-zinc-950/80 border border-white/5 rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 flex flex-col justify-between min-h-[400px] sm:min-h-[460px] lg:min-h-[420px] shadow-2xl relative overflow-hidden hover:border-white/10 transition-all duration-500">
                  {/* Visual Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

                  {/* Dashboard Specific Content */}
                  {renderInteractiveMockup(idx)}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

// 3. CENTRAL EXPORT HANDLER
const Products: React.FC<{ teaser?: boolean }> = ({ teaser = false }) => {
  if (teaser) {
    return <ProductsTeaser />;
  }
  return <ProductsWorkspace />;
};

export default Products;
