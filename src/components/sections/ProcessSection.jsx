import React from "react";

const ProcessSection = () => {
  return (
    <section id="process" className="aira-section container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-2xl uppercase tracking-[0.4em] font-bold text-brand-500 mb-4 italic">How it Works</h2>
        <p className="text-4xl md:text-5xl font-bold font-display leading-tight max-w-2xl mx-auto text-slate-100">Ensuring a precision <br />delivery every time.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-white/10 -z-0"></div>
        
        {[
          { step: "01", title: "Site Survey", desc: "Detailed measurements and site analysis for spatial optimization.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
          { step: "02", title: "Design Proposal", desc: "2D & 3D layout planning with custom material selections.", icon: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
          { step: "03", title: "Manufacturing", desc: "Precision fabrication using heavy-duty MS & GI materials.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
          { step: "04", title: "Installation", desc: "Professional on-site assembly and testing by our expert team.", icon: "M5 13l4 4L19 7" }
        ].map((item, i) => (
          <div key={item.step} className="p-10 rounded-2xl premium-card text-center relative z-10 hover:border-brand-500/50 transition-colors bg-slate-900 border border-white/5 shadow-2xl">
            <div className="w-14 h-14 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-soft-orange">
              <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
            </div>
            <div className="text-brand-500 font-bold mb-2 text-sm italic">{item.step}</div>
            <h3 className="text-xl font-bold mb-4 font-display uppercase tracking-wider text-slate-100">{item.title}</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
