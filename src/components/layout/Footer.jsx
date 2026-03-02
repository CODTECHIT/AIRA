import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Aira Lab Equipment" className="h-6 md:h-8 w-auto" />
            </Link>
            <p className="text-slate-400 text-sm max-w-md mb-4">
              Hyderabad's premier direct manufacturer of bespoke pharmaceutical laboratory furniture and ergonomic safety systems.
            </p>
            <div className="flex gap-4">
              <a href="tel:+918008993002" className="text-brand-500 text-sm hover:text-brand-400">+91 80089 93002</a>
              <span className="text-slate-600">|</span>
              <a href="mailto:airalabequipment@gmail.com" className="text-slate-400 text-sm hover:text-brand-400">airalabequipment@gmail.com</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-100 font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-brand-500 transition-colors">About</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-brand-500 transition-colors">Products</Link></li>
              <li><Link to="/process" className="text-slate-400 hover:text-brand-500 transition-colors">Process</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-brand-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-100 font-bold text-sm uppercase tracking-wider mb-4">Location</h4>
            <p className="text-slate-400 text-sm">
              8-2-289/19/349/A, Indira Nagar,<br />
              Banjara Hills,<br />
              Hyderabad – 500033
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">© {new Date().getFullYear()} Aira Lab Equipment. All Rights Reserved.</p>
          <a 
            href="https://www.codtechitsolutions.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 text-xs hover:text-brand-500 transition-colors flex items-center gap-1"
          >
            Designed by <span className="text-brand-500 font-bold">CODTECH IT SOLUTIONS</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
