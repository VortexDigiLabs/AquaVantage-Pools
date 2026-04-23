import { motion } from 'motion/react';
import { Droplets, Settings, Wrench, Wind } from 'lucide-react';

export default function ServiceMatrix() {
  const cards = [
    {
      id: "01",
      icon: <Droplets className="text-brand-deep" size={20} strokeWidth={1.5} />,
      title: "Weekly Route Cleaning",
      desc: "Scheduled skimming, brushing, vacuuming and surface maintenance across recurring contractor routes."
    },
    {
      id: "02",
      icon: <Settings className="text-brand-deep" size={20} strokeWidth={1.5} />,
      title: "Pump & Motor Service",
      desc: "Bearing replacements, seal changes and full pump diagnostics with SABS-compliant componentry."
    },
    {
      id: "03",
      icon: <Wrench className="text-brand-deep" size={20} strokeWidth={1.5} />,
      title: "Green Pool Recovery",
      desc: "48–72 hour recovery protocols for neglected or algae-bound pools — ready for handover."
    },
    {
      id: "04",
      icon: <Wind className="text-brand-deep" size={20} strokeWidth={1.5} />,
      title: "Filter & Chlorinator Care",
      desc: "Media replacements, salt cell servicing and chlorinator calibration to spec and flow rate."
    }
  ];

  return (
    <section className="bg-brand-navy py-20 lg:py-24 relative overflow-hidden" id="services">
      <div className="absolute top-[-1px] left-0 right-0 h-[120px] bg-gradient-to-b from-brand-deep to-transparent opacity-[0.4]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 0.68, 0, 1.2] }}
            className="eyebrow"
          >
            The Contractor Service Matrix
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 0.68, 0, 1.2] }}
            className="text-[clamp(36px,4.2vw,58px)] leading-tight text-brand-navy my-4"
          >
            A full-circle maintenance <span className="serif-italic">programme</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 0.68, 0, 1.2] }}
            className="text-brand-grey text-[16px] font-light leading-relaxed max-w-[620px] mx-auto"
          >
            Seven integrated disciplines — engineered for contractors who manage recurring routes, commercial portfolios, and high-expectation clientele across Gauteng, Western Cape and KwaZulu-Natal.
          </motion.p>
        </div>

        <div className="relative max-w-[1100px] mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 0.68, 0, 1.2] }}
            className="relative w-full rounded-[24px] overflow-hidden hidden md:block aspect-[2.2/1] shadow-[0_20px_60px_rgba(10,39,64,0.3)] mt-12 mb-16 group"
          >
            {/* High-End Architectural Pool Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1576686121558-85412b18aa2c?q=80&w=2400&auto=format&fit=crop" 
              alt="Premium Commercial Pool"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-[1.03]"
            />
            
            {/* Cinematic Gradients for Contrast */}
            <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply transition-opacity duration-1000 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,74,113,0.8)_0%,rgba(11,74,113,0.2)_50%,rgba(11,74,113,0.9)_100%)]" />
            
            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-between p-12">
              
              {/* Top Banner */}
              <div className="text-center">
                 <span className="font-serif text-[20px] text-white tracking-[0.2em] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Commercial Routes</span>
                 <div className="w-[1px] h-8 bg-gradient-to-b from-brand-aqua to-transparent mx-auto mt-4 opacity-70" />
              </div>

              {/* Central Glass Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-full w-[140px] h-[140px] flex flex-col justify-center items-center text-white text-center shadow-[0_0_40px_rgba(255,255,255,0.1)_inset,0_20px_40px_rgba(0,0,0,0.4)] z-10 transition-all duration-500 hover:bg-white/20 hover:scale-105">
                <span className="font-serif text-[42px] leading-none mb-1 text-brand-aqua-light drop-shadow-md">07</span>
                <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/80 drop-shadow-sm">Service<br/>Pillars</span>
              </div>

              {/* Service Pillars Layout - Symmetrical Grid Overlay */}
              <div className="w-full flex justify-between items-end relative z-10">
                
                {/* Left Side Elements */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 text-white hover:text-brand-aqua transition-colors cursor-pointer group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-aqua shadow-[0_0_10px_#00E5FF] group-hover/item:scale-150 transition-transform" />
                    <span className="text-[12px] tracking-[0.15em] font-semibold uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Weekly Cleaning</span>
                  </div>
                  <div className="flex items-center gap-4 text-white hover:text-brand-aqua transition-colors cursor-pointer group/item translate-x-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-aqua shadow-[0_0_10px_#00E5FF] group-hover/item:scale-150 transition-transform" />
                    <span className="text-[12px] tracking-[0.15em] font-semibold uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Pump Maintenance</span>
                  </div>
                  <div className="flex items-center gap-4 text-white hover:text-brand-aqua transition-colors cursor-pointer group/item translate-x-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-aqua shadow-[0_0_10px_#00E5FF] group-hover/item:scale-150 transition-transform" />
                    <span className="text-[12px] tracking-[0.15em] font-semibold uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Green Pool Recovery</span>
                  </div>
                </div>

                {/* Right Side Elements */}
                <div className="flex flex-col gap-6 text-right items-end">
                  <div className="flex items-center gap-4 text-white hover:text-brand-aqua transition-colors cursor-pointer group/item -translate-x-10">
                    <span className="text-[12px] tracking-[0.15em] font-semibold uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Filtration Service</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-aqua shadow-[0_0_10px_#00E5FF] group-hover/item:scale-150 transition-transform" />
                  </div>
                  <div className="flex items-center gap-4 text-white hover:text-brand-aqua transition-colors cursor-pointer group/item -translate-x-6">
                    <span className="text-[12px] tracking-[0.15em] font-semibold uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Leak Detection</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-aqua shadow-[0_0_10px_#00E5FF] group-hover/item:scale-150 transition-transform" />
                  </div>
                  <div className="flex items-center gap-4 text-white hover:text-brand-aqua transition-colors cursor-pointer group/item">
                    <span className="text-[12px] tracking-[0.15em] font-semibold uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Water Balancing</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-aqua shadow-[0_0_10px_#00E5FF] group-hover/item:scale-150 transition-transform" />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
             {cards.map((card, idx) => (
                <motion.div 
                  key={card.id}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.22, 0.68, 0, 1.2] }}
                  className="bg-brand-deep rounded-[18px] p-6 lg:p-[28px_24px] border border-brand-line transition-all duration-400 relative overflow-hidden group hover:-translate-y-1.5 hover:border-brand-aqua"
                >
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-aqua to-brand-gold origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100" />
                  
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-cyan to-white flex items-center justify-center mb-4 transition-transform duration-400 group-hover:rotate-[10deg] group-hover:scale-[1.1]">
                    {card.icon}
                  </div>
                  <span className="font-serif text-[14px] text-brand-gold tracking-[0.15em] italic">
                    {card.id} —
                  </span>
                  <h4 className="text-[24px] mt-2 mb-2 text-brand-navy">{card.title}</h4>
                  <p className="text-[13.5px] text-brand-grey font-light leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
