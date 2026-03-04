<<<<<<< HEAD
import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Lazy load sections below the fold
const AboutSection = lazy(() => import("../components/sections/AboutSection"));
const ProductsSection = lazy(() => import("../components/sections/ProductsSection"));
const FounderSection = lazy(() => import("../components/sections/FounderSection"));
const ProcessSection = lazy(() => import("../components/sections/ProcessSection"));
const WorkSection = lazy(() => import("../components/sections/WorkSection"));
const ContactSection = lazy(() => import("../components/sections/ContactSection"));
const ShowcaseVideo = lazy(() => import("../components/sections/ShowcaseVideo"));

// Loading fallback
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center bg-[#0a0f18]">
    <div className="w-8 h-8 border-4 border-brand-500/20 border-t-brand-500 rounded-full animate-spin"></div>
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
=======
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../components/animations/FadeIn";
import AboutSection from "../components/sections/AboutSection";
import ProductsSection from "../components/sections/ProductsSection";
import FounderSection from "../components/sections/FounderSection";
import ProcessSection from "../components/sections/ProcessSection";
import WorkSection from "../components/sections/WorkSection";
import ContactSection from "../components/sections/ContactSection";
>>>>>>> 8f593df8ea281f28f9bdc3fc46d321c621a1963f

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f18]">
<<<<<<< HEAD
      {/* Hero Background Image - Optimized for LCP */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          src="/hero.webp" 
          alt="Laboratory Equipment" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
=======
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.webp" 
          alt="Laboratory Equipment" 
          className="w-full h-full object-cover opacity-30"
>>>>>>> 8f593df8ea281f28f9bdc3fc46d321c621a1963f
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/80 to-[#0a0f18]/60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-500/20 via-[#0a0f18] to-[#0a0f18]"></div>
      </div>

<<<<<<< HEAD
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10 py-20 md:py-32"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div variants={itemVariants}>
=======
      <div className="container mx-auto px-6 relative z-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
>>>>>>> 8f593df8ea281f28f9bdc3fc46d321c621a1963f
            <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
              <span className="text-brand-400 text-sm font-medium">Premium Lab Furniture Manufacturer</span>
            </div>
<<<<<<< HEAD
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
            <span className="text-slate-100">Custom Lab Design.</span>
            <br />
            <span className="text-brand-500">Robust Fabrication.</span>
            <br />
            <span className="text-slate-100">Absolute Workspace Safety.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Aira Lab Equipment - Your trusted manufacturer of pharmaceutical furniture, 
            industrial fume hoods, and cleanroom equipment in Hyderabad, India.
          </motion.p>

          <motion.div variants={itemVariants}>
=======
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              <span className="text-slate-100">Custom Lab Design.</span>
              <br />
              <span className="text-brand-500">Robust Fabrication.</span>
              <br />
              <span className="text-slate-100">Absolute Workspace Safety.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Aira Lab Equipment - Your trusted manufacturer of pharmaceutical furniture, 
              industrial fume hoods, and cleanroom equipment in Hyderabad, India.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
>>>>>>> 8f593df8ea281f28f9bdc3fc46d321c621a1963f
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/products" 
                className="bg-brand-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-base hover:bg-brand-400 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-500/25"
              >
                View Products
              </Link>
              <Link 
                to="/contact" 
                className="border border-white/20 text-slate-200 px-8 py-4 rounded-xl font-bold text-base hover:bg-white/5 hover:border-white/40 transition-all"
              >
                Get Quote
              </Link>
            </div>
<<<<<<< HEAD
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants}>
=======
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.4}>
>>>>>>> 8f593df8ea281f28f9bdc3fc46d321c621a1963f
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20 pt-10 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-500 mb-2">10+</div>
                <div className="text-slate-500 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-500 mb-2">150+</div>
                <div className="text-slate-500 text-sm">Installations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-500 mb-2">500+</div>
                <div className="text-slate-500 text-sm">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-500 mb-2">24-48h</div>
                <div className="text-slate-500 text-sm">Fast Response</div>
              </div>
            </div>
<<<<<<< HEAD
          </motion.div>
        </div>
      </motion.div>
=======
          </FadeIn>
        </div>
      </div>
>>>>>>> 8f593df8ea281f28f9bdc3fc46d321c621a1963f

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

<<<<<<< HEAD

=======
>>>>>>> 8f593df8ea281f28f9bdc3fc46d321c621a1963f
const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
<<<<<<< HEAD
      <Suspense fallback={<SectionLoader />}>
        <ShowcaseVideo />
        <AboutSection />
        <ProductsSection />
        <FounderSection />
        <WorkSection limit={4} />
        <ProcessSection />
        <ContactSection />
      </Suspense>
=======
      {/* Videos Section */}
      <section className="aira-section bg-[#0a0f18]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-100 mb-4">Precision At Work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Experience the quality, scale, and craftsmanship of our manufacturing process.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <FadeIn direction="left">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/jcjCZUqD7Po"
                      title="Manufacturing Facility"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-200">Our Facility</h3>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/j0e6n-6XpEs"
                      title="Working Process"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-200">Working Process</h3>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      
      <AboutSection />
      <ProductsSection />
      <FounderSection />
      <WorkSection limit={4} />
      <ProcessSection />
      <ContactSection />
>>>>>>> 8f593df8ea281f28f9bdc3fc46d321c621a1963f
    </div>
  );
};

export default Home;
