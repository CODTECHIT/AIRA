import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../animations/FadeIn";

const PROJECTS = [
  {
    title: "QC Microbiology Lab",
    category: "Pharmaceutical",
    image: "/1.jpeg"
  },
  {
    title: "R&D Research Station",
    category: "Research",
    image: "/2.jpeg"
  },
  {
    title: "Instrument Lab Setup",
    category: "Analysis",
    image: "/3.jpeg"
  },
  {
    title: "Chemistry Analysis Lab",
    category: "Industrial",
    image: "/4.jpeg"
  },
  {
    title: "Cleanroom Furniture",
    category: "Pharma",
    image: "/5.jpeg"
  },
  {
    title: "Advanced Fumehoods",
    category: "Safety Systems",
    image: "/6.jpeg"
  },
  {
    title: "Sterile Storage Area",
    category: "Warehousing",
    image: "/7.jpeg"
  },
  {
    title: "Modern Lab Infrastructure",
    category: "Turnkey",
    image: "/8.jpeg"
  },
  {
    title: "Laboratory Installation",
    category: "Setup",
    image: "/9.jpeg"
  },
  {
    title: "Custom Lab Design",
    category: "Engineering",
    image: "/10.jpeg"
  }
];

const WorkSection = ({ showTitle = true, limit = null }) => {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section id="work" className="relative bg-[#0a0f18] overflow-hidden">
      <div className="container mx-auto px-6">
        {showTitle && (
          <header className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-12 ${limit ? 'mb-10' : 'mb-16'}`}>
            <div className="max-w-3xl text-left relative pl-6">
              {/* Vertical Accent Bar */}
              <div className="absolute left-0 top-1 bottom-1 w-1 bg-brand-500 rounded-full" />
              
              <span className="text-brand-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] block mb-3 opacity-90">
                Featured Projects
              </span>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-slate-100 leading-[1.1]">
                Excellence In <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 drop-shadow-brand">
                  Every Detail
                </span>
              </h2>
            </div>
            
            {!limit && (
              <div className="md:max-w-xs border-l border-white/10 pl-6 md:pl-0 md:border-l-0">
                <p className="text-slate-400 text-sm italic font-light leading-relaxed">
                  Showcasing our precision engineering in top-tier pharmaceutical and research facilities across India.
                </p>
              </div>
            )}
          </header>
        )}


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedProjects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-900 border border-white/10 shadow-2xl hover:border-brand-500/30 transition-all duration-500">
                <img 
                  src={project.image} 
                  loading="lazy"
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-brand-500 font-bold text-[10px] uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{project.category}</span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-xl font-bold text-white font-display mb-1">{project.title}</h3>
                    <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                      <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                  </div>
                  <div className="w-12 h-1 bg-brand-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 mt-2" />
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
        
        {limit && (
          <div className="flex justify-center mt-16">
            <Link to="/work" className="group flex items-center gap-4 bg-white/5 border border-white/10 px-10 py-4 rounded-2xl hover:bg-brand-500 transition-all duration-500">
               <span className="text-sm font-bold uppercase tracking-widest group-hover:text-slate-900">View All Projects</span>
               <svg className="w-5 h-5 group-hover:text-slate-900 translate-x-0 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
