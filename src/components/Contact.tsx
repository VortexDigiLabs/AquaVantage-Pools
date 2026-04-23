import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Mail, Check } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-brand-navy text-[#F5F5F0]" id="contact">
      <div className="absolute -left-[300px] -bottom-[300px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,75,0,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, ease: [0.22, 0.68, 0, 1.2] }}
        >
          <span className="eyebrow">Request a Contractor Demo</span>
          <h2 className="text-[clamp(38px,4.5vw,56px)] my-4 leading-tight">
            Let's scale your pool service <span className="serif-italic stroke-text text-transparent">operation.</span>
          </h2>
          <p className="text-white/75 font-light max-w-[460px] leading-relaxed mb-10">
            Book a 30-minute consultation with our contractor success team. We'll walk you through route planning, compliance tools and onboarding timelines tailored to your region.
          </p>

          <div className="flex flex-col">
            <div className="flex gap-[18px] py-[22px] border-t border-white/10 group transition-all duration-300 hover:pl-2.5">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-aqua/15 flex items-center justify-center text-brand-aqua transition-colors duration-300 group-hover:bg-brand-aqua/30">
                <Phone size={20} strokeWidth={1.8} />
              </div>
              <div>
                <strong className="block text-[15px] font-medium">+27 11 482 9100</strong>
                <span className="text-white/65 text-[13.5px] font-light">Mon–Fri · 07:30 – 17:30 SAST</span>
              </div>
            </div>
            
            <div className="flex gap-[18px] py-[22px] border-t border-white/10 group transition-all duration-300 hover:pl-2.5">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-aqua/15 flex items-center justify-center text-brand-aqua transition-colors duration-300 group-hover:bg-brand-aqua/30">
                <MessageCircle size={20} strokeWidth={1.8} />
              </div>
              <div>
                <strong className="block text-[15px] font-medium">WhatsApp +27 82 555 0194</strong>
                <span className="text-white/65 text-[13.5px] font-light">Instant quotes · contractor escalations</span>
              </div>
            </div>

            <div className="flex gap-[18px] py-[22px] border-t border-white/10 group transition-all duration-300 hover:pl-2.5">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-aqua/15 flex items-center justify-center text-brand-aqua transition-colors duration-300 group-hover:bg-brand-aqua/30">
                <MapPin size={20} strokeWidth={1.8} />
              </div>
              <div>
                <strong className="block text-[15px] font-medium">Gauteng · Western Cape · KZN</strong>
                <span className="text-white/65 text-[13.5px] font-light">Regional contractor partnerships across SA</span>
              </div>
            </div>

            <div className="flex gap-[18px] py-[22px] border-y border-white/10 group transition-all duration-300 hover:pl-2.5">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-aqua/15 flex items-center justify-center text-brand-aqua transition-colors duration-300 group-hover:bg-brand-aqua/30">
                <Mail size={20} strokeWidth={1.8} />
              </div>
              <div>
                <strong className="block text-[15px] font-medium">contractors@aquavantage.co.za</strong>
                <span className="text-white/65 text-[13.5px] font-light">For enrolment, quotes & partnerships</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 0.68, 0, 1.2] }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-[22px] p-7 md:p-[44px_40px] backdrop-blur-md">
              <h3 className="text-[28px] mb-6 tracking-tight">Contractor Enrolment Enquiry</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-[18px]">
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-white/60 mb-2">Company Name</label>
                  <input type="text" required placeholder="Your pool service co." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] transition-colors focus:outline-none focus:border-brand-aqua focus:bg-brand-aqua/5 placeholder:text-white/30" />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-white/60 mb-2">Contact Name</label>
                  <input type="text" required placeholder="Full name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] transition-colors focus:outline-none focus:border-brand-aqua focus:bg-brand-aqua/5 placeholder:text-white/30" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-[18px]">
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-white/60 mb-2">Mobile</label>
                  <input type="tel" required placeholder="+27 ..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] transition-colors focus:outline-none focus:border-brand-aqua focus:bg-brand-aqua/5 placeholder:text-white/30" />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-white/60 mb-2">Region</label>
                  <select required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] transition-colors focus:outline-none focus:border-brand-aqua focus:bg-brand-aqua/5 appearance-none">
                    <option value="" className="bg-[#0a2740]">Select region</option>
                    <option className="bg-[#0a2740]">Gauteng</option>
                    <option className="bg-[#0a2740]">Western Cape</option>
                    <option className="bg-[#0a2740]">KwaZulu-Natal</option>
                    <option className="bg-[#0a2740]">Eastern Cape</option>
                    <option className="bg-[#0a2740]">Free State</option>
                    <option className="bg-[#0a2740]">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-[18px]">
                <label className="block text-[11px] tracking-[0.2em] uppercase text-white/60 mb-2">Pools under management</label>
                <select required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] transition-colors focus:outline-none focus:border-brand-aqua focus:bg-brand-aqua/5 appearance-none">
                  <option value="" className="bg-[#0a2740]">Select range</option>
                  <option className="bg-[#0a2740]">1 – 25 pools</option>
                  <option className="bg-[#0a2740]">26 – 75 pools</option>
                  <option className="bg-[#0a2740]">76 – 150 pools</option>
                  <option className="bg-[#0a2740]">150+ pools (commercial)</option>
                </select>
              </div>

              <div className="mb-[18px]">
                <label className="block text-[11px] tracking-[0.2em] uppercase text-white/60 mb-2">Tell us about your operation</label>
                <textarea placeholder="Current route size, growth goals, commercial contracts..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] transition-colors focus:outline-none focus:border-brand-aqua focus:bg-brand-aqua/5 min-h-[100px] resize-y placeholder:text-white/30"></textarea>
              </div>

              <button type="submit" disabled={loading} className="w-full mt-2 bg-brand-aqua text-black border-none rounded-full py-4 text-[13px] tracking-[0.1em] uppercase font-bold cursor-pointer transition-all duration-300 hover:bg-brand-aqua-light hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-80 disabled:cursor-not-allowed">
                {loading ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </form>
          ) : (
            <div className="text-center py-10 px-5">
               <motion.div 
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ type: "spring", stiffness: 200, damping: 20 }}
                 className="w-[70px] h-[70px] rounded-full bg-brand-aqua/15 mx-auto mb-5 flex items-center justify-center text-brand-aqua text-3xl"
               >
                 <Check strokeWidth={3} />
               </motion.div>
               <h4 className="text-[28px] mb-2.5">Enquiry received!</h4>
               <p className="text-white/70 font-light">A contractor success manager will be in touch within 24 hours.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
