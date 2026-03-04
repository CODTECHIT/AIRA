import React, { useState } from "react";

const PHONE_NUMBER = "918008993002";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, company, message } = formData;
    const whatsappMessage = `*New Enquiry from Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Company:* ${company}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="aira-section bg-[#0a0f18] relative overflow-hidden py-16 md:py-24">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-500/5 blur-[80px] md:blur-[120px] rounded-full -mr-64 -mt-64"></div>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-20">
        <div className="text-left">
          <span className="text-brand-500 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Contact Us</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight text-slate-100">Start Your Lab <br />Transformation.</h2>
          
          <div className="space-y-10 mt-12">
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-brand-500/10 rounded-xl text-brand-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-5.078 0-9.263-3.046-10.978-7.416a11.036 11.036 0 01-1.047-3.606V5z"></path></svg></div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Call for Layout & Quote</p>
                <a href="tel:+918008993002" className="text-2xl font-display font-bold hover:text-brand-500 transition-colors text-slate-100">+91 80089 93002</a>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="p-4 bg-brand-500/10 rounded-xl text-brand-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Visit Factory / Office</p>
                <p className="text-lg font-light text-slate-300">8-2-289/19/349/A, Indira Nagar, Banjara Hills, Hyderabad – 500033</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="p-4 bg-brand-500/10 rounded-xl text-brand-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Email Enquiries</p>
                <a href="mailto:airalabequipment@gmail.com" className="text-lg font-light text-slate-300 hover:text-brand-500">airalabequipment@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 md:p-10 lg:p-14 rounded-2xl md:rounded-[40px] border border-white/5 relative shadow-3xl bg-white/5 backdrop-blur-xl">
          <h3 className="text-2xl font-bold font-display mb-10 text-slate-100 text-left">Send us a message</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-500 transition-colors w-full text-slate-100 placeholder:text-slate-500" 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-500 transition-colors w-full text-slate-100 placeholder:text-slate-500" 
              />
            </div>
            <input 
              type="text" 
              name="company"
              placeholder="Company / Institution" 
              value={formData.company}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-500 transition-colors w-full text-slate-100 placeholder:text-slate-500" 
            />
            <textarea 
              rows="4" 
              name="message"
              placeholder="Tell us about your lab requirement..." 
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-500 transition-colors w-full resize-none text-slate-100 placeholder:text-slate-500"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-brand-500 text-slate-900 py-6 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-brand-600 transition-all shadow-soft-orange flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
