import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { id: "/", label: "Home" },
  { id: "/about", label: "About" },
  { id: "/products", label: "Products" },
  { id: "/process", label: "Process" },
  { id: "/contact", label: "Contact" }
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };



  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsOpen(false);
  };


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0f18]/95 backdrop-blur-xl border-b border-white/10 py-2 md:py-3 px-4 md:px-12 flex justify-between items-center">
      <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3">
        <img src="/logo.png" alt="Aira Lab Equipment" className="h-10 md:h-14 w-auto" />
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10 text-sm font-semibold tracking-wide">
        {NAV_ITEMS.map((item) => (
          <Link 
            key={item.id} 
            to={item.id} 
            onClick={handleNavClick}
            className={`hover:text-brand-400 transition-all duration-300 uppercase relative ${location.pathname === item.id ? 'text-brand-500' : 'text-slate-200'}`}
          >
            {item.label}
            {location.pathname === item.id && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-500 rounded-full" />
            )}
          </Link>
        ))}
      </div>
      <Link to="/contact" className="hidden md:flex bg-brand-500 text-slate-900 px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-brand-400 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-500/20">Get Quote</Link>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-slate-100 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-slate-100 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-slate-100 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0f18]/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.id} 
                to={item.id} 
                onClick={handleNavClick}
                className={`py-2 px-4 rounded-lg hover:bg-white/5 transition-colors uppercase ${location.pathname === item.id ? 'text-brand-500 bg-white/5' : 'text-slate-200'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="bg-brand-500 text-slate-900 px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest text-center mt-2"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
