
import React, { useState } from 'react';
import { getProjectArchitectureBlueprint } from '../services/gemini';
import { BlueprintSuggestion } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [blueprint, setBlueprint] = useState<BlueprintSuggestion | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const result = await getProjectArchitectureBlueprint(input);
      setBlueprint(result);
    } catch (err) {
      console.error("Architectural analysis failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`size-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
          isOpen ? 'bg-zinc-800 rotate-45' : 'bg-primary text-bg-dark hover:scale-110'
        }`}
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? 'close' : 'neurology'}
        </span>
      </button>

      {/* Floating Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[400px] max-w-[90vw] bg-bg-surface border border-primary/20 p-8 shadow-2xl rounded-sm backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-lg material-symbols-outlined animate-pulse">deployed_code</span>
            <h3 className="text-sm font-bold tracking-widest uppercase text-white font-mono">architect assistant</h3>
          </div>

          {!blueprint ? (
            <form onSubmit={handleAnalyze} className="space-y-6">
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                describe your vision. our ai architect will generate a high-fidelity technical blueprint.
              </p>
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. A global fintech platform requiring real-time settlement and high availability..."
                className="w-full bg-zinc-900/50 border border-border-light p-4 text-sm text-zinc-300 h-32 focus:border-primary/50 focus:ring-0 transition-all rounded-sm resize-none font-light"
              />
              <button 
                disabled={loading}
                className="w-full bg-primary text-bg-dark py-4 text-[10px] font-bold tracking-widest uppercase hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-sm">refresh</span>
                    analyzing_logic
                  </>
                ) : (
                  'generate_blueprint'
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-primary tracking-widest uppercase">recommended phase</span>
                <p className="text-white font-light text-lg">{blueprint.phase}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-primary tracking-widest uppercase">architectural strategy</span>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">{blueprint.recommendation}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-primary tracking-widest uppercase">suggested tech stack</span>
                <div className="flex flex-wrap gap-2 pt-2">
                  {blueprint.techStack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-zinc-900 border border-border-light text-[9px] font-mono text-zinc-500 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setBlueprint(null)}
                className="w-full border border-white/10 text-white py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-white/5 transition-all mt-4"
              >
                new_inquiry
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
