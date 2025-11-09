import React, { useState } from 'react';
import { Sparkles, Wand2 } from 'lucide-react';

const styles = ['Realistic', 'Anime', 'Sketch', 'Oil Painting', 'Comic'];

const PromptForm = ({ onGenerate, loading }) => {
  const [prompt, setPrompt] = useState('A neon-lit cyberpunk city alley with rain and reflections');
  const [style, setStyle] = useState(styles[0]);

  const submit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onGenerate({ prompt: prompt.trim(), style });
  };

  return (
    <form
      onSubmit={submit}
      className="relative mx-auto -mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_rgba(88,101,242,0.25)] backdrop-blur-xl"
    >
      <div className="absolute -top-4 right-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
        <Sparkles size={14} /> AI Powered
      </div>
      <label className="mb-2 block text-sm font-medium text-blue-100/90">
        Enter your art prompt
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your vision..."
            className="w-full rounded-xl border border-white/10 bg-[#0b1020]/60 px-4 py-3 text-blue-50 placeholder:text-blue-200/40 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
          <div className="pointer-events-none absolute inset-y-0 right-3 my-auto h-6 w-6 rounded-full bg-gradient-to-tr from-blue-500/40 to-fuchsia-500/40 blur-md" />
        </div>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="min-w-[160px] rounded-xl border border-white/10 bg-[#0b1020]/60 px-3 py-3 text-blue-50 focus:border-fuchsia-500/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30"
        >
          {styles.map((s) => (
            <option key={s} value={s} className="bg-[#0b1020]">
              {s}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={loading}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-blue-400/40 bg-gradient-to-br from-blue-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,.35)] transition-transform hover:scale-[1.02] focus:outline-none disabled:opacity-60"
        >
          <span className="absolute inset-0 -z-0 bg-[radial-gradient(transparent_1px,rgba(255,255,255,.08)_1px)] bg-[size:10px_10px]" />
          <Wand2 className="relative z-10" size={18} />
          <span className="relative z-10">{loading ? 'Generating…' : 'Generate'}</span>
          <span className="pointer-events-none absolute inset-0 z-0 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,.6), rgba(168,85,247,.6), rgba(59,130,246,.6))' }} />
        </button>
      </div>
      <div className="mt-3 text-xs text-blue-200/60">
        Pro tip: Be specific. Include mood, lighting, perspective, and colors for best results.
      </div>
    </form>
  );
};

export default PromptForm;
