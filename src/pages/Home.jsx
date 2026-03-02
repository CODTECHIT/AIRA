import React from "react";
import { Link } from "react-router-dom";
import { STATS } from "../data/siteData";
import AboutSection from "../components/sections/AboutSection";
import ProductsSection from "../components/sections/ProductsSection";
import ProcessSection from "../components/sections/ProcessSection";
import ContactSection from "../components/sections/ContactSection";
import FounderSection from "../components/sections/FounderSection";
import FadeIn from "../components/animations/FadeIn";

const Home = () => {
  return (
    <>
      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden pt-14 md:pt-20">
        <div className="absolute inset-0 bg-hero-gradient z-10" />
        <img src="/hero.png" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Laboratory background" />
        
        <div className="container mx-auto px-6 relative z-20 md:pt-20">
          <div className="max-w-4xl">
            <FadeIn direction="up">
              <span className="text-brand-400 font-bold text-xs uppercase tracking-[0.4em] block mb-6 px-1 border-l-2 border-brand-500 ml-1">
                Direct Factory Pricing | C1 Elite Line
              </span>
              
              <h1 className="text-4xl md:text-8xl font-bold font-display leading-[1.05] mb-8 text-slate-100">
                Custom Lab Design. <br />
                Robust Fabrication. <br />
                <span className="text-brand-500 drop-shadow-brand">Absolute <br className="hidden md:block" />Workspace Safety.</span>
              </h1>

              <p className="text-slate-300 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed font-light">
                Hyderabad's trusted manufacturer for high-performance pharma furniture and fume hoods. We engineer precision-critical environments for QC & R&D labs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-20">
                <Link to="/products" className="bg-brand-500 text-slate-900 px-12 py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-brand-400 hover:scale-[1.02] transition-all flex items-center justify-center shadow-xl shadow-brand-500/20">
                  Explore Catalog
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
                <Link to="/contact" className="border border-white/20 text-white px-12 py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center backdrop-blur-sm">
                  Get Free Layout
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-12">
                {STATS.map((stat, index) => (
                  <div key={stat.label} className="relative">
                    <div className="text-3xl md:text-5xl font-bold font-display text-brand-500 mb-2">{stat.value}</div>
                    <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 opacity-50 animate-pulse">
           <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Scroll</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-brand-500 to-transparent"></div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-[#0a0f18] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-slate-100 mb-4">See Our Work In Action</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Experience the quality and precision of our lab infrastructure solutions</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-4xl mx-auto">
            <iframe 
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/jcjCZUqD7Po?autoplay=1&mute=1&loop=1&playlist=jcjCZUqD7Po&controls=1&rel=0"
              title="Aira Lab Equipment Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 border-y border-white/5 py-10 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 w-full text-center md:w-auto mb-4 md:mb-0">Technical Expertise:</span>
          {["Pharmaceuticals", "Biotechnology", "Chemical R&D", "QA/QC Labs", "Cleanrooms"].map((item) => (
             <div key={item} className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
               <span className="text-xs uppercase tracking-widest font-semibold text-slate-200">{item}</span>
             </div>
          ))}
        </div>
      </section>

      {/* Overview of all sections on Home Page */}
      <AboutSection />
      <ProductsSection />
      <FounderSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
};

export default Home;
