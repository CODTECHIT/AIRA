import React from "react";
import FadeIn from "../animations/FadeIn";

const AboutSection = () => {
  return (
    <section id="about" className="aira-section bg-[#0a0f18] w-full">
      <div className="container mx-auto px-6">
        {/* Experience Badge */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-4 rounded-2xl shadow-2xl shadow-brand-500/20">
            <span className="text-3xl md:text-4xl font-bold text-slate-900 font-display">10+ Years</span>
            <span className="text-slate-900 text-lg ml-3 font-semibold">of Excellence in Lab Infrastructure</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-slate-100 italic">Why <span className="text-brand-500 underline decoration-brand-500/30 underline-offset-8">Aira</span> Before The Rest?</h2>
          <p className="text-slate-400 text-lg md:text-xl font-light">Aira Lab Equipment handles everything from site measurements and layout proposals to fabrication and installation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn delay={0}>
            <div className="premium-card p-10 rounded-2xl group cursor-default bg-slate-900 border border-white/5 h-full">
              <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mb-8 border border-brand-500/20 group-hover:bg-brand-500 group-hover:text-slate-900 transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a2 2 0 002 2 2 2 0 012 2v2.93a2 2 0 01-1.39 1.9l-1 .31A2 2 0 0015 16.04v.96a2 2 0 01-2 2h-2a2 2 0 01-2-2v-.96a2 2 0 00-1-1.92l-1-.31a2 2 0 01-1.39-1.9V11a2 2 0 012-2 2 2 0 002-2V4z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-slate-100">Direct Manufacturer</h3>
              <p className="text-slate-400 font-light leading-relaxed">Work directly with the source for quicker decisions, complete customization, and dependable support.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="premium-card p-10 rounded-2xl group cursor-default bg-slate-900 border border-white/5 h-full">
              <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mb-8 border border-brand-500/20 group-hover:bg-brand-500 group-hover:text-slate-900 transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.722 2.166a2 2 0 00.556 2.182l1.32 1.32a2 2 0 002.346.417l4.167-2.083a2 2 0 001.211-1.211l2.083-4.167a2 2 0 00-.417-2.346l-1.32-1.32a2 2 0 00-2.182-.556l-2.166.722a2 2 0 00-1.414 1.96l.477 2.387a2 2 0 10.994-4.256l-.477-2.388z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-slate-100">Custom Engineering</h3>
              <p className="text-slate-400 font-light leading-relaxed">Robust construction, quality hardware, and chemical-resistant finishes that stand up to daily heavy use.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="premium-card p-10 rounded-2xl group cursor-default bg-slate-900 border border-white/5 h-full">
              <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mb-8 border border-brand-500/20 group-hover:bg-brand-500 group-hover:text-slate-900 transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-slate-100">Compliance Ready</h3>
              <p className="text-slate-400 font-light leading-relaxed">Pharma-grade solutions meeting all GMP and safety standards for R&D, QC, and educational labs.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
