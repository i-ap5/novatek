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
    title: "Novatek SmartClinic — Intelligent Practice Management Suite",
    shortDescription: "A clinic booking system that makes scheduling easy for patients, includes a high-contrast mode for elderly visitors, and helps manage urgent walk-ins.",
    problem: "Healthcare clinics struggle with high patient no-shows, complex booking interfaces that confuse older patients, inefficient prescription generation, and manual management of critical emergency availability slots.",
    solution: "A unified practice suite featuring a 30-minute interval booking grid, automated patient reminders, a visual 'Elder Mode' with simplified navigation, and a clinical AI prescription module with doctor-in-the-loop validation.",
    impact: "Reduces patient no-shows by 90% via proactive notification logs. Accelerates prescription time using AI recommendations with complete clinical oversight. Improves booking completion rates for visual/cognitively challenged patients.",
    stats: [
      { value: "90%", suffix: "Reduction", label: "Automated alert pipeline" },
      { value: "30m", suffix: "Slots", label: "Dynamic scheduling grid" },
      { value: "98%", suffix: "Ease Score", label: "High-contrast visual mode" }
    ],
    features: [
      "Smart booking with reserved slots for urgent appointments",
      "Easy-to-use visual mode for elderly patients",
      "AI assistance for doctors to quickly write prescriptions"
    ]
  },
  {
    id: "02",
    tag: "VOICE AGENTS - 02",
    title: "Novatek Hospitality Voice Agent — AI Support & Sales Agent",
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
  },
  {
    id: "03",
    tag: "LANGUAGE & AUDIO - 03",
    title: "Novatek Echo Link — Offline RAG Document Extraction",
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
    tag: "LANGUAGE & AUDIO - 04",
    title: "Novatek Sentiment Analysis — Ecommerce Review Intelligence",
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
    id: "05",
    tag: "HR SYSTEMS - 05",
    title: "Novatek HR Flow — Simple Employee & Leave Management",
    shortDescription: "An easy-to-use dashboard to track staff attendance, calculate payroll, and approve vacation requests.",
    problem: "Managing team schedules, counting working hours, and processing monthly payroll by hand is slow and leads to errors.",
    solution: "A simple employee dashboard that tracks daily hours automatically, calculates salaries, and lets you approve leave requests with one click.",
    impact: "Saves hours of administrative work each week, guarantees error-free payroll calculations, and keeps all team schedules in one place.",
    stats: [
      { value: "12h", suffix: "Saved", label: "Admin time weekly" },
      { value: "0%", suffix: "Errors", label: "Salary calculations" },
      { value: "1-Click", suffix: "Time-off", label: "Leave approvals" }
    ],
    features: [
      "Track attendance and working hours",
      "Calculate monthly salaries automatically",
      "Approve time-off requests with one click"
    ]
  },
  {
    id: "06",
    tag: "E-COMMERCE - 06",
    title: "Novatek E-Commerce Store — Fast Storefront & Checkout Engine",
    shortDescription: "A fast online store platform that speeds up checkout, reduces abandoned shopping carts, and processes payments securely.",
    problem: "Slow online shops frustrate buyers, causing them to leave before buying, while complex checkout screens lower sales.",
    solution: "A modern, lightweight storefront with a fast one-page checkout, built-in popular payment systems, and secure transactions.",
    impact: "Improves checkout conversion rates, speeds up page loading times, and safely handles customer credit cards.",
    stats: [
      { value: "+42%", suffix: "Sales", label: "Checkout conversion lift" },
      { value: "1.2s", suffix: "Load", label: "Page loading speed" },
      { value: "100%", suffix: "Secure", label: "Stripe & card payments" }
    ],
    features: [
      "Fast checkout for higher sales",
      "Accept Stripe, credit cards, and Apple Pay",
      "Automatic stock and inventory alerts"
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
            <span className="text-primary font-bold text-[10px] tracking-[0.6em] uppercase block mb-6 font-mono">Product Suite</span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-none">
              Our <br />
              <span className="text-zinc-600 font-light">products.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light max-w-sm border-l border-zinc-800 pl-8 leading-relaxed text-sm md:text-base">
            Smart, pre-built applications that solve real business problems. Ready for your team to use today.
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
                        <span className="text-[8px] font-mono tracking-wider text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full uppercase flex items-center gap-1.5">
                          <svg className="w-2.5 h-2.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                          Elder Mode
                        </span>
                      )}

                      {/* Micro rating for Sentiment Analysis */}
                      {p.id === "04" && isHovered && (
                        <span className="text-[8px] font-mono tracking-wider text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full uppercase flex items-center gap-1.5">
                          <svg className="w-2.5 h-2.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                          4.8 Rating
                        </span>
                      )}

                      {/* Micro document count for Echo Link */}
                      {p.id === "03" && isHovered && (
                        <span className="text-[8px] font-mono tracking-wider text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full uppercase flex items-center gap-1.5">
                          <svg className="w-2.5 h-2.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                          Secure RAG
                        </span>
                      )}

                      {/* Micro Waveform Icon for Hospitality Voice */}
                      {p.id === "02" && isHovered && (
                        <span className="text-[8px] font-mono tracking-wider text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full uppercase flex items-center gap-1.5">
                          <svg className="w-2.5 h-2.5 text-primary animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="12" rx="3" ry="3" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>
                          Voice AI
                        </span>
                      )}

                      {/* Micro badge for HR StaffFlow */}
                      {p.id === "05" && isHovered && (
                        <span className="text-[8px] font-mono tracking-wider text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full uppercase flex items-center gap-1.5">
                          <svg className="w-2.5 h-2.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                          HR Suite
                        </span>
                      )}

                      {/* Micro badge for StoreFlow */}
                      {p.id === "06" && isHovered && (
                        <span className="text-[8px] font-mono tracking-wider text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full uppercase flex items-center gap-1.5">
                          <svg className="w-2.5 h-2.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                          E-Commerce
                        </span>
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
  const [smartClinicTab, setSmartClinicTab] = useState<"intake" | "prescriber">("intake");
  const [diagnosis, setDiagnosis] = useState("Type 2 Diabetes");
  const [prescMedication, setPrescMedication] = useState("");
  const [prescDosage, setPrescDosage] = useState("");
  const [prescFinalized, setPrescFinalized] = useState(false);
  const [prescMethod, setPrescMethod] = useState<"AI" | "Manual" | null>(null);
  const [isSuggesting, setIsSuggesting] = useState(false);

  // HR Flow states
  const [hrStatus, setHrStatus] = useState<"pending" | "approved" | "denied">("pending");
  const [hrLoading, setHrLoading] = useState(false);

  // StoreFlow states
  const [checkoutStatus, setCheckoutStatus] = useState<"idle" | "processing" | "success">("idle");

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
      // SmartClinic Practice Management & Consultation Suite
      return (
        <div className="flex-1 flex flex-col justify-between text-zinc-300 font-sans text-xs w-full h-full min-h-[280px]">
          {/* Tabs and Status Header */}
          <div className="flex justify-between items-center pb-2.5 border-b border-white/5 shrink-0">
            <div className="flex gap-3">
              <button
                onClick={() => setSmartClinicTab("intake")}
                className={`text-[10px] uppercase tracking-wider font-mono pb-1 border-b-2 transition-all ${smartClinicTab === "intake"
                  ? (elderModeActive ? 'border-zinc-950 text-zinc-950 font-black' : 'border-primary text-white font-semibold')
                  : 'border-transparent text-zinc-500 hover:text-zinc-400'
                  }`}
              >
                Intake Portal
              </button>
              <button
                onClick={() => setSmartClinicTab("prescriber")}
                className={`text-[10px] uppercase tracking-wider font-mono pb-1 border-b-2 transition-all ${smartClinicTab === "prescriber"
                  ? (elderModeActive ? 'border-zinc-950 text-zinc-950 font-black' : 'border-primary text-white font-semibold')
                  : 'border-transparent text-zinc-500 hover:text-zinc-400'
                  }`}
              >
                AI Prescriber
              </button>
            </div>
            <span className={`text-[9px] flex items-center gap-1.5 font-medium font-mono shrink-0 ${elderModeActive ? 'text-zinc-950' : 'text-emerald-400'
              }`}>
              <span className="relative flex h-1.5 w-1.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${elderModeActive ? 'bg-zinc-900' : 'bg-emerald-400'
                  }`}></span>
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${elderModeActive ? 'bg-zinc-950' : 'bg-emerald-500'
                  }`}></span>
              </span>
              ACTIVE
            </span>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-center my-4">
            {smartClinicTab === "intake" ? (
              /* INTAKE PORTAL TAB */
              <div className="w-full">
                {elderModeActive ? (
                  <div className="space-y-4 text-left font-sans text-zinc-900">
                    <div className="flex justify-between items-center border-b border-zinc-200 pb-2">
                      <span className="text-zinc-500 text-[10px] tracking-wider uppercase font-extrabold">Elder Care Mode</span>
                      <span className="bg-zinc-900 text-white px-2 py-0.5 text-[8px] font-mono rounded">150% Scale</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-zinc-50 p-3.5 border-2 border-zinc-900 rounded-xl">
                        <span className="text-zinc-900 text-base font-black">09:30 AM — Consultation</span>
                        <span className="text-zinc-600 text-xs font-bold">Ready</span>
                      </div>
                      <div className="flex justify-between items-center bg-zinc-900 text-white p-3.5 rounded-xl">
                        <span className="text-white text-base font-black">10:30 AM — Active Intake</span>
                        <span className="text-primary text-xs font-black">Dr. Miller</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 text-left font-sans">
                    <div className="flex justify-between items-center text-[9px] text-zinc-500 uppercase tracking-widest font-mono">
                      <span>Intake Schedule</span>
                      <span>Status</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-zinc-900/40 p-3 border border-white/5 rounded-xl">
                        <span className="text-zinc-200">09:30 AM — Patient Check-In</span>
                        <span className="text-[10px] text-zinc-500">Completed</span>
                      </div>
                      <div className={`flex justify-between items-center p-3 border rounded-xl transition-all duration-300 ${urgentSymptom
                        ? 'bg-red-500/10 border-red-500/30 text-red-400 font-semibold'
                        : 'bg-zinc-900/40 border-white/5 text-zinc-400'
                        }`}>
                        <span className="font-medium text-zinc-200">11:00 AM — Emergency Slot</span>
                        <span className={`text-[9px] font-mono uppercase tracking-wider ${urgentSymptom ? 'text-red-400 font-bold' : 'text-zinc-500'}`}>
                          {urgentSymptom ? "Unlocked" : "Locked"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* AI PRESCRIBER TAB */
              <div className="space-y-4 text-left font-sans">
                {/* Diagnosis Selector */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-mono">Enter Diagnosis</span>
                  <div
                    onClick={() => {
                      const list = ["Type 2 Diabetes", "Hypertension", "Acute Bronchitis"];
                      const next = list[(list.indexOf(diagnosis) + 1) % list.length];
                      setDiagnosis(next);
                      setPrescMedication("");
                      setPrescDosage("");
                      setPrescFinalized(false);
                      setPrescMethod(null);
                    }}
                    className={`border rounded-xl p-3 text-[11px] cursor-pointer transition-colors flex justify-between items-center ${elderModeActive
                      ? 'bg-zinc-50 border-zinc-900 text-zinc-900 font-bold'
                      : 'bg-zinc-900/40 border-white/5 text-zinc-300 hover:text-white'
                      }`}
                  >
                    <span>{diagnosis}</span>
                    <span className="text-[8px] text-primary uppercase tracking-widest font-mono font-bold">Cycle Diagnosis</span>
                  </div>
                </div>

                {/* AI Suggest Trigger & Output */}
                <div className="space-y-3">
                  {!prescMedication && !isSuggesting ? (
                    <button
                      onClick={() => {
                        setIsSuggesting(true);
                        setTimeout(() => {
                          setIsSuggesting(false);
                          if (diagnosis === "Type 2 Diabetes") {
                            setPrescMedication("Metformin");
                            setPrescDosage("500mg — Twice daily with meals");
                          } else if (diagnosis === "Hypertension") {
                            setPrescMedication("Lisinopril");
                            setPrescDosage("10mg — Once daily in the morning");
                          } else {
                            setPrescMedication("Amoxicillin");
                            setPrescDosage("500mg — Three times daily for 7 days");
                          }
                          setPrescMethod("AI");
                        }, 800);
                      }}
                      className={`w-full py-2.5 border text-[10px] rounded-xl tracking-wider uppercase font-mono transition-colors ${elderModeActive
                        ? 'bg-zinc-900 border-zinc-950 text-white font-bold'
                        : 'bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary'
                        }`}
                    >
                      AI Suggest Recommendation
                    </button>
                  ) : isSuggesting ? (
                    <div className={`text-center py-3 text-[10px] font-mono animate-pulse ${elderModeActive ? 'text-zinc-600' : 'text-zinc-500'
                      }`}>
                      Analyzing clinical database...
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className={`border rounded-xl p-4 space-y-3 ${elderModeActive
                        ? 'bg-zinc-50 border-zinc-900'
                        : 'bg-zinc-900/40 border-white/5'
                        }`}>
                        <div className="flex justify-between items-center text-[7px] uppercase tracking-wider text-zinc-500 font-mono">
                          <span>Clinical Recommendation</span>
                          <span className="text-primary font-bold">Editable recommendation</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-col">
                            <span className="text-[7px] text-zinc-500 uppercase font-mono">Medication</span>
                            <input
                              type="text"
                              value={prescMedication}
                              onChange={(e) => {
                                setPrescMedication(e.target.value);
                                setPrescMethod("Manual");
                              }}
                              className={`bg-transparent border-b text-[11px] font-sans focus:outline-none py-0.5 ${elderModeActive
                                ? 'border-zinc-350 text-zinc-900 focus:border-zinc-900 font-bold'
                                : 'border-white/5 text-white focus:border-primary'
                                }`}
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[7px] text-zinc-500 uppercase font-mono">Dosage</span>
                            <input
                              type="text"
                              value={prescDosage}
                              onChange={(e) => {
                                setPrescDosage(e.target.value);
                                setPrescMethod("Manual");
                              }}
                              className={`bg-transparent border-b text-[10px] font-sans focus:outline-none py-0.5 ${elderModeActive
                                ? 'border-zinc-350 text-zinc-700 focus:border-zinc-900 font-bold'
                                : 'border-white/5 text-zinc-400 focus:border-primary'
                                }`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Finalize button */}
                      {!prescFinalized ? (
                        <button
                          onClick={() => setPrescFinalized(true)}
                          className={`w-full py-2.5 border text-[10px] rounded-xl tracking-wider uppercase font-mono transition-all ${elderModeActive
                            ? 'bg-zinc-900 border-zinc-950 text-white font-bold hover:bg-zinc-800'
                            : 'bg-white/5 border-white/10 hover:border-primary/40 text-white hover:text-primary'
                            }`}
                        >
                          Finalize Prescription
                        </button>
                      ) : (
                        <div className={`p-3 border text-[9px] rounded-xl flex justify-between items-center font-mono uppercase ${elderModeActive
                          ? 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold'
                          : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                          }`}>
                          <span>Prescription Saved</span>
                          <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${elderModeActive ? 'bg-emerald-200' : 'bg-emerald-500/20'
                            }`}>
                            Logged: {prescMethod}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Controls Footer */}
          <div className="flex gap-2 shrink-0">
            {smartClinicTab === "intake" ? (
              <>
                <button
                  onClick={() => setUrgentSymptom(!urgentSymptom)}
                  className={`flex-1 py-2.5 rounded-xl text-[10px] font-medium tracking-wider transition-all border uppercase font-mono ${elderModeActive
                    ? 'bg-zinc-100 border-zinc-300 text-zinc-900 font-bold hover:bg-zinc-200'
                    : (urgentSymptom
                      ? 'bg-red-500/10 border-red-500/30 text-red-400 font-bold'
                      : 'bg-white/5 border-white/10 hover:border-red-500/20 text-zinc-400 hover:text-red-400')
                    }`}
                >
                  Urgent Reserve
                </button>
                <button
                  onClick={() => setElderModeActive(!elderModeActive)}
                  className={`flex-1 py-2.5 rounded-xl text-[10px] font-medium tracking-wider transition-all border uppercase font-mono ${elderModeActive
                    ? 'bg-zinc-900 border-zinc-950 text-white font-black hover:bg-zinc-800'
                    : 'bg-white/5 border-white/10 hover:border-primary/40 text-primary'
                    }`}
                >
                  Elder Theme: {elderModeActive ? 'ON' : 'OFF'}
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setDiagnosis("Type 2 Diabetes");
                  setPrescMedication("");
                  setPrescDosage("");
                  setPrescFinalized(false);
                  setPrescMethod(null);
                }}
                className={`w-full py-2.5 border text-[10px] rounded-xl tracking-wider uppercase font-mono transition-colors ${elderModeActive
                  ? 'bg-zinc-900 border-zinc-950 text-white font-bold hover:bg-zinc-800'
                  : 'bg-white/5 border-white/10 hover:bg-white/[0.08] text-zinc-400'
                  }`}
              >
                Reset Prescriber Demo
              </button>
            )}
          </div>
        </div>
      );
    }

    if (idx === 3) {
      // Sentiment Analysis mockup
      const metrics: Record<string, { pos: number; mix: number; neg: number; score: string; stars: string; label: string }> = {
        "Overall Performance": { pos: 96, mix: 3, neg: 1, score: "4.8", stars: "★★★★★", label: "EXCELLENT" },
        "Battery Life": { pos: 92, mix: 6, neg: 2, score: "4.6", stars: "★★★★☆", label: "VERY GOOD" },
        "Screen Quality": { pos: 89, mix: 9, neg: 2, score: "4.5", stars: "★★★★☆", label: "VERY GOOD" }
      };

      const selectedMetric = metrics[selectedCluster] || metrics["Overall Performance"];

      return (
        <div className="flex-1 flex flex-col justify-between text-zinc-300 font-sans text-xs w-full h-full min-h-[280px]">
          {/* Header */}
          <div className="flex justify-between items-center pb-2.5 border-b border-white/5 shrink-0">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Consensus Intelligence</span>
            <span className="text-[10px] text-primary font-semibold font-mono">{selectedMetric.pos}% POSITIVE</span>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-center my-4 space-y-4 text-left font-sans">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-light text-white tracking-tight">{selectedMetric.score}</span>
                <div className="flex flex-col">
                  <span className="text-primary text-[10px] font-bold tracking-wider">{selectedMetric.stars} {selectedMetric.label}</span>
                  <span className="text-[8px] text-zinc-500 font-mono">Verified Consensus</span>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-1">
              <div className="h-1.5 w-full bg-zinc-900 border border-white/5 rounded-full overflow-hidden flex">
                <div className="bg-primary h-full transition-all duration-500" style={{ width: `${selectedMetric.pos}%` }}></div>
                <div className="bg-yellow-500/40 h-full transition-all duration-500" style={{ width: `${selectedMetric.mix}%` }}></div>
                <div className="bg-red-500/40 h-full transition-all duration-500" style={{ width: `${selectedMetric.neg}%` }}></div>
              </div>
            </div>

            {/* AI consensus statement */}
            <p className="text-[12px] text-zinc-400 leading-relaxed font-light">
              {sentimentClusters[selectedCluster] || sentimentClusters["Overall Performance"]}
            </p>
          </div>

          {/* Categories Selector */}
          <div className="flex gap-2 shrink-0">
            {["Overall Performance", "Battery Life", "Screen Quality"].map((cluster) => (
              <button
                key={cluster}
                onClick={() => setSelectedCluster(cluster)}
                className={`flex-1 py-2.5 rounded-xl text-[10px] transition-all border font-sans font-medium ${selectedCluster === cluster
                  ? 'bg-primary/10 border-primary/30 text-white font-semibold'
                  : 'bg-white/5 border-white/10 hover:bg-white/[0.08] text-zinc-400'
                  }`}
              >
                {cluster.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (idx === 2) {
      // Echo Link mockup (Offline RAG)
      const docQueries: Record<string, { q: string; ans: string }> = {
        "Saudi_Oil_Annual_Report_2024.pdf": {
          q: "What were the key crude oil production milestones in Saudi Arabia for 2024?",
          ans: "Saudi Arabia sustained daily production levels at 9.6 million barrels, with upstream optimizations boosting Ghawar field export outputs."
        },
        "Saudi_Refinery_Operations_2024.pdf": {
          q: "What is the processing efficiency for downstream assets?",
          ans: "Refinery operations showed a processing efficiency increase of 4.2% in 2024, with downstream utilization scaling to a record 94% average."
        },
        "Vision2030_Energy_Strategy_KSA.pdf": {
          q: "What are the carbon reduction targets under KSA Vision 2030?",
          ans: "The strategy mandates a reduction of 278 million tons of carbon dioxide equivalent per annum, deploying massive grid-scale solar grids."
        }
      };

      const docLabels: Record<string, string> = {
        "Saudi_Oil_Annual_Report_2024.pdf": "Saudi Oil",
        "Saudi_Refinery_Operations_2024.pdf": "Saudi Refinery",
        "Vision2030_Energy_Strategy_KSA.pdf": "Vision 2030"
      };

      const selectedDoc = activeDoc in docQueries ? activeDoc : "Saudi_Oil_Annual_Report_2024.pdf";
      const currentQuery = docQueries[selectedDoc];

      return (
        <div className="flex-1 flex flex-col justify-between text-zinc-300 font-sans text-xs w-full h-full min-h-[280px]">
          {/* Header */}
          <div className="flex justify-between items-center pb-2.5 border-b border-white/5 shrink-0">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Secure Document Search</span>
            <span className="text-[8px] text-primary flex items-center gap-1 font-semibold font-mono uppercase">
              <span className="h-1 w-1 rounded-full bg-primary animate-pulse"></span>
              Air-Gapped Node
            </span>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-center my-4 space-y-4 text-left font-sans">
            <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-4 space-y-3">
              <div>
                <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-mono block mb-1">Local Request</span>
                <p className="text-[10px] text-zinc-200 font-medium italic">"{currentQuery.q}"</p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-[8px] uppercase tracking-wider text-zinc-550 block mb-1 font-mono">Semantic RAG Answer</span>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-light">{currentQuery.ans}</p>
              </div>
            </div>
          </div>

          {/* Quick buttons */}
          <div className="flex gap-2 shrink-0">
            {Object.keys(docQueries).map((docName) => (
              <button
                key={docName}
                onClick={() => setActiveDoc(docName)}
                className={`flex-1 py-2.5 rounded-xl text-[10px] transition-all border font-sans font-medium truncate ${activeDoc === docName
                  ? 'bg-primary/10 border-primary/30 text-white font-semibold'
                  : 'bg-white/5 border-white/10 hover:bg-white/[0.08] text-zinc-400'
                  }`}
              >
                {docLabels[docName] || docName}
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (idx === 1) {
      // Hospitality Voice mockup
      return (
        <div className="flex-1 flex flex-col justify-between text-zinc-300 font-sans text-xs w-full h-full min-h-[280px]">
          {/* Header */}
          <div className="flex justify-between items-center pb-2.5 border-b border-white/5 shrink-0">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Voice Operations</span>
            <span className="text-[9px] text-primary flex items-center gap-1 font-semibold font-mono uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              91.4% AUTO
            </span>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-center my-4 text-left font-sans">
            {simulationActive ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/5 shrink-0">
                  <span className="text-[8px] text-zinc-500 font-semibold uppercase font-mono">Live Call Session</span>
                  {/* Pulsing Audio Waveform */}
                  <div className="flex items-center gap-0.5 h-3 shrink-0">
                    <span className="w-[1.5px] bg-primary rounded-full animate-[pulse_1s_infinite_100ms] h-full"></span>
                    <span className="w-[1.5px] bg-primary rounded-full animate-[pulse_1s_infinite_300ms] h-[60%]"></span>
                    <span className="w-[1.5px] bg-primary rounded-full animate-[pulse_1s_infinite_200ms] h-[80%]"></span>
                  </div>
                </div>
                <div className="space-y-3 text-[11px] leading-relaxed">
                  <p className="text-zinc-400 italic">
                    "Hello, I would like to extend my checkout time today."
                  </p>
                  <p className="text-primary font-semibold">
                    "Certainly! I have checked availability and extended your checkout to 2:00 PM."
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-2">
                <div className="h-9 w-9 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center mx-auto mb-1 text-zinc-500">
                  <span className="material-symbols-outlined text-xs">headset_mic</span>
                </div>
                <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider font-mono">Standby</p>
                <p className="text-[9px] text-zinc-500 leading-relaxed max-w-[200px] mx-auto text-center">Start the simulated inbound call below to view the Voice AI response.</p>
              </div>
            )}
          </div>

          <button
            onClick={() => setSimulationActive(!simulationActive)}
            className={`w-full py-2.5 rounded-xl text-[10px] font-medium tracking-wider transition-all border uppercase font-sans font-bold shrink-0 ${simulationActive
              ? 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20'
              : 'bg-primary/10 border-primary/30 text-primary hover:bg-primary/20'
              }`}
          >
            {simulationActive ? "Stop Simulation" : "Start Simulation"}
          </button>
        </div>
      );
    }

    if (idx === 4) {
      // HR Solution mockup
      return (
        <div className="flex-1 flex flex-col justify-between text-zinc-300 font-sans text-xs w-full h-full min-h-[280px]">
          {/* Header */}
          <div className="flex justify-between items-center pb-2.5 border-b border-white/5 shrink-0">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">HR Operations</span>
            <span className="text-[9px] text-primary flex items-center gap-1 font-semibold font-mono uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              StaffFlow Live
            </span>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-center my-4 space-y-4 text-left font-sans">
            <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-mono block mb-0.5">Vacation Request</span>
                  <p className="text-[11px] text-zinc-200 font-medium">Sarah Jenkins — UX Designer</p>
                </div>
                <span className="text-[8px] text-zinc-400 font-mono">June 14 - June 18</span>
              </div>
              <div className="pt-3 border-t border-white/5 flex justify-between items-center">
                <div>
                  <span className="text-[8px] uppercase tracking-wider text-zinc-550 block mb-0.5 font-mono">Approval Status</span>
                  <p className={`text-[11px] font-semibold uppercase tracking-wider ${hrStatus === "approved" ? "text-emerald-400" : hrStatus === "denied" ? "text-red-400" : "text-amber-400"}`}>
                    {hrStatus}
                  </p>
                </div>
                {hrStatus === "pending" && !hrLoading && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setHrLoading(true);
                        setTimeout(() => {
                          setHrStatus("approved");
                          setHrLoading(false);
                        }, 600);
                      }}
                      className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase rounded-lg hover:bg-emerald-500/20 transition-colors"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        setHrLoading(true);
                        setTimeout(() => {
                          setHrStatus("denied");
                          setHrLoading(false);
                        }, 600);
                      }}
                      className="px-2.5 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-mono uppercase rounded-lg hover:bg-red-500/20 transition-colors"
                    >
                      Deny
                    </button>
                  </div>
                )}
                {hrLoading && (
                  <span className="text-[10px] text-zinc-500 font-mono animate-pulse">Processing...</span>
                )}
                {hrStatus !== "pending" && (
                  <button
                    onClick={() => setHrStatus("pending")}
                    className="text-[9px] text-zinc-500 hover:text-zinc-400 underline font-mono"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Quick Stats Summary Footer */}
          <div className="border-t border-white/5 pt-2.5 flex justify-between text-[9px] text-zinc-500 font-mono shrink-0">
            <span>Staff On Leave: 2/18</span>
            <span>Next Payroll Run: June 30</span>
          </div>
        </div>
      );
    }

    if (idx === 5) {
      // E-Commerce Solution mockup
      return (
        <div className="flex-1 flex flex-col justify-between text-zinc-300 font-sans text-xs w-full h-full min-h-[280px]">
          {/* Header */}
          <div className="flex justify-between items-center pb-2.5 border-b border-white/5 shrink-0">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Checkout Terminal</span>
            <span className="text-[9px] text-primary flex items-center gap-1 font-semibold font-mono uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              StoreFlow Fast-Pay
            </span>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-center my-4 space-y-4 text-left font-sans">
            <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-mono block mb-0.5">Shopping Cart</span>
                  <p className="text-[11px] text-zinc-200 font-medium">Novatek Pro Wireless Headset</p>
                </div>
                <span className="text-[11px] text-primary font-mono font-bold">$189.00</span>
              </div>
              <div className="pt-3 border-t border-white/5">
                {checkoutStatus === "idle" && (
                  <button
                    onClick={() => {
                      setCheckoutStatus("processing");
                      setTimeout(() => {
                        setCheckoutStatus("success");
                      }, 1000);
                    }}
                    className="w-full py-2.5 bg-primary text-bg-dark text-[10px] font-bold tracking-wider uppercase rounded-xl hover:scale-[1.02] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">bolt</span>
                    1-Click Checkout
                  </button>
                )}
                {checkoutStatus === "processing" && (
                  <div className="text-center py-2 text-[10px] font-mono text-zinc-500 animate-pulse">
                    Authorizing payment secure credentials...
                  </div>
                )}
                {checkoutStatus === "success" && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-emerald-400 py-1.5 text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      Order Placed Successfully!
                    </div>
                    <button
                      onClick={() => setCheckoutStatus("idle")}
                      className="w-full text-center text-[9px] text-zinc-500 hover:text-zinc-400 underline font-mono"
                    >
                      Demo Checkout Again
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Checkout Footer Info */}
          <div className="border-t border-white/5 pt-2.5 flex justify-between text-[9px] text-zinc-500 font-mono shrink-0">
            <span>Server Response: 1.2s</span>
            <span>Security: PCI-DSS Compliant</span>
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
            <span className="text-primary font-bold text-[10px] tracking-[0.6em] uppercase block mb-6 font-mono">Product Suite
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white">
              Our <span className="text-zinc-650 font-medium">Products.</span>
            </h1>
          </div>
          <p className="text-zinc-400 text-base md:text-lg font-light max-w-xl border-l border-zinc-800 pl-8 leading-relaxed lg:mb-1">
            Ready-to-use software built for tracking performance, searching documents, and automating customer calls.
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
              <div className={`absolute -top-10 ${isAlternate ? 'left-10' : 'right-10'} w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full blur-[120px] pointer-events-none hidden sm:block ${idx === 0 ? 'bg-emerald-500/5' : idx === 1 ? 'bg-indigo-500/5' : idx === 2 ? 'bg-cyan-500/5' : idx === 3 ? 'bg-purple-500/5' : idx === 4 ? 'bg-amber-500/5' : 'bg-primary/5'
                }`}></div>

              {/* Details column */}
              <div className={`col-span-1 lg:col-span-5 flex flex-col justify-center min-w-0 w-full ${isAlternate ? 'lg:order-2' : ''
                }`}>
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-primary uppercase inline-block mb-3.5">
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
                <div className={`w-full max-w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] lg:min-h-[400px] shadow-2xl relative overflow-hidden transition-all duration-500 ${idx === 0 && elderModeActive
                  ? 'bg-white border border-zinc-950 text-zinc-950 shadow-[6px_6px_0px_#18181b]'
                  : 'bg-zinc-950/80 border border-white/5 text-zinc-300 hover:border-white/10'
                  }`}>
                  {/* Visual Glow */}
                  {!(idx === 0 && elderModeActive) && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
                  )}

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
