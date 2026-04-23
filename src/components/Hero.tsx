import { CSSProperties } from 'react';
import { motion } from 'motion/react';
import { Crosshair, RefreshCcw, Droplets } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-x-clip flex items-center pt-[120px] pb-[80px]">
      {/* Video Background */}
      <video 
        src="https://bxmgsjtsxygxfgvpnnjh.supabase.co/storage/v1/object/public/PoolWebsite%20Template/Swimmer%201%20WebM.webm" 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-[1.1] contrast-[1.15] saturate-[1.3] transform-gpu" 
      />

      {/* Overlay Layers for Readability and Premium Vibe */}
      {/* Significantly reduced opacity in the center to preserve HD look */}
      <div className="absolute inset-0 bg-brand-navy/10 z-0 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(11,74,113,0.6)_100%)] z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-navy/10 to-brand-navy/95 z-0" />

      {/* Floating Badges */}
      <div className="hidden lg:flex absolute top-[20%] right-[8%] z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-[18px] p-4 text-white items-center gap-3 shadow-2xl badge-float" style={{ animationDelay: '0s' }}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-aqua to-brand-aqua-light flex items-center justify-center text-white"><Crosshair size={20} className="opacity-90" /></div>
        <div><div className="text-[11px] tracking-widest uppercase opacity-70">Pools Serviced</div><div className="font-serif text-[22px] font-medium leading-none mt-1">14,280+</div></div>
      </div>
      <div className="hidden lg:flex absolute top-[52%] right-[6%] z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-[18px] p-4 text-white items-center gap-3 shadow-2xl badge-float" style={{ animationDelay: '2s' }}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-aqua to-brand-aqua-light flex items-center justify-center text-white"><RefreshCcw size={20} className="opacity-90" /></div>
        <div><div className="text-[11px] tracking-widest uppercase opacity-70">Avg. Turnaround</div><div className="font-serif text-[22px] font-medium leading-none mt-1">48 hrs</div></div>
      </div>
      <div className="hidden lg:flex absolute top-[80%] right-[12%] z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-[18px] p-4 text-white items-center gap-3 shadow-2xl badge-float" style={{ animationDelay: '4s' }}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-aqua to-brand-aqua-light flex items-center justify-center text-white"><Droplets size={20} className="opacity-90" /></div>
        <div><div className="text-[11px] tracking-widest uppercase opacity-70">Routes Optimised</div><div className="font-serif text-[22px] font-medium leading-none mt-1">312 Wk.</div></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-40 w-full">
        <div className="max-w-[1000px] text-left">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 0.68, 0, 1.2] }}
              className="eyebrow text-brand-aqua-light drop-shadow-sm"
            >
              For Pool Maintenance Contractors · South Africa
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 0.68, 0, 1.2] }}
              className="text-[clamp(40px,5.8vw,90px)] text-white mt-[12px] mb-[24px] font-black uppercase italic leading-[1.1] tracking-tight font-display drop-shadow-[0_4px_16px_rgba(0,0,0,0.15)] py-2"
            >
              Run a sharper,<br/> <span className="italic font-black text-transparent stroke-text font-display drop-shadow-none">more profitable</span><br/> pool service <br/> operation.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 0.68, 0, 1.2] }}
              className="text-[16px] xl:text-[18px] text-white max-w-[620px] mb-8 lg:mb-10 font-medium leading-relaxed drop-shadow-md"
            >
              AquaVantage partners with pool maintenance contractors, route operators and commercial service teams across South Africa — delivering certified technicians, water-quality systems, and route technology that keep every client on a predictable maintenance rhythm.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 36 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 0.68, 0, 1.2] }}
               className="flex gap-[14px] flex-wrap"
            >
              <a href="#contact" className="bg-brand-gold text-white px-[26px] py-3 rounded-full text-[13px] font-medium tracking-[0.06em] border border-brand-gold transition-all duration-300 hover:bg-[#b89055] hover:border-[#b89055] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(201,169,106,0.4)]">
                Request a Contractor Demo
              </a>
              <a href="#services" className="border border-white/40 text-white bg-transparent px-[26px] py-3 rounded-full text-[13px] font-medium tracking-[0.06em] transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-[2px]">
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 text-white/60 text-[11px] tracking-[0.3em] uppercase z-20" style={{ writingMode: 'vertical-rl' }}>
        <span className="fade-up-down block">Scroll</span>
      </div>
    </section>
  );
}
