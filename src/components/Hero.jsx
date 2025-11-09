import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1020] to-[#0a0f1d] shadow-2xl">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient + Noise Overlay (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1db3] to-[#050814]" />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(80,120,255,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(215,60,255,0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(60,255,255,0.2), transparent 40%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-200/90 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_20px_2px_rgba(56,189,248,.7)]" />
          Futuristic AI Studio
        </div>
        <h1 className="mx-auto max-w-4xl bg-gradient-to-br from-blue-200 via-white to-fuchsia-200 bg-clip-text text-4xl font-extrabold leading-[1.15] text-transparent sm:text-5xl md:text-6xl">
          🎨 GenPix AI – Next-Gen Text to Art Creator
        </h1>
        <p className="mt-5 max-w-2xl text-base text-blue-100/80 sm:text-lg">
          Turn your imagination into glowing, cyberpunk visuals. Type a prompt, pick a style, and let GenPix craft stunning art in seconds.
        </p>
        {/* Floating glow chips */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {['Realistic', 'Anime', 'Sketch', 'Oil Painting', 'Comic'].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-blue-100/90 shadow-[0_0_25px_rgba(59,130,246,.25)] backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
