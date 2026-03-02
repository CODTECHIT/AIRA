import React from "react";
import { Link } from "react-router-dom";
import WorkSection from "../components/sections/WorkSection";
import FadeIn from "../components/animations/FadeIn";

const Work = () => {
  return (
    <div className="min-h-screen bg-[#0a0f18]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
             <span className="text-brand-500 font-bold text-sm uppercase tracking-[0.4em] mb-4 block">Portfolio</span>
             <h1 className="text-5xl md:text-7xl font-bold font-display text-slate-100 mb-8">Installation <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Showcase</span></h1>
             <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
               Explore our portfolio of state-of-the-art laboratory environments delivered to leading pharmaceutical companies and educational institutions.
             </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <main className="pb-32">
        <WorkSection showTitle={false} />
      </main>

      {/* Call to Action */}
      <section className="container mx-auto px-6 pb-32">
        <FadeIn>
          <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('/hero.webp')] opacity-10 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
             <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-8 max-w-2xl mx-auto">Ready to build your world-class laboratory?</h2>
               <div className="flex flex-wrap justify-center gap-6">
                 <Link to="/contact" className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-black/20">Get a Free Layout</Link>
                 <a href="https://wa.me/918008993002" className="bg-white/20 backdrop-blur-md border border-white/30 text-slate-900 px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/30 transition-all">WhatsApp Us</a>
               </div>
             </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Work;
