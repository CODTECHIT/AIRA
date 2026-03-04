import React from "react";
import FadeIn from "../animations/FadeIn";

const ShowcaseVideo = () => {
  return (
    <section className="aira-section bg-[#0a0f18] relative overflow-hidden py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[514px] h-[514px] bg-brand-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 px-4 py-2 rounded-full mb-6">
              <span className="text-brand-400 text-sm font-medium uppercase tracking-wider">The Aira Difference</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-slate-100 mb-6">
              Precision Engineering, <span className="text-brand-500 italic">Proven Excellence</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Watch how we transform laboratory spaces with custom-engineered furniture 
              designed for safety, efficiency, and long-term durability.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="relative max-w-6xl mx-auto group">
            {/* Video Container with Premium Border/Effect */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/10 aspect-video bg-slate-900 group-hover:shadow-[0_0_100px_rgba(249,115,22,0.15)] transition-all duration-700">
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster="/hero.webp"
                preload="none"
                onCanPlay={(e) => e.target.play()}
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none transition-opacity duration-500"></div>
            </div>

            {/* Decorative Frame Elements */}
            <div className="absolute -inset-4 border border-brand-500/10 rounded-[2.5rem] -z-10 group-hover:border-brand-500/20 transition-all duration-700"></div>
            
            {/* Floating Stats or Badges (Optional but premium) */}
            <div className="absolute -bottom-6 -right-6 md:right-12 bg-slate-900/90 backdrop-blur-md border border-brand-500/30 p-6 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center animate-pulse">
                   <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                </div>
                <div>
                  <div className="text-slate-100 font-bold">Watch Showcase</div>
                  <div className="text-slate-400 text-sm">Industrial Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Previous Videos Grid */}
        <div className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-200">Explore Our Facility & Process</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn direction="left" delay={0.3}>
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/jcjCZUqD7Po"
                    title="Manufacturing Facility"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="text-xl font-bold text-slate-300">Manufacturing Facility</h4>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/j0e6n-6XpEs"
                    title="Working Process"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="text-xl font-bold text-slate-300">Working Process</h4>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Brand Integration Bar */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl font-bold text-slate-400 tracking-widest uppercase">Pharma</span>
          <span className="text-xl font-bold text-slate-400 tracking-widest uppercase">Biotech</span>
          <span className="text-xl font-bold text-slate-400 tracking-widest uppercase">Research</span>
          <span className="text-xl font-bold text-slate-400 tracking-widest uppercase">Healthcare</span>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseVideo;
