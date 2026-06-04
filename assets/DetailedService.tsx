import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WebDevVisual: React.FC = () => {
  const [step, setStep] = useState<'typing' | 'clicking' | 'loading' | 'skeleton'>('typing');
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let interval: any;
    let timeout: any;

    if (step === 'typing') {
      const fullText = 'novateksolutions.in';
      let currentLength = 0;
      setTypedText('');

      interval = setInterval(() => {
        if (currentLength < fullText.length) {
          currentLength++;
          setTypedText(fullText.substring(0, currentLength));
        } else {
          clearInterval(interval);
          timeout = setTimeout(() => {
            setStep('clicking');
          }, 400);
        }
      }, 120);
    } else if (step === 'clicking') {
      timeout = setTimeout(() => {
        setStep('loading');
      }, 600);
    } else if (step === 'loading') {
      timeout = setTimeout(() => {
        setStep('skeleton');
      }, 1000);
    } else if (step === 'skeleton') {
      timeout = setTimeout(() => {
        setStep('typing');
      }, 3500);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [step]);

  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 rounded-xl border border-white/5 overflow-hidden p-3 relative font-sans text-left">
      {/* Browser Header Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-red-500/50"></span>
          <span className="size-1.5 rounded-full bg-yellow-500/50"></span>
          <span className="size-1.5 rounded-full bg-green-500/50"></span>
        </div>

        {/* Address Bar */}
        <div className="flex-grow mx-4 max-w-[140px] md:max-w-[200px] bg-white/[0.02] border border-white/[0.05] rounded px-2.5 py-0.5 text-[8px] font-mono text-zinc-400 flex items-center justify-between relative overflow-hidden">
          <span className="truncate">{typedText || ' '}</span>
          {step === 'typing' && <span className="w-[1px] h-2 bg-primary animate-pulse"></span>}
        </div>

        {/* Search Arrow Button */}
        <div
          className={`size-4 rounded border flex items-center justify-center transition-all duration-300 ${step === 'clicking' ? 'border-primary bg-primary/20 scale-90' : 'border-white/10 bg-white/5'
            }`}
        >
          <span className="material-symbols-outlined text-[8px] text-zinc-400">arrow_forward</span>
        </div>
      </div>

      {/* Loading Progress Bar */}
      {step === 'loading' && (
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="absolute top-[28px] left-0 h-[1px] bg-primary z-20"
        />
      )}

      {/* Browser viewport content */}
      <div className="flex-grow h-[130px] relative overflow-hidden flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {step === 'skeleton' ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col gap-2"
            >
              {/* Header navbar mock */}
              <div className="flex justify-between items-center bg-white/[0.02] px-3 py-1.5 rounded border border-white/[0.03]">
                <div className="h-2 w-10 bg-primary/40 rounded animate-pulse"></div>
                <div className="flex gap-2">
                  <div className="h-1.5 w-6 bg-white/10 rounded-full"></div>
                  <div className="h-1.5 w-6 bg-white/10 rounded-full"></div>
                  <div className="h-1.5 w-6 bg-white/10 rounded-full"></div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-12 gap-3 flex-grow">
                {/* Left Panel */}
                <div className="col-span-8 bg-white/[0.01] p-3.5 rounded-lg border border-white/[0.03] flex flex-col justify-between gap-3">
                  <div className="space-y-2">
                    <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                    <div className="h-3 w-32 bg-white/20 rounded-full"></div>
                  </div>

                  {/* SVG Sparkline Chart */}
                  <div className="h-12 w-full bg-white/[0.02] rounded-md border border-white/[0.03] flex items-center justify-center p-2">
                    <svg className="w-full h-full text-primary/45" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M0,25 Q15,5 30,18 T60,8 T90,15 L100,5" strokeLinecap="round" />
                    </svg>
                  </div>

                  <div className="h-5 w-full bg-primary/10 rounded border border-primary/20 flex items-center justify-center text-[6px] text-primary font-mono tracking-widest uppercase">
                    Platform Active
                  </div>
                </div>

                {/* Right Panel */}
                <div className="col-span-4 flex flex-col gap-2">
                  <div className="bg-white/[0.02] p-3 rounded-lg border border-white/[0.04] flex-grow flex flex-col justify-between">
                    <div className="h-1.5 w-8 bg-white/20 rounded-full"></div>
                    <div className="space-y-1.5">
                      <div className="h-1 w-full bg-white/10 rounded-full"></div>
                      <div className="h-1 w-1/2 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/[0.02] p-3 rounded-lg border border-white/[0.04] flex-grow flex flex-col justify-between">
                    <div className="h-1.5 w-10 bg-white/20 rounded-full"></div>
                    <div className="space-y-1.5">
                      <div className="h-1 w-full bg-white/10 rounded-full"></div>
                      <div className="h-1 w-3/4 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="blank"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col items-center justify-center text-zinc-600 text-[10px]"
            >
              {step === 'typing' && <span>Awaiting URL...</span>}
              {step === 'clicking' && <span className="text-primary animate-pulse">Requesting Server...</span>}
              {step === 'loading' && <span className="text-zinc-400">Loading resources...</span>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const UIDesignVisual: React.FC = () => {
  const [target, setTarget] = useState<'square' | 'circle'>('square');
  const [activeSelection, setActiveSelection] = useState<'square' | 'circle'>('square');
  const [cursorScale, setCursorScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextTarget = target === 'square' ? 'circle' : 'square';
      setTarget(nextTarget);

      // Cursor takes 1000ms to arrive, then hovers for 200ms and clicks at 1200ms
      const clickTimeout = setTimeout(() => {
        setCursorScale(0.8);
        setActiveSelection(nextTarget);

        const releaseTimeout = setTimeout(() => {
          setCursorScale(1);
        }, 120);

        return () => clearTimeout(releaseTimeout);
      }, 1200);

      return () => clearTimeout(clickTimeout);
    }, 3400); // loop interval increased to accommodate slower glide

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 rounded-xl border border-white/5 overflow-hidden p-3 relative font-sans text-left min-h-[140px]">
      {/* Figma/Workspace Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 bg-primary rounded-sm"></span>
          <span className="text-[8px] font-mono text-zinc-500">ux_editor_canvas.fig</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[7px] font-mono text-zinc-600">100%</span>
        </div>
      </div>

      {/* Wireframe Workspace Canvas */}
      <div className="flex-grow grid grid-cols-4 gap-2 relative bg-white/[0.01] rounded-lg p-2 border border-white/[0.02] min-h-[110px]">
        {/* Left Layers List */}
        <div className="flex flex-col gap-1.5 border-r border-white/5 pr-1.5">
          <div className="h-1.5 w-full bg-white/20 rounded"></div>
          <div className="h-1 w-full bg-white/10 rounded"></div>
          <div className="h-1 w-3/4 bg-white/10 rounded"></div>
          <div className="h-1 w-5/6 bg-white/10 rounded"></div>
        </div>

        {/* Center Interactive Artboard */}
        <div className="col-span-3 flex flex-col justify-between relative overflow-hidden bg-white/[0.01] rounded border border-dashed border-white/10 p-3">

          {/* Main design elements */}
          <div className="flex justify-between items-center mb-4 relative z-10 px-2">
            {/* Square wireframe element */}
            <div className="relative">
              <div
                className={`size-8 border rounded transition-all duration-300 flex items-center justify-center ${activeSelection === 'square' ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/[0.01]'
                  }`}
              >
                <span className="text-[8px] font-mono text-zinc-600">box</span>
              </div>
            </div>

            {/* Circle wireframe element */}
            <div className="relative">
              <div
                className={`size-8 rounded-full border transition-all duration-300 flex items-center justify-center ${activeSelection === 'circle' ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/[0.01]'
                  }`}
              >
                <span className="text-[8px] font-mono text-zinc-600">avatar</span>
              </div>
            </div>
          </div>

          {/* Bottom row shapes */}
          <div className="grid grid-cols-3 gap-1 relative z-10">
            <div className="h-4 border border-white/10 rounded flex items-center justify-center bg-white/[0.01]">
              <span className="size-2 rounded-full border border-white/20"></span>
            </div>
            <div className="h-4 border border-white/10 rounded flex items-center justify-center bg-white/[0.01]">
              <span className="size-2 border border-white/20 rounded-sm"></span>
            </div>
            <div className="h-4 border border-white/10 rounded flex items-center justify-center bg-white/[0.01]">
              <span className="size-2 rounded-sm bg-white/15 rotate-45"></span>
            </div>
          </div>

          {/* Figma Cursor Animated position */}
          <motion.div
            animate={{
              left: target === 'square' ? "10%" : "68%",
              top: target === 'square' ? "20%" : "20%",
              scale: cursorScale
            }}
            transition={{
              type: "spring",
              stiffness: 35,
              damping: 16
            }}
            style={{ willChange: 'transform' }}
            className="absolute flex items-center gap-1 z-20 pointer-events-none"
          >
            <span className="material-symbols-outlined text-xs text-primary leading-none shadow-sm select-none -rotate-90">near_me</span>
            <span className="text-[5px] font-mono bg-primary text-bg-dark px-1.5 py-0.5 rounded font-bold uppercase shadow-md leading-none">
              Designer
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CustomSoftwareVisual: React.FC = () => {
  const [step, setStep] = useState<'processing' | 'success' | 'new-row'>('processing');
  const [jobCount, setJobCount] = useState(1420);
  const [rows, setRows] = useState([
    { task: 'Database Synchronization', status: 'success' },
    { task: 'Secure Payment Processing', status: 'success' },
    { task: 'Automated Billing Report', status: 'pending' }
  ]);

  useEffect(() => {
    let timeout: any;

    if (step === 'processing') {
      timeout = setTimeout(() => {
        setRows(prev => prev.map(row => row.task === 'Automated Billing Report' ? { ...row, status: 'success' } : row));
        setJobCount(1421);
        setStep('success');
      }, 1500);
    } else if (step === 'success') {
      timeout = setTimeout(() => {
        setStep('new-row');
      }, 1200);
    } else if (step === 'new-row') {
      setRows([
        { task: 'Customer Notification Sync', status: 'pending' },
        { task: 'Database Synchronization', status: 'success' },
        { task: 'Secure Payment Processing', status: 'success' }
      ]);
      timeout = setTimeout(() => {
        setRows([
          { task: 'Database Synchronization', status: 'success' },
          { task: 'Secure Payment Processing', status: 'success' },
          { task: 'Automated Billing Report', status: 'pending' }
        ]);
        setJobCount(1420);
        setStep('processing');
      }, 3500);
    }

    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 rounded-xl border border-white/5 overflow-hidden p-3 relative font-sans text-left min-h-[140px]">
      {/* Portal Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-primary/45"></span>
          <span className="text-[8px] font-mono text-zinc-500">pipeline_sync_dashboard</span>
        </div>
        <div className="flex gap-3 text-[7px] font-mono text-zinc-500">
          <div>Sync: <span className="text-green-500">99.9%</span></div>
          <div>Total Tasks: <span className="text-white font-bold">{jobCount}</span></div>
        </div>
      </div>

      {/* Main content - Table database */}
      <div className="flex-grow h-[100px] overflow-hidden flex flex-col justify-center">
        <div className="space-y-1.5">
          <AnimatePresence>
            {rows.map((row) => (
              <motion.div
                key={row.task}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between bg-white/[0.01] px-2.5 py-1.5 rounded border border-white/[0.03] text-[8px] font-mono"
              >
                <span className="text-zinc-300 truncate">{row.task}</span>

                {/* Status capsule */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {row.status === 'pending' ? (
                    <>
                      {step === 'processing' && (
                        <div className="w-8 h-1 bg-white/5 rounded-full overflow-hidden relative">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "linear" }}
                            className="h-full bg-primary"
                          />
                        </div>
                      )}
                      <span className="size-1.5 rounded-full bg-yellow-500/50 animate-pulse"></span>
                      <span className="text-yellow-500 uppercase tracking-wider text-[6px]">Processing</span>
                    </>
                  ) : (
                    <>
                      <span className="size-1.5 rounded-full bg-green-500/50"></span>
                      <span className="text-green-500 uppercase tracking-wider text-[6px]">Success</span>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const EcommerceVisual: React.FC = () => {
  const [step, setStep] = useState<'product' | 'checkout' | 'success'>('product');
  const [cursorPos, setCursorPos] = useState({ left: "85%", top: "80%" });
  const [cursorScale, setCursorScale] = useState(1);
  const [isBtn1Hovered, setIsBtn1Hovered] = useState(false);
  const [isBtn1Pressed, setIsBtn1Pressed] = useState(false);
  const [isBtn2Hovered, setIsBtn2Hovered] = useState(false);
  const [isBtn2Pressed, setIsBtn2Pressed] = useState(false);

  useEffect(() => {
    let timeout: any;
    let hoverTimeout: any;
    let clickTimeout: any;

    if (step === 'product') {
      setIsBtn1Hovered(false);
      setIsBtn1Pressed(false);
      setIsBtn2Hovered(false);
      setIsBtn2Pressed(false);
      setCursorPos({ left: "85%", top: "80%" });

      timeout = setTimeout(() => {
        // Target the center of Row 1's Buy Now button
        setCursorPos({ left: "74%", top: "22%" });

        // Trigger hover glow when cursor reaches the button
        hoverTimeout = setTimeout(() => {
          setIsBtn1Hovered(true);
        }, 900);

        // Click executes after hover
        clickTimeout = setTimeout(() => {
          setCursorScale(0.8);
          setIsBtn1Pressed(true);

          setTimeout(() => {
            setCursorScale(1);
            setIsBtn1Pressed(false);
            setIsBtn1Hovered(false);
            setStep('checkout');
          }, 180);
        }, 1300);
      }, 400);
    } else if (step === 'checkout') {
      setIsBtn1Hovered(false);
      setIsBtn1Pressed(false);
      setIsBtn2Hovered(false);
      setIsBtn2Pressed(false);
      setCursorPos({ left: "15%", top: "30%" });

      timeout = setTimeout(() => {
        // Target the centered Place Order button
        setCursorPos({ left: "45%", top: "82%" });

        // Trigger hover glow
        hoverTimeout = setTimeout(() => {
          setIsBtn2Hovered(true);
        }, 900);

        // Click executes after hover
        clickTimeout = setTimeout(() => {
          setCursorScale(0.8);
          setIsBtn2Pressed(true);

          setTimeout(() => {
            setCursorScale(1);
            setIsBtn2Pressed(false);
            setIsBtn2Hovered(false);
            setStep('success');
          }, 180);
        }, 1300);
      }, 400);
    } else if (step === 'success') {
      setCursorPos({ left: "85%", top: "130%" });
      timeout = setTimeout(() => {
        setStep('product');
      }, 3500);
    }

    return () => {
      clearTimeout(timeout);
      clearTimeout(hoverTimeout);
      clearTimeout(clickTimeout);
    };
  }, [step]);

  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 rounded-xl border border-white/5 overflow-hidden p-3 relative font-sans text-left min-h-[140px]">
      {/* Browser Header Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-red-500/50"></span>
          <span className="size-1.5 rounded-full bg-yellow-500/50"></span>
          <span className="size-1.5 rounded-full bg-green-500/50"></span>
        </div>
        <div className="flex-grow mx-4 max-w-[140px] md:max-w-[200px] bg-white/[0.02] border border-white/[0.05] rounded px-2.5 py-0.5 text-[8px] font-mono text-zinc-500 text-center">
          store.novatek.com/cart
        </div>
        <div className="size-4 flex items-center justify-center">
          <span className="material-symbols-outlined text-[10px] text-zinc-500">shopping_bag</span>
        </div>
      </div>

      {/* Browser viewport content */}
      <div className="flex-grow h-[130px] relative overflow-hidden flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {step === 'product' && (
            <motion.div
              key="product"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full flex flex-col justify-between"
            >
              {/* Product list row-wise */}
              <div className="flex flex-col gap-2 flex-grow justify-center">
                {/* Item 1 Row */}
                <div className="flex items-center justify-between bg-white/[0.01] p-2 rounded-lg border border-white/[0.03]">
                  <div className="flex gap-2.5 items-center">
                    <div className="size-8 rounded bg-zinc-900 border border-white/5 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                      <span className="material-symbols-outlined text-primary text-sm font-light">light</span>
                    </div>
                    <div>
                      <div className="text-[8px] font-medium text-white">Onyx Lamp</div>
                      <div className="text-[7px] text-primary font-mono font-bold">$120.00</div>
                    </div>
                  </div>
                  <motion.div
                    animate={{
                      scale: isBtn1Pressed ? 0.94 : (isBtn1Hovered ? 1.05 : 1),
                      borderColor: isBtn1Pressed || isBtn1Hovered ? "rgba(229,183,119,0.8)" : "rgba(255,255,255,0.05)",
                      backgroundColor: isBtn1Pressed
                        ? "rgba(229,183,119,0.2)"
                        : (isBtn1Hovered ? "rgba(229,183,119,0.1)" : "rgba(255,255,255,0.02)"),
                      color: isBtn1Pressed || isBtn1Hovered ? "#fff" : "rgba(212,212,216,0.8)"
                    }}
                    className="px-3 py-1.5 rounded text-[7px] uppercase tracking-wider font-mono font-bold border select-none transition-colors"
                  >
                    Buy Now
                  </motion.div>
                </div>

                {/* Item 2 Row */}
                <div className="flex items-center justify-between bg-white/[0.01] p-2 rounded-lg border border-white/[0.03]">
                  <div className="flex gap-2.5 items-center">
                    <div className="size-8 rounded bg-zinc-900 border border-white/5 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                      <span className="material-symbols-outlined text-zinc-600 text-sm font-light">grid_view</span>
                    </div>
                    <div>
                      <div className="text-[8px] font-medium text-white">Desk Stand</div>
                      <div className="text-[7px] text-zinc-500 font-mono">$80.00</div>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded text-[7px] uppercase tracking-wider text-zinc-500 font-mono font-bold border border-white/5 select-none">
                    Buy Now
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'checkout' && (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full flex flex-col justify-between"
            >
              {/* Checkout Form */}
              <div className="space-y-2 bg-white/[0.01] p-2.5 rounded-lg border border-white/[0.03] text-[8px] font-mono text-zinc-400">
                <div className="flex justify-between items-center text-[7px] border-b border-white/[0.05] pb-1">
                  <span>Shipping:</span>
                  <span className="text-zinc-300">Standard Delivery (Free)</span>
                </div>

                <div className="flex justify-between items-center border-t border-white/[0.05] pt-1">
                  <span>Total Due:</span>
                  <span className="text-primary font-bold">$120.00</span>
                </div>
              </div>

              {/* Place Order Button */}
              <motion.div
                animate={{
                  scale: isBtn2Pressed ? 0.96 : (isBtn2Hovered ? 1.02 : 1),
                  backgroundColor: isBtn2Pressed
                    ? "rgba(229,183,119,0.85)"
                    : (isBtn2Hovered ? "rgba(229,183,119,0.95)" : "rgba(229,183,119,1)"),
                  boxShadow: isBtn2Hovered ? "0 0 10px rgba(229,183,119,0.2)" : "none"
                }}
                className="w-full py-2 text-bg-dark text-center rounded text-[8px] uppercase tracking-wider font-bold font-mono mt-2 cursor-pointer select-none"
              >
                Place Order
              </motion.div>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              className="w-full h-full flex flex-col items-center justify-center text-center space-y-2"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.1 }}
                className="size-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
              </motion.div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white">Order Placed!</div>
                <div className="text-[7px] text-zinc-500 font-mono">Invoice has been sent to your email</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Mouse Cursor */}
        {step !== 'success' && (
          <motion.div
            animate={{
              left: cursorPos.left,
              top: cursorPos.top,
              scale: cursorScale
            }}
            transition={{
              type: "spring",
              stiffness: 35,
              damping: 16
            }}
            style={{ willChange: 'transform' }}
            className="absolute flex items-center gap-1 z-30 pointer-events-none"
          >
            <span className="material-symbols-outlined text-xs text-primary leading-none shadow-sm select-none -rotate-90">near_me</span>
            <span className="text-[5px] font-mono bg-primary text-bg-dark px-1.5 py-0.5 rounded font-bold uppercase shadow-md leading-none">
              Buyer
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const NovaBotVisual: React.FC = () => {
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([]);
  const [userTypedText, setUserTypedText] = useState('');
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timer: any;
    let charInterval: any;

    if (step === 0) {
      setMessages([]);
      setIsUserTyping(true);
      setUserTypedText('');
      const fullText = "Hi! Can you help me build a website?";
      let charIdx = 0;
      charInterval = setInterval(() => {
        if (charIdx < fullText.length) {
          charIdx++;
          setUserTypedText(fullText.substring(0, charIdx));
        } else {
          clearInterval(charInterval);
          timer = setTimeout(() => {
            setStep(1);
          }, 600);
        }
      }, 80);
    } else if (step === 1) {
      setIsUserTyping(false);
      setMessages([{ sender: 'user', text: "Hi! Can you help me build a website?" }]);
      setIsTyping(true);
      timer = setTimeout(() => {
        setStep(2);
      }, 1200);
    } else if (step === 2) {
      setIsTyping(false);
      setMessages([
        { sender: 'user', text: "Hi! Can you help me build a website?" },
        { sender: 'bot', text: "Of course! What type of website do you have in mind?" }
      ]);
      timer = setTimeout(() => {
        setStep(3);
      }, 3000);
    } else if (step === 3) {
      setIsUserTyping(true);
      setUserTypedText('');
      const fullText = "An online store for my clothing brand.";
      let charIdx = 0;
      charInterval = setInterval(() => {
        if (charIdx < fullText.length) {
          charIdx++;
          setUserTypedText(fullText.substring(0, charIdx));
        } else {
          clearInterval(charInterval);
          timer = setTimeout(() => {
            setStep(4);
          }, 600);
        }
      }, 80);
    } else if (step === 4) {
      setIsUserTyping(false);
      setMessages([
        { sender: 'user', text: "Hi! Can you help me build a website?" },
        { sender: 'bot', text: "Of course! What type of website do you have in mind?" },
        { sender: 'user', text: "An online store for my clothing brand." }
      ]);
      setIsTyping(true);
      timer = setTimeout(() => {
        setStep(5);
      }, 1200);
    } else if (step === 5) {
      setIsTyping(false);
      setMessages([
        { sender: 'user', text: "Hi! Can you help me build a website?" },
        { sender: 'bot', text: "Of course! What type of website do you have in mind?" },
        { sender: 'user', text: "An online store for my clothing brand." },
        { sender: 'bot', text: "Nice! We can build a clean, fast store with easy checkouts. Should we discuss designs next?" }
      ]);
      timer = setTimeout(() => {
        setStep(6);
      }, 3000);
    } else if (step === 6) {
      setIsUserTyping(true);
      setUserTypedText('');
      const fullText = "Yes, that sounds perfect.";
      let charIdx = 0;
      charInterval = setInterval(() => {
        if (charIdx < fullText.length) {
          charIdx++;
          setUserTypedText(fullText.substring(0, charIdx));
        } else {
          clearInterval(charInterval);
          timer = setTimeout(() => {
            setStep(7);
          }, 600);
        }
      }, 80);
    } else if (step === 7) {
      setIsUserTyping(false);
      setMessages([
        { sender: 'user', text: "Hi! Can you help me build a website?" },
        { sender: 'bot', text: "Of course! What type of website do you have in mind?" },
        { sender: 'user', text: "An online store for my clothing brand." },
        { sender: 'bot', text: "Nice! I can build a clean, fast store with easy checkouts. Should we discuss designs next?" },
        { sender: 'user', text: "Yes, that sounds perfect." }
      ]);
      setIsTyping(true);
      timer = setTimeout(() => {
        setStep(8);
      }, 1200);
    } else if (step === 8) {
      setIsTyping(false);
      setMessages([
        { sender: 'user', text: "Hi! Can you help me build a website?" },
        { sender: 'bot', text: "Of course! What type of website do you have in mind?" },
        { sender: 'user', text: "An online store for my clothing brand." },
        { sender: 'bot', text: "Nice! I can build a clean, fast store with easy checkouts. Should we discuss designs next?" },
        { sender: 'user', text: "Yes, that sounds perfect." },
        { sender: 'bot', text: "Great! Let's connect. Feel free to leave your email below, and I'll send over some ideas." }
      ]);
      timer = setTimeout(() => {
        setStep(0);
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(charInterval);
    };
  }, [step]);

  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 rounded-xl border border-white/5 overflow-hidden p-3 relative font-sans text-left min-h-[140px]">
      {/* Bot Chat Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 bg-primary rounded-full"></span>
          <span className="text-[8px] font-mono text-zinc-500">novabot_assistant.sh</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[7px] font-mono text-zinc-600">Active</span>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-grow flex flex-col justify-end space-y-2 h-[130px] overflow-hidden text-[9px] font-mono select-none">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-lg px-2.5 py-1.5 leading-normal ${msg.sender === 'user'
              ? 'bg-zinc-900 border border-white/5 text-white'
              : 'bg-zinc-900/50 border border-l-2 border-l-primary/40 border-white/[0.02] text-zinc-300'
              }`}>
              <span className={`${msg.sender === 'user' ? 'text-zinc-500' : 'text-primary'} mr-1`}>
                {msg.sender === 'user' ? 'User:' : 'NovaBot:'}
              </span>
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-2 justify-start">
            <div className="bg-zinc-900/50 border border-white/[0.02] rounded-lg px-2.5 py-1.5 flex gap-1 items-center">
              <span className="text-primary mr-1">NovaBot:</span>
              <span className="size-1 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="size-1 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="size-1 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}

        {isUserTyping && (
          <div className="flex gap-2 justify-end">
            <div className="bg-zinc-900 border border-white/5 rounded-lg px-2.5 py-1.5 flex gap-1 items-center text-zinc-400">
              <span className="text-zinc-500 mr-1">User:</span>
              <span>{userTypedText}</span>
              <span className="w-[1px] h-2.5 bg-primary animate-pulse"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SecurityVisual: React.FC = () => {
  const [step, setStep] = useState<'idle' | 'scanning' | 'secured'>('idle');

  useEffect(() => {
    let timer: any;

    if (step === 'idle') {
      timer = setTimeout(() => {
        setStep('scanning');
      }, 1500);
    } else if (step === 'scanning') {
      timer = setTimeout(() => {
        setStep('secured');
      }, 2500);
    } else {
      timer = setTimeout(() => {
        setStep('idle');
      }, 3500);
    }

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 rounded-xl border border-white/5 overflow-hidden p-3 relative font-sans text-left min-h-[140px]">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 bg-primary rounded-full"></span>
          <span className="text-[8px] font-mono text-zinc-500">security_status.sh</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[7px] font-mono text-zinc-600">
            {step === 'idle' && 'Pending'}
            {step === 'scanning' && 'Scanning...'}
            {step === 'secured' && 'Secured'}
          </span>
        </div>
      </div>

      {/* Visual Content */}
      <div className="flex-grow flex flex-col items-center justify-center relative overflow-hidden">
        <div className="relative flex items-center justify-center mb-3">
          {/* Scanning radar circles */}
          {step === 'scanning' && (
            <>
              <div className="absolute size-16 rounded-full border border-primary/20 animate-pulse" />
              <div className="absolute size-24 rounded-full border border-primary/10 opacity-50 animate-pulse" />
            </>
          )}

          {/* Secured pulse rings */}
          {step === 'secured' && (
            <div className="absolute size-16 rounded-full border border-emerald-500/20 bg-emerald-500/5 animate-pulse" />
          )}

          {/* Core Icon */}
          <div className={`size-12 rounded-full border flex items-center justify-center transition-all duration-500 ${step === 'secured'
              ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
              : step === 'scanning'
                ? 'border-primary/30 bg-primary/10 text-primary'
                : 'border-white/10 bg-white/5 text-zinc-500'
            }`}>
            <span className="material-symbols-outlined text-xl transition-all duration-300">
              {step === 'secured' ? 'lock' : 'lock_open'}
            </span>
          </div>
        </div>

        {/* Status description */}
        <div className="text-center transition-all duration-300">
          <span className={`text-[9px] font-mono tracking-wider ${step === 'secured' ? 'text-emerald-400' : step === 'scanning' ? 'text-primary animate-pulse' : 'text-zinc-500'
            }`}>
            {step === 'idle' && 'SYSTEM AUDIT PENDING'}
            {step === 'scanning' && 'SCANNING NETWORK PORTS...'}
            {step === 'secured' && 'ENCRYPTION ACTIVE & SECURED'}
          </span>
        </div>
      </div>
    </div>
  );
};

const DetailedServices: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const services = [
    {
      id: '01',
      title: 'Web Development',
      description: 'Fast, modern web applications built using Next.js and React that look great and load instantly on all devices.',
      tech: ['Next.js', 'React', 'TypeScript', 'Edge Runtime', 'Tailwind'],
      visualType: 'web'
    },
    {
      id: '02',
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly layouts and animations designed to make your software intuitive and easy to navigate.',
      tech: ['Figma', 'Motion', 'Design Systems', 'A11y', 'Prototyping'],
      visualType: 'ui'
    },
    {
      id: '03',
      title: 'Custom Software',
      description: 'Bespoke software systems built to match your workflows, from internal databases to automated business portals.',
      tech: ['Go', 'PostgreSQL', 'Databases', 'APIs', 'Docker'],
      visualType: 'custom'
    },
    {
      id: '04',
      title: 'E-commerce Platforms',
      description: 'High-converting online stores built on modern platforms or custom backends, fully optimized for checkouts, payments, and speed.',
      tech: ['Shopify', 'Stripe', 'WooCommerce', 'Analytics', 'GraphQL'],
      visualType: 'ecommerce'
    },
    {
      id: '05',
      title: 'AI Integration',
      description: 'Integrating smart AI features and data models to automate manual tasks and power smart features.',
      tech: ['Gemini API', 'Vector DBs', 'Python', 'LLMs', 'Prompt Eng'],
      visualType: 'ai'
    },
    {
      id: '06',
      title: 'Cybersecurity',
      description: 'Thorough security audits and encryption protocols to protect your business systems and client data.',
      tech: ['Audits', 'IAM', 'Encryption', 'AuthN', 'SSL/TLS'],
      visualType: 'security'
    }
  ];

  // Performance: Only the active visual is mounted. Inactive visuals are unmounted,
  // stopping their useEffect timer loops and preventing unnecessary repaints.
  const renderVisual = (type: string) => {
    switch (type) {
      case 'web':
        return <WebDevVisual key="web" />;
      case 'ui':
        return <UIDesignVisual key="ui" />;
      case 'custom':
        return <CustomSoftwareVisual key="custom" />;
      case 'ecommerce':
        return <EcommerceVisual key="ecommerce" />;
      case 'ai':
        return <NovaBotVisual key="ai" />;
      case 'security':
        return <SecurityVisual key="security" />;
      default:
        return null;
    }
  };

  return (
    <section id="service" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-[10px] tracking-[0.6em] uppercase block mb-6 font-mono">Core Competencies</span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-none">
              What we <br /> <span className="text-primary font-light">build.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light max-w-sm border-l border-zinc-800 pl-8 leading-relaxed text-sm md:text-base">
            A full suite of design and development services to solve your technical and business challenges.
          </p>
        </div>

        {/* Mobile Accordion View (lg:hidden) */}
        <div className="lg:hidden divide-y divide-white/5 border-t border-b border-white/5">
          {services.map((service, idx) => {
            const isOpen = idx === activeIdx;
            return (
              <div key={idx} className="py-5">
                {/* Accordion Trigger Header */}
                <div
                  onClick={() => setActiveIdx(isOpen ? -1 : idx)}
                  className="flex justify-between items-center cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-mono transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-zinc-700'}`}>
                      {service.id}
                    </span>
                    <h3 className={`text-lg font-light tracking-tight transition-all duration-300 ${isOpen ? 'text-white' : 'text-zinc-400'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <span className={`material-symbols-outlined text-sm text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-90 text-primary' : ''}`}>
                    chevron_right
                  </span>
                </div>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4 space-y-6"
                    >
                      <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>

                      {/* Interactive Visual Widget */}
                      <div className="w-full max-w-lg aspect-[1.7] bg-zinc-900/50 rounded-xl p-1 border border-white/[0.02] flex items-center justify-center">
                        {renderVisual(service.visualType)}
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                        {service.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-white/[0.02] border border-white/[0.05] text-[7px] font-mono tracking-widest text-zinc-500 uppercase rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop Interactive Split Grid (hidden lg:grid) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-stretch">

          {/* Left Navigation List (5 Columns) */}
          <div className="lg:col-span-5 divide-y divide-white/5 border-t border-b border-white/5">
            {services.map((service, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="py-6 flex justify-between items-center cursor-pointer group transition-all"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-[10px] font-mono transition-colors duration-300 ${isActive ? 'text-primary' : 'text-zinc-700'}`}>
                      {service.id}
                    </span>
                    <h3 className={`text-xl md:text-2xl font-light tracking-tight transition-all duration-300 ${isActive ? 'text-white translate-x-2' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <span className={`material-symbols-outlined text-sm transition-all duration-300 ${isActive ? 'text-primary translate-x-0 opacity-100' : 'text-zinc-600 opacity-0 -translate-x-2'}`}>
                    arrow_forward
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Display Panel (7 Columns) */}
          <div className="lg:col-span-7 bg-zinc-900/10 border border-white/[0.03] rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Visual glow overlay — reduced blur for GPU performance */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/[0.02] rounded-full blur-[40px] pointer-events-none"></div>

            <AnimatePresence mode="wait">
              {(() => {
                const safeIdx = Math.max(0, activeIdx);
                const activeService = services[safeIdx];
                return (
                  <motion.div
                    key={safeIdx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex-grow flex flex-col justify-between h-full"
                  >
                    <div className="space-y-4">
                      <h4 className="text-3xl font-light text-white tracking-tight">
                        {activeService.title}
                      </h4>
                      <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed max-w-xl">
                        {activeService.description}
                      </p>
                    </div>

                    {/* Simulated Widget Area */}
                    <div className="flex-grow w-full max-w-lg mt-6 min-h-[160px] flex items-center justify-center bg-zinc-900/50 rounded-xl p-1 border border-white/[0.02]">
                      {renderVisual(activeService.visualType)}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-6">
                      {activeService.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white/[0.02] border border-white/[0.05] text-[8px] font-mono tracking-widest text-zinc-500 uppercase rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DetailedServices;
