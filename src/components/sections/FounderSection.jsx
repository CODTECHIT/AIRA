import React from "react";
import FadeIn from "../animations/FadeIn";

const FounderSection = () => {
  return (
    <section className="aira-section bg-[#0a0f18] w-full">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-white/10">
              <img 
                src="/founder.jpeg" 
                loading="lazy"
                alt="C. Ramesh - Founder" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border-4 border-brand-500/30"
              />
              <div className="text-center md:text-left">
                <p className="text-brand-500 font-bold text-xs uppercase tracking-[0.3em] mb-2">Founder</p>
                <h3 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-4">C. Ramesh</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  With over 10+ years of expertise in laboratory infrastructure, C. Ramesh has established Aira Lab Equipment as Hyderabad's trusted name in pharmaceutical furniture and safety systems.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FounderSection;
