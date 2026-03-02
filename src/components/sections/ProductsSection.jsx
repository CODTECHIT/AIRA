import React from "react";
import { PRODUCT_CATEGORIES } from "../../data/siteData";
import { Link } from "react-router-dom";
import FadeIn from "../animations/FadeIn";

const PHONE_NUMBER = "918008993002";

const ProductsSection = () => {
  const getWhatsAppLink = (productName) => {
    const message = `Hi Aira Lab Equipment, I'm interested in ${productName}. Please share more details and get a quote.`;
    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="products" className="aira-section relative overflow-hidden bg-slate-950/20">
      <div className="container mx-auto px-6">
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-brand-500 font-bold text-xs uppercase tracking-widest block mb-4">Our Range</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-100">Expert Products <br />For Your Laboratory</h2>
          </div>
          <p className="text-slate-400 max-w-sm mb-2 font-light italic text-left">Every design in our C1 Line is optimized for safety, durability, and cGMP compliance.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCT_CATEGORIES.map((product, index) => (
            <FadeIn key={product.name} delay={index * 0.1} className="h-full">
              <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 bg-slate-900 border border-white/5 h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={product.name} 
                  />
                </div>
                <div className="p-8 text-left">
                  <h3 className="text-2xl font-bold mb-3 font-display text-slate-100">{product.name}</h3>
                  <p className="text-slate-400 text-sm mb-6 font-light">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3 opacity-60"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={getWhatsAppLink(product.name)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center bg-brand-500 text-slate-900 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-400 transition-all"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Get Quote
                    </a>
                    <Link to="/contact" className="flex items-center justify-center text-xs font-bold uppercase tracking-widest text-brand-400 hover:text-brand-300 transition-colors px-4 py-3">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
