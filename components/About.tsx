import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';

interface WordProps {
  text: string;
  highlight?: boolean;
  special?: boolean;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ text, highlight, special, progress, range }) => {
  const opacity = useTransform(progress, range, [0.35, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.25em] transition-colors duration-500 select-none ${
        special
          ? 'text-zinc-500 hover:text-primary cursor-default font-normal'
          : highlight
            ? 'text-white font-normal'
            : 'text-zinc-400 font-light'
      }`}
    >
      {text}
    </motion.span>
  );
};

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = '', label }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out
        onUpdate: (latest) => setCount(Math.floor(latest))
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="space-y-2 group">
      <div className="text-4xl md:text-6xl font-extralight text-white tracking-tight flex items-baseline select-none">
        <span className="group-hover:text-primary transition-colors duration-500">{count}</span>
        <span className="text-primary font-light text-2xl md:text-3xl ml-0.5">{suffix}</span>
      </div>
      <p className="text-zinc-500 text-xs md:text-sm font-mono tracking-widest uppercase">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 80%', 'center 50%']
  });

  const words = [
    { text: 'Established', highlight: false },
    { text: 'in', highlight: false },
    { text: '2019', highlight: true },
    { text: 'in', highlight: true },
    { text: 'Bangalore,', highlight: true },
    { text: 'Novatek', highlight: false },
    { text: 'Solutions', highlight: false },
    { text: 'delivers', highlight: false },
    { text: 'innovative', highlight: true },
    { text: 'digital', highlight: true },
    { text: 'solutions', highlight: true },
    { text: 'worldwide.', highlight: false },
    { text: 'We', highlight: false },
    { text: 'specialize', highlight: false },
    { text: 'in', highlight: false },
    { text: 'custom', highlight: false },
    { text: 'software,', highlight: false },
    { text: 'web', highlight: false },
    { text: 'and', highlight: false },
    { text: 'mobile', highlight: false },
    { text: 'applications,', highlight: false },
    { text: 'cloud', highlight: false },
    { text: 'technologies,', highlight: false },
    { text: 'and', highlight: false },
    { text: 'enterprise', highlight: false },
    { text: 'systems', highlight: false },
    { text: 'that', highlight: false },
    { text: 'help', highlight: false },
    { text: 'organizations', highlight: false },
    { text: 'streamline', highlight: false },
    { text: 'operations,', highlight: false },
    { text: 'enhance', highlight: false },
    { text: 'customer', highlight: false },
    { text: 'experiences,', highlight: false },
    { text: 'and', highlight: false },
    { text: 'accelerate', highlight: true },
    { text: 'growth', highlight: true },
    { text: '—', highlight: false },
    { text: 'transforming', highlight: false },
    { text: 'complex', highlight: false },
    { text: 'challenges', highlight: false },
    { text: 'into', highlight: false },
    { text: 'scalable,', highlight: false },
    { text: 'secure,', highlight: false },
    { text: 'and', highlight: false },
    { text: 'user-friendly', highlight: false, special: true },
    { text: 'digital', highlight: false, special: true },
    { text: 'products.', highlight: false, special: true }
  ];

  return (
    <section className="py-24 md:py-36 bg-bg-dark relative overflow-hidden flex flex-col justify-center">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-primary/5 blur-[60px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-20 relative z-10">
        <span className="text-primary font-bold text-[10px] tracking-[0.6em] uppercase block mb-6 font-mono">
          Who We Are
        </span>

        {/* Large Typographic Statement */}
        <div className="max-w-5xl">
          <h2
            ref={textRef}
            className="text-2xl md:text-3xl lg:text-4xl font-extralight tracking-tight leading-[1.5] text-zinc-400 select-none flex flex-wrap justify-start"
          >
            {words.map((word, idx) => {
              const start = idx / words.length;
              const end = Math.min(1, start + 0.1);
              return (
                <Word
                  key={idx}
                  text={word.text}
                  highlight={word.highlight}
                  special={word.special}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          <Counter value={50} suffix="+" label="Projects Completed" />
          <Counter value={30} suffix="+" label="Happy Clients" />
          <Counter value={5} suffix="+" label="Years Active" />
        </div>
      </div>
    </section>
  );
};

export default About;
