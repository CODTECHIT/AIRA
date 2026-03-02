import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/layout/WhatsAppFloat";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

// Helper to scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0f18] text-slate-100 selection:bg-brand-500 selection:text-white">
        <Navbar />
        
        <main className="pt-14 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/process" element={<Process />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
