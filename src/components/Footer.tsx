import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-[#FFFFFF]/70 pt-[70px] pb-[30px]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Final Placement Card */}
        <div className="bg-gradient-to-r from-brand-deep to-brand-navy border border-brand-aqua/30 rounded-3xl p-8 md:p-12 mb-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.1)_0%,transparent_70%)] pointer-events-none" />
          <h3 className="text-3xl md:text-5xl font-display font-black italic text-white mb-4 relative z-10">READY TO DIVE IN?</h3>
          <p className="text-lg text-white/80 mb-8 relative z-10 max-w-xl mx-auto">Join the fastest growing network of pool maintenance professionals in South Africa.</p>
          <div className="inline-block bg-black/20 rounded-full px-6 py-4 md:px-8 md:py-4 backdrop-blur-md border border-white/10 relative z-10 transition-transform duration-300 hover:scale-[1.02]">
            <a href="https://aquavantage.co.za" className="text-xl md:text-2xl font-bold tracking-widest text-brand-aqua flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-aqua animate-pulse" />
              AQUAVANTAGE.CO.ZA
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10 pb-11 border-b border-white/10 gap-10">
          
          <div>
            <a href="#" className="font-serif text-[26px] font-semibold text-white tracking-widest flex items-center gap-2.5 no-underline hover:opacity-90 transition-opacity inline-flex mb-4 group">
              <span className="w-8 h-8 rounded-full bg-brand-aqua relative shrink-0 transition-transform duration-400 group-hover:rotate-90 before:content-[''] before:absolute before:inset-[7px] before:rounded-full before:border-[1.5px] before:border-[#1a1a1a]" />
              AquaVantage
            </a>
            <p className="text-[13.5px] text-white/60 max-w-[320px] font-light mt-4 leading-relaxed">
              South Africa's contractor-first pool maintenance platform. Route technology, chemistry supply, technician training and compliance — all under one premium roof.
            </p>
            <div className="flex gap-2.5 mt-5">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-brand-aqua hover:text-brand-aqua hover:-translate-y-[3px]">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-brand-aqua hover:text-brand-aqua hover:-translate-y-[3px]">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-brand-aqua hover:text-brand-aqua hover:-translate-y-[3px]">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="WhatsApp" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-brand-aqua hover:text-brand-aqua hover:-translate-y-[3px]">
                <MessageCircle size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-serif text-white text-[20px] mb-4">Services</h5>
            <ul className="list-none space-y-2.5">
              <li><a href="#services" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">Weekly Route Cleaning</a></li>
              <li><a href="#services" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">Green Pool Recovery</a></li>
              <li><a href="#services" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">Pump & Filter Service</a></li>
              <li><a href="#services" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">Leak Detection</a></li>
              <li><a href="#services" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">Commercial Contracts</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-white text-[20px] mb-4">Company</h5>
            <ul className="list-none space-y-2.5">
              <li><a href="#process" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">Onboarding</a></li>
              <li><a href="#packages" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">Packages</a></li>
              <li><a href="#testimonials" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">Case Studies</a></li>
              <li><a href="#" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">Compliance</a></li>
              <li><a href="#" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-white text-[20px] mb-4">Contact</h5>
            <ul className="list-none space-y-2.5">
              <li><a href="tel:+27114829100" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">+27 11 482 9100</a></li>
              <li><a href="#" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">WhatsApp +27 82 555 0194</a></li>
              <li><a href="mailto:contractors@aquavantage.co.za" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">contractors@aquavantage.co.za</a></li>
              <li><a href="#" className="text-white/65 text-[13.5px] transition-all hover:text-brand-aqua-light hover:pl-1.5 inline-block">12 Katherine St, Sandton</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-6 flex flex-col md:flex-row justify-between text-[12px] text-white/50 gap-2.5">
          <div>© 2025 AquaVantage Pool Contractor Services (Pty) Ltd. All rights reserved.</div>
          <div>Reg. 2008/114782/07 · VAT 4530279181</div>
        </div>

      </div>
    </footer>
  );
}
